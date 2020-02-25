/**
 * This file provides the functions to make API calls for FAQ.
 *
 * @since 3.26.0
 * @author Naveen Muthusamy <naveen@wordlift.io>
 *
 */

/**
 * Internal dependencies.
 */
import { transformUiDataToApiFormat } from "../sagas/filters";

const { restUrl, nonce, postId } = global["_wlFaqSettings"];

function saveFAQItems(faqItems) {
  return fetch(restUrl, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "X-WP-Nonce": nonce
    },
    body: JSON.stringify({
      post_id: postId,
      faq_items: faqItems
    })
  })
    .then(response => response.json())
    .then(json => json);
}

function updateFAQItems(faqItems) {
  return fetch(restUrl, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-WP-Nonce": nonce
    },
    body: JSON.stringify({
      post_id: postId,
      faq_items: transformUiDataToApiFormat(faqItems)
    })
  })
    .then(response => response.json())
    .then(json => json);
}

function getFAQItems() {
  return fetch(restUrl + "/" + postId, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "X-WP-Nonce": nonce
    }
  })
    .then(response => response.json())
    .then(json => json);
}

export default { saveFAQItems, getFAQItems, updateFAQItems };
