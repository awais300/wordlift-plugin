/**
 * Highlight Helper class helps to highlight the given
 * html with the given inline tag and also removes them
 *
 * @since 3.26.0
 * @author Naveen Muthusamy <naveen@wordlift.io>
 */

export default class HighlightHelper {
  /**
   *
   * @param html Source HTML string
   * @param tagName Tag name which is used for highlighting
   * @param className Class Name to select the highlighting tags.
   * @return {string} HTML string with highlighting tags applied.
   */
  static highlightHTML(html, tagName, className) {
    const el = document.createElement("div");
    el.innerHTML = html;
    HighlightHelper.highlightNodes(el, tagName, className);
    return el.innerHTML;
  }

  /**
   * Remove the highlighting tags in the html by tagName and className
   * @param html Source HTML string
   * @param tagName Tag name which is used for highlighting
   * @param className Class Name to select the highlighting tags,
   * @return {string} HTML string with highlighting removed.
   */
  static removeHighlightingTagsByClassName(html, tagName, className) {
    const el = document.createElement("div");
    el.innerHTML = html;
    const highlightingTags = el.querySelectorAll(`${tagName}[class="${className}"]`);
    for (let tag of highlightingTags) {
      // Remove the highlighting tags
      /**
       * Assumptions.
       * 1. Highlighting made by this class would have only one node inside, since it is applied to
       * only textnode at the end of the string, so we can get the node and replace our highlighting
       * tag with that node.
       */
      tag.parentElement.replaceChild(tag.firstChild, tag);
    }
    return el.innerHTML;
  }

  /**
   * This function renders the element with the source html, recursively walks the
   * DOM and replaces all the text nodes with the highlighting tags, it returns the html
   * with all text nodes replaced by our highlighting nodes.
   * @param el {HTMLElement} Html element at which the highlighting should be applied.
   * @param tagName {string} Tag name of the highlighting tag.
   * @param className {string} Class name to apply on the highlighting tag
   * @return {null}
   */
  static highlightNodes(el, tagName, className) {
    for (let element of el.childNodes) {
      if (element.childNodes.length === 0 && element.nodeType === Node.TEXT_NODE) {
        const newChild = document.createElement(tagName);
        newChild.classList = [className];
        newChild.textContent = element.textContent;
        element.parentElement.replaceChild(newChild, element);
      } else {
        HighlightHelper.highlightNodes(element, tagName, className);
      }
    }
  }
}