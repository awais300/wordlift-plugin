/**
 * FaqEventHandler Provides two way binding between store and text editor hooks.
 *
 * Text Editor hooks <--> Event handler <--> Redux Store.
 *
 * @since 3.26.0
 * @author Naveen Muthusamy <naveen@wordlift.io>
 */

/**
 * External dependencies.
 */
import {on} from "backbone";
/**
 * Internal dependencies.
 */
import {FAQ_EVENT_HANDLER_SELECTION_CHANGED} from "../constants/faq-hook-constants";

const GUTENBERG = "gutenberg";

const TINY_MCE = "tiny_mce";

export const textEditors = {
  GUTENBERG: GUTENBERG,
  TINY_MCE: TINY_MCE
};

class FaqEventHandler {
  constructor(store) {
    this._hook = this.getHookForCurrentEnvironment();
    this._store = store;
    this.listenEventsFromHooks();
  }

  /**
   * Listens for events from hooks and dispatch to
   * the store.
   */
  listenEventsFromHooks() {
    on(FAQ_EVENT_HANDLER_SELECTION_CHANGED, text => {

    });
  }
  /**
   * Returns the redux store.
   * @return {*}
   */
  getStore() {
    return this._store;
  }
  getHook() {
    return this._hook;
  }

  /**
   * Returns hook instance based on the current environment
   * @return FaqTextEditorHook|null
   */
  getHookForCurrentEnvironment() {
    let textEditor = null;
    if (global["_wlFaqSettings"] !== undefined) {
      textEditor = global["_wlFaqSettings"]["textEditor"];
    }
    switch (textEditor) {
      case textEditors.TINY_MCE:
        return null;
      default:
        return null;
    }
  }
}

export default FaqEventHandler;
