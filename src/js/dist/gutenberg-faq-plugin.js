!function(n){var e={};function t(F){if(e[F])return e[F].exports;var Q=e[F]={i:F,l:!1,exports:{}};return n[F].call(Q.exports,Q,Q.exports,t),Q.l=!0,Q.exports}t.m=n,t.c=e,t.d=function(n,e,F){t.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:F})},t.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},t.t=function(n,e){if(1&e&&(n=t(n)),8&e)return n;if(4&e&&"object"==typeof n&&n&&n.__esModule)return n;var F=Object.create(null);if(t.r(F),Object.defineProperty(F,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var Q in n)t.d(F,Q,function(e){return n[e]}.bind(null,Q));return F},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=192)}({192:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21);\n/* harmony import */ var backbone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(backbone__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _constants_faq_hook_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);\n\n\n\n(function (wp) {\n  const AddFaqButton = function (props) {\n    return wp.element.createElement(wp.editor.RichTextToolbarButton, {\n      title: "Add Question / Answer",\n      icon: "plus-alt",\n      onClick: function () {\n        const {\n          text,\n          start,\n          end\n        } = props.value;\n        const selectedText = text.slice(start, end);\n        console.log("event handler fired from gutenberg");\n        Object(backbone__WEBPACK_IMPORTED_MODULE_0__["trigger"])(_constants_faq_hook_constants__WEBPACK_IMPORTED_MODULE_1__[/* FAQ_EVENT_HANDLER_SELECTION_CHANGED */ "a"], {\n          selectedText: selectedText,\n          selectedHtml: selectedText\n        });\n      }\n    });\n  };\n\n  wp.richText.registerFormatType("faq-gutenberg-plugin/faq-plugin", {\n    title: "Add Question/Answer",\n    tagName: "faq-gutenberg",\n    className: null,\n    edit: AddFaqButton\n  });\n})(window.wp);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2hvb2tzL2d1dGVuYmVyZy9ndXRlbmJlcmctZmFxLXBsdWdpbi5qcz8wOWU1Il0sIm5hbWVzIjpbIndwIiwiQWRkRmFxQnV0dG9uIiwicHJvcHMiLCJlbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImVkaXRvciIsIlJpY2hUZXh0VG9vbGJhckJ1dHRvbiIsInRpdGxlIiwiaWNvbiIsIm9uQ2xpY2siLCJ0ZXh0Iiwic3RhcnQiLCJlbmQiLCJ2YWx1ZSIsInNlbGVjdGVkVGV4dCIsInNsaWNlIiwiY29uc29sZSIsImxvZyIsInRyaWdnZXIiLCJGQVFfRVZFTlRfSEFORExFUl9TRUxFQ1RJT05fQ0hBTkdFRCIsInNlbGVjdGVkSHRtbCIsInJpY2hUZXh0IiwicmVnaXN0ZXJGb3JtYXRUeXBlIiwidGFnTmFtZSIsImNsYXNzTmFtZSIsImVkaXQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7QUFFQSxDQUFDLFVBQVNBLEVBQVQsRUFBYTtBQUNaLFFBQU1DLFlBQVksR0FBRyxVQUFTQyxLQUFULEVBQWdCO0FBQ25DLFdBQU9GLEVBQUUsQ0FBQ0csT0FBSCxDQUFXQyxhQUFYLENBQXlCSixFQUFFLENBQUNLLE1BQUgsQ0FBVUMscUJBQW5DLEVBQTBEO0FBQy9EQyxXQUFLLEVBQUUsdUJBRHdEO0FBRS9EQyxVQUFJLEVBQUUsVUFGeUQ7QUFHL0RDLGFBQU8sRUFBRSxZQUFXO0FBQ2xCLGNBQU07QUFBRUMsY0FBRjtBQUFRQyxlQUFSO0FBQWVDO0FBQWYsWUFBdUJWLEtBQUssQ0FBQ1csS0FBbkM7QUFDQSxjQUFNQyxZQUFZLEdBQUdKLElBQUksQ0FBQ0ssS0FBTCxDQUFXSixLQUFYLEVBQWtCQyxHQUFsQixDQUFyQjtBQUNBSSxlQUFPLENBQUNDLEdBQVIsQ0FBWSxvQ0FBWjtBQUNBQyxnRUFBTyxDQUFDQyx5R0FBRCxFQUFzQztBQUFFTCxzQkFBWSxFQUFFQSxZQUFoQjtBQUE4Qk0sc0JBQVksRUFBRU47QUFBNUMsU0FBdEMsQ0FBUDtBQUNEO0FBUjhELEtBQTFELENBQVA7QUFVRCxHQVhEOztBQVlBZCxJQUFFLENBQUNxQixRQUFILENBQVlDLGtCQUFaLENBQStCLGlDQUEvQixFQUFrRTtBQUNoRWYsU0FBSyxFQUFFLHFCQUR5RDtBQUVoRWdCLFdBQU8sRUFBRSxlQUZ1RDtBQUdoRUMsYUFBUyxFQUFFLElBSHFEO0FBSWhFQyxRQUFJLEVBQUV4QjtBQUowRCxHQUFsRTtBQU1ELENBbkJELEVBbUJHeUIsTUFBTSxDQUFDMUIsRUFuQlYiLCJmaWxlIjoiMTkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt0cmlnZ2VyfSBmcm9tIFwiYmFja2JvbmVcIjtcbmltcG9ydCB7RkFRX0VWRU5UX0hBTkRMRVJfU0VMRUNUSU9OX0NIQU5HRUR9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvZmFxLWhvb2stY29uc3RhbnRzXCI7XG5cbihmdW5jdGlvbih3cCkge1xuICBjb25zdCBBZGRGYXFCdXR0b24gPSBmdW5jdGlvbihwcm9wcykge1xuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQod3AuZWRpdG9yLlJpY2hUZXh0VG9vbGJhckJ1dHRvbiwge1xuICAgICAgdGl0bGU6IFwiQWRkIFF1ZXN0aW9uIC8gQW5zd2VyXCIsXG4gICAgICBpY29uOiBcInBsdXMtYWx0XCIsXG4gICAgICBvbkNsaWNrOiBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc3QgeyB0ZXh0LCBzdGFydCwgZW5kIH0gPSBwcm9wcy52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRUZXh0ID0gdGV4dC5zbGljZShzdGFydCwgZW5kKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJldmVudCBoYW5kbGVyIGZpcmVkIGZyb20gZ3V0ZW5iZXJnXCIpXG4gICAgICAgIHRyaWdnZXIoRkFRX0VWRU5UX0hBTkRMRVJfU0VMRUNUSU9OX0NIQU5HRUQsIHsgc2VsZWN0ZWRUZXh0OiBzZWxlY3RlZFRleHQsIHNlbGVjdGVkSHRtbDogc2VsZWN0ZWRUZXh0IH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9O1xuICB3cC5yaWNoVGV4dC5yZWdpc3RlckZvcm1hdFR5cGUoXCJmYXEtZ3V0ZW5iZXJnLXBsdWdpbi9mYXEtcGx1Z2luXCIsIHtcbiAgICB0aXRsZTogXCJBZGQgUXVlc3Rpb24vQW5zd2VyXCIsXG4gICAgdGFnTmFtZTogXCJmYXEtZ3V0ZW5iZXJnXCIsXG4gICAgY2xhc3NOYW1lOiBudWxsLFxuICAgIGVkaXQ6IEFkZEZhcUJ1dHRvblxuICB9KTtcbn0pKHdpbmRvdy53cCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///192\n')},21:function(module,exports){eval("module.exports = Backbone;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJCYWNrYm9uZVwiPzViYzAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoiMjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IEJhY2tib25lOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///21\n")},39:function(module,__webpack_exports__,__webpack_require__){"use strict";eval('/* unused harmony export FAQ_REQUEST_ADD_NEW_QUESTION */\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAQ_EVENT_HANDLER_SELECTION_CHANGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FAQ_ITEMS_CHANGED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FAQ_HIGHLIGHT_TEXT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FAQ_ITEM_SELECTED_ON_TEXT_EDITOR; });\n/**\n * Constants for the FAQ hooks.\n *\n * @since 3.26.0\n * @author Naveen Muthusamy <naveen@wordlift.io>\n */\n\n/**\n * Event name when the text selection changed in any of text editor, emitted\n * from the hooks.\n * @type {string}\n */\nconst FAQ_REQUEST_ADD_NEW_QUESTION = "FAQ_REQUEST_ADD_NEW_QUESTION";\n/**\n * Event emitted by hook when the text selection is changed.\n * @type {string}\n */\n\nconst FAQ_EVENT_HANDLER_SELECTION_CHANGED = "FAQ_EVENT_HANDLER_SELECTION_CHANGED";\n/**\n * Event emitted by the store when the faq items are changed\n * @type {string}\n */\n\nconst FAQ_ITEMS_CHANGED = "FAQ_ITEMS_CHANGED";\n/**\n * Event emitted by the store when a question or answer\n * is added by ui, asking the editor to highlight the text.\n */\n\nconst FAQ_HIGHLIGHT_TEXT = "FAQ_HIGHLIGHT_TEXT";\n/**\n * Event emitted by the hook to event handler when the faq is selected by the user.\n */\n\nconst FAQ_ITEM_SELECTED_ON_TEXT_EDITOR = "FAQ_ITEM_SELECTED_ON_TEXT_EDITOR";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvZmFxL2NvbnN0YW50cy9mYXEtaG9vay1jb25zdGFudHMuanM/MmQ5OCJdLCJuYW1lcyI6WyJGQVFfUkVRVUVTVF9BRERfTkVXX1FVRVNUSU9OIiwiRkFRX0VWRU5UX0hBTkRMRVJfU0VMRUNUSU9OX0NIQU5HRUQiLCJGQVFfSVRFTVNfQ0hBTkdFRCIsIkZBUV9ISUdITElHSFRfVEVYVCIsIkZBUV9JVEVNX1NFTEVDVEVEX09OX1RFWFRfRURJVE9SIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7QUFPQTs7Ozs7QUFLTyxNQUFNQSw0QkFBNEIsR0FBRyw4QkFBckM7QUFFUDs7Ozs7QUFJTyxNQUFNQyxtQ0FBbUMsR0FBRyxxQ0FBNUM7QUFFUDs7Ozs7QUFJTyxNQUFNQyxpQkFBaUIsR0FBRyxtQkFBMUI7QUFFUDs7Ozs7QUFJTyxNQUFNQyxrQkFBa0IsR0FBRyxvQkFBM0I7QUFHUDs7OztBQUdPLE1BQU1DLGdDQUFnQyxHQUFHLGtDQUF6QyIsImZpbGUiOiIzOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ29uc3RhbnRzIGZvciB0aGUgRkFRIGhvb2tzLlxuICpcbiAqIEBzaW5jZSAzLjI2LjBcbiAqIEBhdXRob3IgTmF2ZWVuIE11dGh1c2FteSA8bmF2ZWVuQHdvcmRsaWZ0LmlvPlxuICovXG5cbi8qKlxuICogRXZlbnQgbmFtZSB3aGVuIHRoZSB0ZXh0IHNlbGVjdGlvbiBjaGFuZ2VkIGluIGFueSBvZiB0ZXh0IGVkaXRvciwgZW1pdHRlZFxuICogZnJvbSB0aGUgaG9va3MuXG4gKiBAdHlwZSB7c3RyaW5nfVxuICovXG5leHBvcnQgY29uc3QgRkFRX1JFUVVFU1RfQUREX05FV19RVUVTVElPTiA9IFwiRkFRX1JFUVVFU1RfQUREX05FV19RVUVTVElPTlwiO1xuXG4vKipcbiAqIEV2ZW50IGVtaXR0ZWQgYnkgaG9vayB3aGVuIHRoZSB0ZXh0IHNlbGVjdGlvbiBpcyBjaGFuZ2VkLlxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEZBUV9FVkVOVF9IQU5ETEVSX1NFTEVDVElPTl9DSEFOR0VEID0gXCJGQVFfRVZFTlRfSEFORExFUl9TRUxFQ1RJT05fQ0hBTkdFRFwiO1xuXG4vKipcbiAqIEV2ZW50IGVtaXR0ZWQgYnkgdGhlIHN0b3JlIHdoZW4gdGhlIGZhcSBpdGVtcyBhcmUgY2hhbmdlZFxuICogQHR5cGUge3N0cmluZ31cbiAqL1xuZXhwb3J0IGNvbnN0IEZBUV9JVEVNU19DSEFOR0VEID0gXCJGQVFfSVRFTVNfQ0hBTkdFRFwiO1xuXG4vKipcbiAqIEV2ZW50IGVtaXR0ZWQgYnkgdGhlIHN0b3JlIHdoZW4gYSBxdWVzdGlvbiBvciBhbnN3ZXJcbiAqIGlzIGFkZGVkIGJ5IHVpLCBhc2tpbmcgdGhlIGVkaXRvciB0byBoaWdobGlnaHQgdGhlIHRleHQuXG4gKi9cbmV4cG9ydCBjb25zdCBGQVFfSElHSExJR0hUX1RFWFQgPSBcIkZBUV9ISUdITElHSFRfVEVYVFwiO1xuXG5cbi8qKlxuICogRXZlbnQgZW1pdHRlZCBieSB0aGUgaG9vayB0byBldmVudCBoYW5kbGVyIHdoZW4gdGhlIGZhcSBpcyBzZWxlY3RlZCBieSB0aGUgdXNlci5cbiAqL1xuZXhwb3J0IGNvbnN0IEZBUV9JVEVNX1NFTEVDVEVEX09OX1RFWFRfRURJVE9SID0gXCJGQVFfSVRFTV9TRUxFQ1RFRF9PTl9URVhUX0VESVRPUlwiO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///39\n')}});