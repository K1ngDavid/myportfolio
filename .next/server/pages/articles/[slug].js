(() => {
var exports = {};
exports.id = 850;
exports.ids = [850,888];
exports.modules = {

/***/ 3182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgArrowDown = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  stroke: "currentColor",
  width: 43,
  height: 15,
  viewBox: "0 0 43 15"
}, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M1 1l20.5 12L42 1",
  strokeWidth: 2,
  fill: "none"
})));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowDown);

/***/ }),

/***/ 4619:
/***/ ((module) => {

// Exports
module.exports = {
	"code": "Code_code__RSNfC",
	"actions": "Code_actions__Zoqye",
	"copyIcon": "Code_copyIcon__gdLmk",
	"lang": "Code_lang__3Kuby"
};


/***/ }),

/***/ 3718:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "List_list__0oF1W",
	"item": "List_item__t5SQz"
};


/***/ }),

/***/ 8603:
/***/ ((module) => {

// Exports
module.exports = {
	"post": "Post_post__fWn0d",
	"header": "Post_header__Sf1pZ",
	"headerText": "Post_headerText__gC9Yl",
	"date": "Post_date__InVhZ",
	"dateText": "Post_dateText__H5Zzn",
	"titleWordWrapper": "Post_titleWordWrapper__yKhUz",
	"titleWord": "Post_titleWord__SU5zc",
	"postTitleWord": "Post_postTitleWord__XAuou",
	"banner": "Post_banner__OU9ZO",
	"bannerImage": "Post_bannerImage__MT3ht",
	"bannerImageBlur": "Post_bannerImageBlur__JbMhH",
	"details": "Post_details__sLHn9",
	"arrow": "Post_arrow__GnDPy",
	"timecode": "Post_timecode__QfQ7k",
	"wrapper": "Post_wrapper__FLc1v",
	"content": "Post_content__GI1_2"
};


/***/ }),

/***/ 749:
/***/ ((module) => {

// Exports
module.exports = {
	"heading": "PostMarkdown_heading__oOjES",
	"paragraph": "PostMarkdown_paragraph__JJW6d",
	"list": "PostMarkdown_list___gY0U",
	"image": "PostMarkdown_image__58Jo8",
	"headingLink": "PostMarkdown_headingLink__urh9O",
	"code": "PostMarkdown_code__hwEir",
	"pre": "PostMarkdown_pre__MgdYF",
	"hr": "PostMarkdown_hr__F4uZ6",
	"blockquote": "PostMarkdown_blockquote__C9__4",
	"strong": "PostMarkdown_strong__AlJE_",
	"embed": "PostMarkdown_embed__aO_uG"
};


/***/ }),

/***/ 3034:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* binding */ Code)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5121);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(61);
/* harmony import */ var components_Text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7346);
/* harmony import */ var components_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4352);
/* harmony import */ var components_Transition__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8802);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _Code_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4619);
/* harmony import */ var _Code_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Code_module_css__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Button__WEBPACK_IMPORTED_MODULE_1__, components_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__, components_Transition__WEBPACK_IMPORTED_MODULE_5__]);
([components_Button__WEBPACK_IMPORTED_MODULE_1__, components_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__, components_Transition__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








const Code = (props)=>{
    const { 0: copied , 1: setCopied  } = (0,react__WEBPACK_IMPORTED_MODULE_6__.useState)(false);
    const theme = (0,components_ThemeProvider__WEBPACK_IMPORTED_MODULE_4__/* .useTheme */ .Fg)();
    const elementRef = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const copyTimeout = (0,react__WEBPACK_IMPORTED_MODULE_6__.useRef)();
    const lang = props.className?.split("-")[1];
    const handleCopy = ()=>{
        clearTimeout(copyTimeout);
        navigator.clipboard.writeText(elementRef.current.textContent);
        setCopied(true);
        setTimeout(()=>{
            setCopied(false);
        }, 2000);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Code_module_css__WEBPACK_IMPORTED_MODULE_7___default().code),
        "data-theme": theme.themeId,
        children: [
            !!lang && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Text__WEBPACK_IMPORTED_MODULE_3__/* .Text */ .x, {
                secondary: true,
                size: "s",
                className: (_Code_module_css__WEBPACK_IMPORTED_MODULE_7___default().lang),
                children: lang
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("pre", {
                ref: elementRef,
                ...props
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Code_module_css__WEBPACK_IMPORTED_MODULE_7___default().actions),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                    iconOnly: true,
                    onClick: handleCopy,
                    "aria-label": "Copy",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                        className: (_Code_module_css__WEBPACK_IMPORTED_MODULE_7___default().copyIcon),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Transition__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                                in: !copied,
                                children: (visible)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
                                        icon: "copy",
                                        "data-visible": visible
                                    })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Transition__WEBPACK_IMPORTED_MODULE_5__/* .Transition */ .u, {
                                in: copied,
                                children: (visible)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon__WEBPACK_IMPORTED_MODULE_2__/* .Icon */ .J, {
                                        icon: "check",
                                        "data-visible": visible
                                    })
                            })
                        ]
                    })
                })
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9277:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "E": () => (/* reexport safe */ _Code__WEBPACK_IMPORTED_MODULE_0__.E)
/* harmony export */ });
/* harmony import */ var _Code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3034);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Code__WEBPACK_IMPORTED_MODULE_0__]);
_Code__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5149:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ List),
  "H": () => (/* reexport */ ListItem)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/utils/style.js
var style = __webpack_require__(2362);
// EXTERNAL MODULE: ./src/components/List/List.module.css
var List_module = __webpack_require__(3718);
var List_module_default = /*#__PURE__*/__webpack_require__.n(List_module);
;// CONCATENATED MODULE: ./src/components/List/List.js



const List = ({ ordered , children , className , ...rest })=>{
    const Element = ordered ? "ol" : "ul";
    return /*#__PURE__*/ jsx_runtime_.jsx(Element, {
        className: (0,style/* classes */.Sh)((List_module_default()).list, className),
        ...rest,
        children: children
    });
};
const ListItem = ({ children , ...rest })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (List_module_default()).item,
        ...rest,
        children: children
    });
};

;// CONCATENATED MODULE: ./src/components/List/index.js



/***/ }),

/***/ 3768:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ Post)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3182);
/* harmony import */ var components_Divider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3185);
/* harmony import */ var components_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5192);
/* harmony import */ var components_Heading__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2221);
/* harmony import */ var components_Image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8698);
/* harmony import */ var components_Meta__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5633);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6602);
/* harmony import */ var components_Text__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7346);
/* harmony import */ var components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3994);
/* harmony import */ var components_Transition__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8802);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5480);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var utils_clamp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(2156);
/* harmony import */ var utils_date__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(7715);
/* harmony import */ var utils_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2362);
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8603);
/* harmony import */ var _Post_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_Post_module_css__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Image__WEBPACK_IMPORTED_MODULE_5__, components_Transition__WEBPACK_IMPORTED_MODULE_10__, hooks__WEBPACK_IMPORTED_MODULE_11__]);
([components_Image__WEBPACK_IMPORTED_MODULE_5__, components_Transition__WEBPACK_IMPORTED_MODULE_10__, hooks__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















const Post = ({ children , title , date , abstract , banner , timecode , ogImage  })=>{
    const scrollToHash = (0,hooks__WEBPACK_IMPORTED_MODULE_11__/* .useScrollToHash */ .jh)();
    const imageRef = (0,react__WEBPACK_IMPORTED_MODULE_13__.useRef)();
    const { 0: dateTime , 1: setDateTime  } = (0,react__WEBPACK_IMPORTED_MODULE_13__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_13__.useEffect)(()=>{
        setDateTime((0,utils_date__WEBPACK_IMPORTED_MODULE_15__/* .formatDate */ .p)(date));
    }, [
        date,
        dateTime
    ]);
    (0,hooks__WEBPACK_IMPORTED_MODULE_11__/* .useParallax */ .YT)(0.004, (value)=>{
        if (!imageRef.current) return;
        imageRef.current.style.setProperty("--blurOpacity", (0,utils_clamp__WEBPACK_IMPORTED_MODULE_16__/* .clamp */ .u)(value, 0, 1));
    });
    const handleScrollIndicatorClick = (event)=>{
        event.preventDefault();
        scrollToHash(event.currentTarget.href);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("article", {
        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().post),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Meta__WEBPACK_IMPORTED_MODULE_6__/* .Meta */ .h, {
                title: title,
                prefix: "",
                description: abstract,
                ogImage: ogImage
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Section__WEBPACK_IMPORTED_MODULE_7__/* .Section */ .$, {
                children: [
                    banner && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().banner),
                        ref: imageRef,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().bannerImage),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Image__WEBPACK_IMPORTED_MODULE_5__/* .Image */ .E, {
                                    role: "presentation",
                                    src: {
                                        src: banner
                                    },
                                    placeholder: {
                                        src: `${banner.split(".")[0]}-placeholder.jpg`
                                    },
                                    alt: ""
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().bannerImageBlur),
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Image__WEBPACK_IMPORTED_MODULE_5__/* .Image */ .E, {
                                    role: "presentation",
                                    src: {
                                        src: `${banner.split(".")[0]}-placeholder.jpg`
                                    },
                                    placeholder: {
                                        src: `${banner.split(".")[0]}-placeholder.jpg`
                                    },
                                    alt: ""
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
                        className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().header),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().headerText),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Transition__WEBPACK_IMPORTED_MODULE_10__/* .Transition */ .u, {
                                    in: true,
                                    timeout: (0,utils_style__WEBPACK_IMPORTED_MODULE_14__/* .msToNum */ .zG)(components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_9__/* .tokens.base.durationM */ .T.base.durationM),
                                    children: (visible)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().date),
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Divider__WEBPACK_IMPORTED_MODULE_2__/* .Divider */ .i, {
                                                    notchWidth: "64px",
                                                    notchHeight: "8px",
                                                    collapsed: !visible
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, {
                                                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().dateText),
                                                    "data-visible": visible,
                                                    children: dateTime
                                                })
                                            ]
                                        })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Heading__WEBPACK_IMPORTED_MODULE_4__/* .Heading */ .X, {
                                    level: 2,
                                    as: "h1",
                                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().title),
                                    "aria-label": title,
                                    children: title.split(" ").map((word, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().titleWordWrapper),
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().titleWord),
                                                style: (0,utils_style__WEBPACK_IMPORTED_MODULE_14__/* .cssProps */ .Fh)({
                                                    delay: (0,utils_style__WEBPACK_IMPORTED_MODULE_14__/* .numToMs */ .aU)(index * 100 + 100)
                                                }),
                                                index: index,
                                                children: [
                                                    word,
                                                    index !== title.split(" ").length - 1 ? " " : ""
                                                ]
                                            })
                                        }, `${word}-${index}`))
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().details),
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_12___default()), {
                                            href: "#postContent",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().arrow),
                                                "aria-label": "Scroll to post content",
                                                onClick: handleScrollIndicatorClick,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_arrow_down_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                                                    "aria-hidden": true
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().timecode),
                                            children: timecode
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_7__/* .Section */ .$, {
                className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().wrapper),
                id: "postContent",
                tabIndex: -1,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Text__WEBPACK_IMPORTED_MODULE_8__/* .Text */ .x, {
                    as: "div",
                    size: "l",
                    className: (_Post_module_css__WEBPACK_IMPORTED_MODULE_17___default().content),
                    children: children
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Footer__WEBPACK_IMPORTED_MODULE_3__/* .Footer */ .$, {})
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2803:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ postMarkdown)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var components_Code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9277);
/* harmony import */ var components_Heading__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2221);
/* harmony import */ var components_Icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var components_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(270);
/* harmony import */ var components_List__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5149);
/* harmony import */ var components_Text__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7346);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(749);
/* harmony import */ var _PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Code__WEBPACK_IMPORTED_MODULE_1__]);
components_Code__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];









const PostHeadingLink = ({ id  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().headingLink),
        href: `#${id}`,
        "aria-label": "Link to heading",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Icon__WEBPACK_IMPORTED_MODULE_3__/* .Icon */ .J, {
            icon: "link"
        })
    });
};
const PostH1 = ({ children , id , ...rest })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
        id: id,
        level: 2,
        as: "h1",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostHeadingLink, {
                id: id
            }),
            children
        ]
    });
const PostH2 = ({ children , id , ...rest })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
        id: id,
        level: 3,
        as: "h2",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostHeadingLink, {
                id: id
            }),
            children
        ]
    });
const PostH3 = ({ children , id , ...rest })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
        id: id,
        level: 4,
        as: "h3",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostHeadingLink, {
                id: id
            }),
            children
        ]
    });
const PostH4 = ({ children , id , ...rest })=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(components_Heading__WEBPACK_IMPORTED_MODULE_2__/* .Heading */ .X, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().heading),
        id: id,
        level: 5,
        as: "h4",
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PostHeadingLink, {
                id: id
            }),
            children
        ]
    });
const PostParagraph = ({ children , ...rest })=>{
    const hasSingleChild = react__WEBPACK_IMPORTED_MODULE_7__.Children.count(children) === 1;
    const firstChild = react__WEBPACK_IMPORTED_MODULE_7__.Children.toArray(children)[0];
    // Prevent `img` being wrapped in `p`
    if (hasSingleChild && firstChild.type === PostImage) {
        return children;
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Text__WEBPACK_IMPORTED_MODULE_6__/* .Text */ .x, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().paragraph),
        size: "l",
        as: "p",
        ...rest,
        children: children
    });
};
const PostLink = ({ ...props })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Link__WEBPACK_IMPORTED_MODULE_4__/* .Link */ .r, {
        ...props
    });
const PostUl = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_List__WEBPACK_IMPORTED_MODULE_5__/* .List */ .a, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().list),
        ...props
    });
};
const PostOl = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_List__WEBPACK_IMPORTED_MODULE_5__/* .List */ .a, {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().list),
        ordered: true,
        ...props
    });
};
const PostLi = ({ children , ...props })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_List__WEBPACK_IMPORTED_MODULE_5__/* .ListItem */ .H, {
        ...props,
        children: children
    });
};
const PostCode = ({ children , ...rest })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("code", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().code),
        ...rest,
        children: children
    });
const PostPre = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().pre),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Code__WEBPACK_IMPORTED_MODULE_1__/* .Code */ .E, {
            ...props
        })
    });
};
const PostBlockquote = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("blockquote", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().blockquote),
        ...props
    });
};
const PostHr = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("hr", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().hr),
        ...props
    });
};
const PostStrong = (props)=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("strong", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().strong),
        ...props
    });
};
const PostImage = ({ src , alt , width , height , ...rest })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().image),
        src: src,
        decoding: "async",
        loading: "lazy",
        alt: alt,
        width: width,
        height: height,
        ...rest
    });
};
const Embed = ({ src  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_PostMarkdown_module_css__WEBPACK_IMPORTED_MODULE_8___default().embed),
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("iframe", {
            src: src,
            loading: "lazy"
        })
    });
};
const postMarkdown = {
    h1: PostH1,
    h2: PostH2,
    h3: PostH3,
    h4: PostH4,
    p: PostParagraph,
    a: PostLink,
    ul: PostUl,
    ol: PostOl,
    li: PostLi,
    pre: PostPre,
    code: PostCode,
    blockquote: PostBlockquote,
    hr: PostHr,
    img: PostImage,
    strong: PostStrong,
    Embed
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4293:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* reexport safe */ _Post__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   "e": () => (/* reexport safe */ _PostMarkdown__WEBPACK_IMPORTED_MODULE_1__.e)
/* harmony export */ });
/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3768);
/* harmony import */ var _PostMarkdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2803);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Post__WEBPACK_IMPORTED_MODULE_0__, _PostMarkdown__WEBPACK_IMPORTED_MODULE_1__]);
([_Post__WEBPACK_IMPORTED_MODULE_0__, _PostMarkdown__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 817:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PostPage),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7147);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var layouts_Post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4293);
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8214);
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mdx_bundler__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mdx_bundler_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1228);
/* harmony import */ var mdx_bundler_client__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mdx_bundler_client__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4956);
/* harmony import */ var reading_time__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reading_time__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var rehype_img_size__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9919);
/* harmony import */ var rehype_preset_minify__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6370);
/* harmony import */ var rehype_slug__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7752);
/* harmony import */ var utils_mdx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(1745);
/* harmony import */ var utils_timecode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9110);
/* harmony import */ var _mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5780);
/* harmony import */ var _mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _og_image__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8312);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([layouts_Post__WEBPACK_IMPORTED_MODULE_3__, rehype_img_size__WEBPACK_IMPORTED_MODULE_8__, rehype_preset_minify__WEBPACK_IMPORTED_MODULE_9__, rehype_slug__WEBPACK_IMPORTED_MODULE_10__]);
([layouts_Post__WEBPACK_IMPORTED_MODULE_3__, rehype_img_size__WEBPACK_IMPORTED_MODULE_8__, rehype_preset_minify__WEBPACK_IMPORTED_MODULE_9__, rehype_slug__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);















function PostPage({ frontmatter , code , timecode , ogImage  }) {
    const MDXComponent = (0,react__WEBPACK_IMPORTED_MODULE_6__.useMemo)(()=>(0,mdx_bundler_client__WEBPACK_IMPORTED_MODULE_5__.getMDXComponent)(code), [
        code
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(layouts_Post__WEBPACK_IMPORTED_MODULE_3__/* .Post */ .S, {
        timecode: timecode,
        ogImage: ogImage,
        ...frontmatter,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MDXComponent, {
            components: layouts_Post__WEBPACK_IMPORTED_MODULE_3__/* .postMarkdown */ .e
        })
    });
};
const getStaticProps = async ({ params  })=>{
    const postFilePath = path__WEBPACK_IMPORTED_MODULE_2___default().join(utils_mdx__WEBPACK_IMPORTED_MODULE_11__/* .POSTS_PATH */ .j, `${params.slug}.mdx`);
    const source = fs__WEBPACK_IMPORTED_MODULE_1___default().readFileSync(postFilePath, "utf-8");
    const { code , frontmatter , matter  } = await (0,mdx_bundler__WEBPACK_IMPORTED_MODULE_4__.bundleMDX)({
        source,
        mdxOptions (options) {
            options.remarkPlugins = [
                ...options.remarkPlugins ?? []
            ];
            options.rehypePlugins = [
                ...options.rehypePlugins ?? [],
                (_mapbox_rehype_prism__WEBPACK_IMPORTED_MODULE_12___default()),
                rehype_slug__WEBPACK_IMPORTED_MODULE_10__["default"],
                rehype_preset_minify__WEBPACK_IMPORTED_MODULE_9__["default"],
                [
                    rehype_img_size__WEBPACK_IMPORTED_MODULE_8__["default"],
                    {
                        dir: "public"
                    }
                ], 
            ];
            return options;
        }
    });
    const { time  } = reading_time__WEBPACK_IMPORTED_MODULE_7___default()(matter.content);
    const timecode = (0,utils_timecode__WEBPACK_IMPORTED_MODULE_14__/* .formatTimecode */ .g)(time);
    const ogImage = await (0,_og_image__WEBPACK_IMPORTED_MODULE_13__/* .generateOgImage */ .T)({
        title: frontmatter.title,
        date: frontmatter.date,
        banner: frontmatter.banner,
        timecode
    });
    return {
        props: {
            code,
            frontmatter,
            timecode,
            ogImage
        },
        notFound:  true && frontmatter.draft
    };
};
const getStaticPaths = async ()=>{
    const paths = utils_mdx__WEBPACK_IMPORTED_MODULE_11__/* .postFilePaths.map */ .B.map((filePath)=>filePath.replace(/\.mdx?$/, "")).map((slug)=>({
            params: {
                slug
            }
        }));
    return {
        paths,
        fallback: false
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8312:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ generateOgImage)
/* harmony export */ });
const puppeteer = __webpack_require__(8018);
const path = __webpack_require__(1017);
const fs = __webpack_require__(7147);
const { createHash  } = __webpack_require__(6113);
async function generateOgImage(props) {
    const params = new URLSearchParams(props);
    const url = `file:${path.join(process.cwd(), `src/pages/articles/og-image.html?${params}`)}`;
    const hash = createHash("md5").update(url).digest("hex");
    const ogImageDir = path.join(process.cwd(), `public/og`);
    const imageName = `${hash}.png`;
    const imagePath = `${ogImageDir}/${imageName}`;
    const publicPath = `${process.env.NEXT_PUBLIC_WEBSITE_URL}/og/${imageName}`;
    try {
        fs.statSync(imagePath);
        return publicPath;
    } catch (error) {
    // file does not exists, so we create it
    }
    const browser = await puppeteer.launch({
        headless: true
    });
    const page = await browser.newPage();
    await page.setViewport({
        width: 1200,
        height: 630
    });
    await page.goto(url, {
        waitUntil: "networkidle0"
    });
    const buffer = await page.screenshot();
    await browser.close();
    fs.mkdirSync(ogImageDir, {
        recursive: true
    });
    fs.writeFileSync(imagePath, buffer);
    return publicPath;
}


/***/ }),

/***/ 2156:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ clamp)
/* harmony export */ });
const clamp = (number, boundOne, boundTwo)=>{
    if (!boundTwo) {
        return Math.max(number, boundOne) === boundOne ? number : boundOne;
    } else if (Math.min(number, boundOne) === number) {
        return boundOne;
    } else if (Math.max(number, boundTwo) === number) {
        return boundTwo;
    }
    return number;
};


/***/ }),

/***/ 5780:
/***/ ((module) => {

"use strict";
module.exports = require("@mapbox/rehype-prism");

/***/ }),

/***/ 8214:
/***/ ((module) => {

"use strict";
module.exports = require("mdx-bundler");

/***/ }),

/***/ 1228:
/***/ ((module) => {

"use strict";
module.exports = require("mdx-bundler/client");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 8018:
/***/ ((module) => {

"use strict";
module.exports = require("puppeteer");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 4956:
/***/ ((module) => {

"use strict";
module.exports = require("reading-time");

/***/ }),

/***/ 6197:
/***/ ((module) => {

"use strict";
module.exports = import("framer-motion");;

/***/ }),

/***/ 9919:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-img-size");;

/***/ }),

/***/ 6370:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-preset-minify");;

/***/ }),

/***/ 7752:
/***/ ((module) => {

"use strict";
module.exports = import("rehype-slug");;

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 7147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 1017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,480,739,368,698,185,279], () => (__webpack_exec__(817)));
module.exports = __webpack_exports__;

})();