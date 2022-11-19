(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-editor-colored-context-menus"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/editor-colored-context-menus/userscript.css":
/*!*************************************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/editor-colored-context-menus/userscript.css ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-contextmenu-colored .blocklyContextMenu {\n  background-color: var(--sa-contextmenu-bg) !important;\n  border-color: var(--sa-contextmenu-border) !important;\n}\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem-highlight,\n.sa-contextmenu-colored .s3dev-mi:hover {\n  background-color: var(--sa-contextmenu-hover) !important;\n  border-color: transparent !important;\n}\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem[style*=\"border-top\"] {\n  border-top-color: var(--sa-contextmenu-border) !important;\n}\n.sa-contextmenu-colored .blocklyContextMenu .goog-menuitem .goog-menuitem-content {\n  color: var(--sa-contextmenu-text);\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/editor-colored-context-menus/_runtime_entry.js":
/*!**************************************************************************!*\
  !*** ./src/addons/addons/editor-colored-context-menus/_runtime_entry.js ***!
  \**************************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/editor-colored-context-menus/userscript.js");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./userscript.css */ "./node_modules/css-loader/index.js!./src/addons/addons/editor-colored-context-menus/userscript.css");
/* harmony import */ var _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


const resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "userscript.css": _css_loader_userscript_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/editor-colored-context-menus/userscript.js":
/*!**********************************************************************!*\
  !*** ./src/addons/addons/editor-colored-context-menus/userscript.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (async function ({
  addon,
  global,
  console
}) {
  const ScratchBlocks = await addon.tab.traps.getBlockly();

  const applyContextMenuColor = block => {
    const widgetDiv = ScratchBlocks.WidgetDiv.DIV;

    if (!widgetDiv) {
      return;
    }

    const background = block.svgPath_;

    if (!background) {
      return;
    }

    const style = window.getComputedStyle(background);
    const fill = style.getPropertyValue("fill");
    const border = style.getPropertyValue("stroke") || "#0003";
    const textColor = style.getPropertyValue("--sa-block-text-color") || "#fff";
    const hoverBg = style.getPropertyValue("--sa-block-secondary-color") || "#0001";
    widgetDiv.classList.add("sa-contextmenu-colored");
    widgetDiv.style.setProperty("--sa-contextmenu-bg", fill);
    widgetDiv.style.setProperty("--sa-contextmenu-border", border);
    widgetDiv.style.setProperty("--sa-contextmenu-text", textColor);
    widgetDiv.style.setProperty("--sa-contextmenu-hover", hoverBg);
  };

  const originalHandleRightClick = ScratchBlocks.Gesture.prototype.handleRightClick;

  ScratchBlocks.Gesture.prototype.handleRightClick = function (...args) {
    const block = this.targetBlock_;
    const ret = originalHandleRightClick.call(this, ...args);

    if (block) {
      applyContextMenuColor(block);
    }

    return ret;
  };

  const originalHide = ScratchBlocks.WidgetDiv.hide;

  ScratchBlocks.WidgetDiv.hide = function (...args) {
    if (ScratchBlocks.WidgetDiv.DIV) {
      ScratchBlocks.WidgetDiv.DIV.classList.remove("sa-contextmenu-colored");
    }

    return originalHide.call(this, ...args);
  };
});

/***/ })

}]);
//# sourceMappingURL=addon-entry-editor-colored-context-menus.js.map