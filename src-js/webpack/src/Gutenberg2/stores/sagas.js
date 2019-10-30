/**
 * External dependencies
 */
import { call, put, select, takeEvery, takeLatest } from "redux-saga/effects";

/**
 * WordPress dependencies
 */
import apiFetch from "@wordpress/api-fetch";
import * as data from "@wordpress/data";

/**
 * Internal dependencies
 */
import { receiveAnalysisResults, toggleLinkSuccess, updateOccurrencesForEntity } from "../../Edit/actions";
import { ANNOTATION, TOGGLE_ENTITY, TOGGLE_LINK } from "../../Edit/constants/ActionTypes";
import actions from "./actions";
import parseAnalysisResponse from "./compat";
import { EDITOR_STORE } from "../constants";
import EditorOps from "../api/EditorOps";
import { makeEntityAnnotationsSelector, mergeArray } from "../api/utils";
import { Blocks } from "../api/Blocks";
import { getAnnotationFilter } from "./selectors";

function* requestAnalysis() {
  const editorOps = new EditorOps(EDITOR_STORE);

  const request = editorOps.buildAnalysisRequest(window["wlSettings"]["language"], [
    window["wordlift"]["currentPostUri"]
  ]);

  const response = yield call(apiFetch, {
    url: `${window["wlSettings"]["ajax_url"]}?action=wordlift_analyze`,
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(request)
  });

  embedAnalysis(editorOps, response);

  const parsed = parseAnalysisResponse(response);

  yield put(receiveAnalysisResults(parsed));
}

function embedAnalysis(editorOps, response) {
  // Bail out if the response doesn't contain results.
  if ("undefined" === typeof response || "undefined" === typeof response.annotations) return;

  const annotations = Object.values(response.annotations).sort(function(a1, a2) {
    if (a1.end > a2.end) return -1;
    if (a1.end < a2.end) return 1;

    return 0;
  });

  annotations.forEach(annotation =>
    editorOps.insertAnnotation(annotation.annotationId, annotation.start, annotation.end)
  );

  editorOps.applyChanges();
}

function* toggleEntity({ entity }) {
  // Get the supported blocks.
  const blocks = Blocks.create(data.select(EDITOR_STORE).getBlocks(), data.dispatch(EDITOR_STORE));

  const onClassNames = ["disambiguated", `wl-${entity.mainType.replace(/\s/, "-")}`];

  // Build a css selector to select all the annotations for the provided entity.
  const annotationSelector = makeEntityAnnotationsSelector(entity);

  // Collect the annotations that have been switch on/off.
  const occurrences = [];

  if (0 === entity.occurrences.length) {
    // Switch on.
    blocks.replace(
      new RegExp(`<span\\s+id="(${annotationSelector})"\\sclass="([^"]*)">`, "gi"),
      (match, annotationId, classNames) => {
        const newClassNames = mergeArray(classNames.split(/\s+/), onClassNames);
        occurrences.push(annotationId);
        return `<span id="${annotationId}" class="${newClassNames.join(" ")}" itemid="${entity.id}">`;
      }
    );
  } else {
    // Switch off.
    blocks.replace(
      new RegExp(`<span\\s+id="(${annotationSelector})"\\sclass="([^"]*)"\\sitemid="[^"]*">`, "gi"),
      (match, annotationId, classNames) => {
        const newClassNames = classNames.split(/\s+/).filter(x => -1 === onClassNames.indexOf(x));
        return `<span id="${annotationId}" class="${newClassNames.join(" ")}">`;
      }
    );
  }

  yield put(updateOccurrencesForEntity(entity.id, occurrences));

  // Apply the changes.
  blocks.apply();
}

function* toggleLink({ entity }) {
  // Get the supported blocks.
  const blocks = Blocks.create(data.select(EDITOR_STORE).getBlocks(), data.dispatch(EDITOR_STORE));

  // Build a css selector to select all the annotations for the provided entity.
  const annotationSelector = makeEntityAnnotationsSelector(entity);

  const cssClasses = ["wl-link", "wl-no-link"];

  const link = !entity.link;

  blocks.replace(
    new RegExp(`<span\\s+id="(${annotationSelector})"\\sclass="([^"]*)"\\sitemid="([^"]*)">`, "gi"),
    (match, annotationId, classNames) => {
      // Remove existing `wl-link` / `wl-no-link` classes.
      const newClassNames = classNames.split(/\s+/).filter(x => -1 === cssClasses.indexOf(x));
      // Add the `wl-link` / `wl-no-link` class according to the desired outcome.
      newClassNames.push(link ? "wl-link" : "wl-no-link");
      return `<span id="${annotationId}" class="${newClassNames.join(" ")}" itemid="${entity.id}">`;
    }
  );

  // Apply the changes.
  blocks.apply();

  yield put(toggleLinkSuccess({ id: entity.id, link }));
}

/**
 * Handle `ANNOTATION` actions.
 *
 * When the `ANNOTATION` action is fired, the `selected` css class will be added
 * to the selected annotation and removed from the others.
 *
 * The annotation id should match the element id.
 *
 * @since 3.23.0
 * @param {string|undefined} annotationId The annotation id.
 */
function* toggleAnnotation({ annotation }) {
  // Bail out if the annotation didn't change.
  const selectedAnnotation = yield select(getAnnotationFilter);
  if (annotation === selectedAnnotation) return null;

  // Get the supported blocks.
  const blocks = Blocks.create(data.select(EDITOR_STORE).getBlocks(), data.dispatch(EDITOR_STORE));

  blocks.replace(
    new RegExp(`<span\\s+id="([^"]+)"\\sclass="(textannotation(?:\\s[^"]*)?)"`, "gi"),
    (match, annotationId, classNames) => {
      // Get the class names removing any potential `selected` class.
      const newClassNames = classNames.split(/\s+/).filter(x => "selected" !== x);

      // Add the `selected` class if the annotation match.
      if (annotation === annotationId) newClassNames.push("selected");

      // Return the new span.
      return `<span id="${annotationId}" class="${newClassNames.join(" ")}"`;
    }
  );

  // Apply the changes.
  blocks.apply();
}

export default function* saga() {
  // yield takeLatest(actions.selectEditor, selectEditor);
  // yield takeLatest([actions.selectEditorSucceeded, actions.requestAnalysis], requestAnalysis);
  yield takeLatest(actions.requestAnalysis, requestAnalysis);
  yield takeEvery(TOGGLE_ENTITY, toggleEntity);
  yield takeEvery(TOGGLE_LINK, toggleLink);
  yield takeLatest(ANNOTATION, toggleAnnotation);
}