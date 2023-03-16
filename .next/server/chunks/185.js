exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 3502:
/***/ ((module) => {

// Exports
module.exports = {
	"divider": "Divider_divider__R3vqT",
	"line": "Divider_line__bFTLx",
	"notch": "Divider_notch__1kxAj"
};


/***/ }),

/***/ 3185:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "i": () => (/* reexport */ Divider)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/utils/style.js
var utils_style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Divider/Divider.module.css
var Divider_module = __webpack_require__(3502);
var Divider_module_default = /*#__PURE__*/__webpack_require__.n(Divider_module);
;// CONCATENATED MODULE: ./src/components/Divider/Divider.js



const Divider = ({ lineWidth , lineHeight , notchWidth , notchHeight , collapseDelay , collapsed , className , style , ...rest })=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (0,utils_style/* classes */.Sh)((Divider_module_default()).divider, className),
        style: (0,utils_style/* cssProps */.Fh)({
            lineWidth: lineWidth,
            lineHeight: lineHeight,
            notchWidth: notchWidth,
            notchHeight: notchHeight,
            collapseDelay: (0,utils_style/* numToMs */.aU)(collapseDelay)
        }, style),
        ...rest,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Divider_module_default()).line,
                "data-collapsed": collapsed
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Divider_module_default()).notch,
                "data-collapsed": collapsed,
                style: (0,utils_style/* cssProps */.Fh)({
                    collapseDelay: (0,utils_style/* numToMs */.aU)(collapseDelay + 160)
                })
            })
        ]
    });
Divider.defaultProps = {
    lineWidth: "100%",
    lineHeight: "2px",
    notchWidth: "90px",
    notchHeight: "10px",
    collapsed: false,
    collapseDelay: 0
};

;// CONCATENATED MODULE: ./src/components/Divider/index.js



/***/ })

};
;