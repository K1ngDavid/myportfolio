exports.id = 457;
exports.ids = [457];
exports.modules = {

/***/ 6774:
/***/ ((module) => {

// Exports
module.exports = {
	"project": "Project_project__JsLZW",
	"section": "Project_section__J6GYi",
	"sectionInner": "Project_sectionInner__BbL68",
	"sectionBackground": "Project_sectionBackground__c9_MI",
	"backgroundImage": "Project_backgroundImage___m2co",
	"backgroundImageElement": "Project_backgroundImageElement__YUY7W",
	"backgroundScrim": "Project_backgroundScrim__kwaD6",
	"header": "Project_header__wfcEM",
	"headerContent": "Project_headerContent__vZAy7",
	"details": "Project_details__7Wyft",
	"title": "Project_title__gFlr3",
	"projectFadeSlide": "Project_projectFadeSlide__G5Z1R",
	"description": "Project_description__xM50C",
	"linkButton": "Project_linkButton__Aa9Ww",
	"meta": "Project_meta__i27_j",
	"metaItem": "Project_metaItem__wSCNh",
	"image": "Project_image__mqYQv",
	"sectionContent": "Project_sectionContent__uitMB",
	"sectionHeading": "Project_sectionHeading__smXXM",
	"sectionText": "Project_sectionText__wfpeH",
	"textRow": "Project_textRow__tVxUD",
	"sectionColumns": "Project_sectionColumns__uNmfU"
};


/***/ }),

/***/ 4097:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FV": () => (/* binding */ ProjectBackground),
/* harmony export */   "Hr": () => (/* binding */ ProjectSectionText),
/* harmony export */   "IG": () => (/* binding */ ProjectSectionContent),
/* harmony export */   "II": () => (/* binding */ ProjectSection),
/* harmony export */   "KZ": () => (/* binding */ ProjectImage),
/* harmony export */   "T4": () => (/* binding */ ProjectHeader),
/* harmony export */   "XR": () => (/* binding */ ProjectContainer),
/* harmony export */   "d": () => (/* binding */ ProjectSectionHeading),
/* harmony export */   "ee": () => (/* binding */ ProjectTextRow),
/* harmony export */   "nU": () => (/* binding */ ProjectSectionColumns)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5121);
/* harmony import */ var components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2221);
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8698);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6602);
/* harmony import */ var components_Text__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7346);
/* harmony import */ var components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3994);
/* harmony import */ var components_Transition__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8802);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var utils_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2362);
/* harmony import */ var _Project_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6774);
/* harmony import */ var _Project_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_Project_module_css__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Button__WEBPACK_IMPORTED_MODULE_1__, components_Image__WEBPACK_IMPORTED_MODULE_3__, components_Transition__WEBPACK_IMPORTED_MODULE_7__, hooks__WEBPACK_IMPORTED_MODULE_8__]);
([components_Button__WEBPACK_IMPORTED_MODULE_1__, components_Image__WEBPACK_IMPORTED_MODULE_3__, components_Transition__WEBPACK_IMPORTED_MODULE_7__, hooks__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);












const initDelay = 300;
function ProjectHeader({ title , description , linkLabel ="Visit website" , url , roles , className ,  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_4__/* .Section */ .$, {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().header), className),
        as: "section",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().headerContent),
            style: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .cssProps */ .Fh)({
                initDelay: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .numToMs */ .aU)(initDelay)
            }),
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().details),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
                            className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().title),
                            level: 2,
                            as: "h1",
                            children: title
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .x, {
                            className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),
                            size: "xl",
                            as: "p",
                            children: description
                        }),
                        !!url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                            secondary: true,
                            iconHoverShift: true,
                            className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().linkButton),
                            icon: "chevronRight",
                            href: url,
                            children: linkLabel
                        })
                    ]
                }),
                !!roles?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                    className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().meta),
                    children: roles?.map((role, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                            className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().metaItem),
                            style: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .cssProps */ .Fh)({
                                delay: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .numToMs */ .aU)(initDelay + 300 + index * 140)
                            }),
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .x, {
                                secondary: true,
                                children: role
                            })
                        }, role))
                })
            ]
        })
    });
}
const ProjectContainer = ({ className , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("article", {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().project), className),
        ...rest
    });
const ProjectSection = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_9__.forwardRef)(({ className , light , padding ="both" , fullHeight , backgroundOverlayOpacity =0.9 , backgroundElement , children , ...rest }, ref)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("section", {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().section), className),
        "data-light": light,
        "data-full-height": fullHeight,
        ref: ref,
        ...rest,
        children: [
            !!backgroundElement && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionBackground),
                style: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .cssProps */ .Fh)({
                    opacity: backgroundOverlayOpacity
                }),
                children: backgroundElement
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_4__/* .Section */ .$, {
                className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionInner),
                "data-padding": padding,
                children: children
            })
        ]
    }));
const ProjectBackground = ({ opacity =0.7 , className , ...rest })=>{
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)();
    (0,hooks__WEBPACK_IMPORTED_MODULE_8__/* .useParallax */ .YT)(0.6, (value)=>{
        if (!imageRef.current) return;
        imageRef.current.style.setProperty("--offset", `${value}px`);
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Transition__WEBPACK_IMPORTED_MODULE_7__/* .Transition */ .u, {
        in: true,
        timeout: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .msToNum */ .zG)(components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_6__/* .tokens.base.durationM */ .T.base.durationM),
        children: (visible)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().backgroundImage), className),
                "data-visible": visible,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().backgroundImageElement),
                        ref: imageRef,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
                            alt: "",
                            role: "presentation",
                            ...rest
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().backgroundScrim),
                        style: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .cssProps */ .Fh)({
                            opacity
                        })
                    })
                ]
            })
    });
};
const ProjectImage = ({ className , alt , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().image), className),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Image__WEBPACK_IMPORTED_MODULE_3__/* .Image */ .E, {
            reveal: true,
            alt: alt,
            delay: 300,
            ...rest
        })
    });
const ProjectSectionContent = ({ className , width ="l" , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionContent), className),
        "data-width": width,
        ...rest
    });
const ProjectSectionHeading = ({ className , level =3 , as ="h2" , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionHeading), className),
        as: as,
        level: level,
        align: "auto",
        ...rest
    });
const ProjectSectionText = ({ className , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Text__WEBPACK_IMPORTED_MODULE_5__/* .Text */ .x, {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionText), className),
        size: "l",
        as: "p",
        ...rest
    });
const ProjectTextRow = ({ center , stretch , justify ="center" , width ="m" , noMargin , className , centerMobile , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().textRow), className),
        "data-center": center,
        "data-stretch": stretch,
        "data-center-mobile": centerMobile,
        "data-no-margin": noMargin,
        "data-width": width,
        "data-justify": justify,
        ...rest
    });
const ProjectSectionColumns = ({ className , centered , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ProjectSectionContent, {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_10__/* .classes */ .Sh)((_Project_module_css__WEBPACK_IMPORTED_MODULE_11___default().sectionColumns), className),
        "data-centered": centered,
        ...rest
    });

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8457:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FV": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.FV),
/* harmony export */   "Hr": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.Hr),
/* harmony export */   "IG": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.IG),
/* harmony export */   "II": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.II),
/* harmony export */   "KZ": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.KZ),
/* harmony export */   "T4": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.T4),
/* harmony export */   "XR": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.XR),
/* harmony export */   "d": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   "ee": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.ee),
/* harmony export */   "nU": () => (/* reexport safe */ _Project__WEBPACK_IMPORTED_MODULE_0__.nU)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4097);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Project__WEBPACK_IMPORTED_MODULE_0__]);
_Project__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;