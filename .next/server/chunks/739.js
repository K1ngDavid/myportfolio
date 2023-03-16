exports.id = 739;
exports.ids = [739];
exports.modules = {

/***/ 5597:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "Heading_heading__209rB"
};


/***/ }),

/***/ 2221:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "X": () => (/* reexport */ Heading)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/Heading/Heading.module.css
var Heading_module = __webpack_require__(5597);
var Heading_module_default = /*#__PURE__*/__webpack_require__.n(Heading_module);
;// CONCATENATED MODULE: ./src/components/Heading/Heading.js




const Heading = ({ children , level =1 , as , align ="auto" , weight ="medium" , className , ...rest })=>{
    const clampedLevel = Math.min(Math.max(level, 0), 5);
    const Component = as || `h${Math.max(clampedLevel, 1)}`;
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            className: (0,style/* classes */.Sh)((Heading_module_default()).heading, className),
            "data-align": align,
            "data-weight": weight,
            "data-level": clampedLevel,
            ...rest,
            children: children
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Heading/index.js



/***/ }),

/***/ 5633:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ Meta)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/Meta/Meta.js


const siteUrl = "https://hamishw.com";
const Meta_name = "Hamish Williams";
const twitterHandle = "@hamishMW";
const defaultOgImage = `${siteUrl}/social-image.png`;
const Meta = ({ title , description , prefix =Meta_name , ogImage =defaultOgImage  })=>{
    const titleText = [
        prefix,
        title
    ].filter(Boolean).join(" | ");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: titleText
            }, "title"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: description
            }, "description"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "author",
                content: Meta_name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image",
                content: ogImage
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:alt",
                content: "Banner for the site"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:type",
                content: "image/png"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:width",
                content: "1280"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:height",
                content: "675"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title",
                content: titleText
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:site_name",
                content: Meta_name
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:url",
                content: siteUrl
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:description",
                content: description
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:title",
                content: titleText
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:site",
                content: twitterHandle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:creator",
                content: twitterHandle
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "twitter:image",
                content: ogImage
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/Meta/index.js



/***/ })

};
;