exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 2407:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgArrowLeft = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  fill: "currentColor",
  width: 18,
  height: 42,
  viewBox: "0 0 18 42"
}, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"
})));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowLeft);

/***/ }),

/***/ 6469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _path;

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }



const SvgArrowRight = props => /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", _extends({
  fill: "currentColor",
  width: 18,
  height: 42,
  viewBox: "0 0 18 42"
}, props), _path || (_path = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("path", {
  d: "M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"
})));

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SvgArrowRight);

/***/ }),

/***/ 5360:
/***/ ((module) => {

// Exports
module.exports = {
	"carousel": "Carousel_carousel__Sspl_",
	"content": "Carousel_content__gQHGr",
	"imageWrapper": "Carousel_imageWrapper__qTCVg",
	"canvasWrapper": "Carousel_canvasWrapper__fJ9wa",
	"canvas": "Carousel_canvas__M9q1k",
	"placeholder": "Carousel_placeholder__9B_u0",
	"button": "Carousel_button___Co_K",
	"nav": "Carousel_nav__aYsww",
	"navButton": "Carousel_navButton__Fq3pI"
};


/***/ }),

/***/ 6782:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ Carousel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2407);
/* harmony import */ var assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6469);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2949);
/* harmony import */ var utils_image__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5622);
/* harmony import */ var utils_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2362);
/* harmony import */ var utils_three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3142);
/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5360);
/* harmony import */ var _Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _carouselFragment_glsl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2202);
/* harmony import */ var _carouselVertex_glsl__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5678);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__, hooks__WEBPACK_IMPORTED_MODULE_4__, three__WEBPACK_IMPORTED_MODULE_6__, utils_three__WEBPACK_IMPORTED_MODULE_8__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_3__, hooks__WEBPACK_IMPORTED_MODULE_4__, three__WEBPACK_IMPORTED_MODULE_6__, utils_three__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function determineIndex(imageIndex, index, images, direction) {
    if (index !== null) return index;
    const length = images.length;
    const prevIndex = (imageIndex - 1 + length) % length;
    const nextIndex = (imageIndex + 1) % length;
    const finalIndex = direction > 0 ? nextIndex : prevIndex;
    return finalIndex;
}
const Carousel = ({ width , height , images , placeholder , ...rest })=>{
    const { 0: dragging , 1: setDragging  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: imageIndex , 1: setImageIndex  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(0);
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const { 0: showPlaceholder , 1: setShowPlaceholder  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(true);
    const { 0: textures , 1: setTextures  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const { 0: canvasRect , 1: setCanvasRect  } = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const canvas = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const imagePlane = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const geometry = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const material = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const scene = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const camera = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const renderer = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const animating = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)(false);
    const swipeDirection = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const lastSwipePosition = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const scheduledAnimationFrame = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useReducedMotion)();
    const inViewport = (0,hooks__WEBPACK_IMPORTED_MODULE_4__/* .useInViewport */ .NM)(canvas, true);
    const placeholderRef = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const initSwipeX = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const currentImageAlt = `Slide ${imageIndex + 1} of ${images.length}. ${images[imageIndex].alt}`;
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (dragging) {
            document.body.style.cursor = "grabbing";
        }
        return ()=>{
            document.body.style.cursor = "";
        };
    }, [
        dragging
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const cameraOptions = [
            width / -2,
            width / 2,
            height / 2,
            height / -2,
            1,
            1000
        ];
        renderer.current = new three__WEBPACK_IMPORTED_MODULE_6__.WebGLRenderer({
            canvas: canvas.current,
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: true
        });
        camera.current = new three__WEBPACK_IMPORTED_MODULE_6__.OrthographicCamera(...cameraOptions);
        scene.current = new three__WEBPACK_IMPORTED_MODULE_6__.Scene();
        renderer.current.setPixelRatio(2);
        renderer.current.setClearColor(0x111111, 1.0);
        renderer.current.setSize(width, height);
        renderer.current.domElement.style.width = "100%";
        renderer.current.domElement.style.height = "auto";
        scene.current.background = new three__WEBPACK_IMPORTED_MODULE_6__.Color(0x111111);
        camera.current.position.z = 1;
        return ()=>{
            animating.current = false;
            (0,utils_three__WEBPACK_IMPORTED_MODULE_8__/* .cleanScene */ ["in"])(scene.current);
            (0,utils_three__WEBPACK_IMPORTED_MODULE_8__/* .cleanRenderer */ .e8)(renderer.current);
        };
    }, [
        height,
        width
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        let mounted = true;
        const loadImages = async ()=>{
            const anisotropy = renderer.current.capabilities.getMaxAnisotropy();
            const texturePromises = images.map(async (image)=>{
                const imageSrc = image.srcSet ? await (0,utils_image__WEBPACK_IMPORTED_MODULE_11__/* .resolveSrcFromSrcSet */ .Ro)(image) : image.src.src;
                const imageTexture = await utils_three__WEBPACK_IMPORTED_MODULE_8__/* .textureLoader.loadAsync */ .Et.loadAsync(imageSrc);
                await renderer.current.initTexture(imageTexture);
                imageTexture.encoding = three__WEBPACK_IMPORTED_MODULE_6__.sRGBEncoding;
                imageTexture.minFilter = three__WEBPACK_IMPORTED_MODULE_6__.LinearFilter;
                imageTexture.magFilter = three__WEBPACK_IMPORTED_MODULE_6__.LinearFilter;
                imageTexture.anisotropy = anisotropy;
                imageTexture.generateMipmaps = false;
                return imageTexture;
            });
            const textures = await Promise.all(texturePromises);
            // Cancel if the component has unmounted during async code
            if (!mounted) return;
            material.current = new three__WEBPACK_IMPORTED_MODULE_6__.ShaderMaterial({
                uniforms: {
                    dispFactor: {
                        type: "f",
                        value: 0
                    },
                    direction: {
                        type: "f",
                        value: 1
                    },
                    currentImage: {
                        type: "t",
                        value: textures[0]
                    },
                    nextImage: {
                        type: "t",
                        value: textures[1]
                    },
                    reduceMotion: {
                        type: "b",
                        value: reduceMotion
                    }
                },
                vertexShader: _carouselVertex_glsl__WEBPACK_IMPORTED_MODULE_10__,
                fragmentShader: _carouselFragment_glsl__WEBPACK_IMPORTED_MODULE_9__,
                transparent: false,
                opacity: 1
            });
            geometry.current = new three__WEBPACK_IMPORTED_MODULE_6__.PlaneBufferGeometry(width, height, 1);
            imagePlane.current = new three__WEBPACK_IMPORTED_MODULE_6__.Mesh(geometry.current, material.current);
            imagePlane.current.position.set(0, 0, 0);
            scene.current.add(imagePlane.current);
            setLoaded(true);
            setTextures(textures);
            requestAnimationFrame(()=>{
                renderer.current.render(scene.current, camera.current);
            });
        };
        if (inViewport && !loaded) {
            loadImages();
        }
        return ()=>{
            mounted = false;
        };
    }, [
        height,
        images,
        inViewport,
        loaded,
        reduceMotion,
        width
    ]);
    const goToIndex = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(({ index , direction =1  })=>{
        if (!textures) return;
        setImageIndex(index);
        const { uniforms  } = material.current;
        uniforms.nextImage.value = textures[index];
        uniforms.direction.value = direction;
        const onComplete = ()=>{
            uniforms.currentImage.value = textures[index];
            uniforms.dispFactor.value = 0;
            animating.current = false;
        };
        if (uniforms.dispFactor.value !== 1) {
            animating.current = true;
            (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.animate)(uniforms.dispFactor.value, 1, {
                type: "spring",
                stiffness: 100,
                damping: 20,
                restSpeed: 0.001,
                restDelta: 0.001,
                onUpdate: (value)=>{
                    uniforms.dispFactor.value = value;
                },
                onComplete
            });
        }
    }, [
        textures
    ]);
    const navigate = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(({ direction , index =null , ...rest })=>{
        if (!loaded) return;
        if (animating.current) {
            cancelAnimationFrame(scheduledAnimationFrame.current);
            scheduledAnimationFrame.current = requestAnimationFrame(()=>navigate({
                    direction,
                    index,
                    ...rest
                }));
            return;
        }
        const finalIndex = determineIndex(imageIndex, index, textures, direction);
        goToIndex({
            index: finalIndex,
            direction: direction,
            ...rest
        });
    }, [
        goToIndex,
        imageIndex,
        loaded,
        textures
    ]);
    const onNavClick = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((index)=>{
        if (index === imageIndex) return;
        const direction = index > imageIndex ? 1 : -1;
        navigate({
            direction,
            index
        });
    }, [
        imageIndex,
        navigate
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        const handleResize = ()=>{
            const rect = canvas.current.getBoundingClientRect();
            setCanvasRect(rect);
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        let animation;
        const animate = ()=>{
            animation = requestAnimationFrame(animate);
            if (animating.current) {
                renderer.current.render(scene.current, camera.current);
            }
        };
        animation = requestAnimationFrame(animate);
        return ()=>{
            cancelAnimationFrame(animation);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        if (placeholder) {
            const purgePlaceholder = ()=>{
                setShowPlaceholder(false);
            };
            const placeholderElement = placeholderRef.current;
            placeholderElement.addEventListener("transitionend", purgePlaceholder);
            return ()=>{
                if (placeholderElement) {
                    placeholderElement.removeEventListener("transitionend", purgePlaceholder);
                }
            };
        }
    }, [
        placeholder
    ]);
    const onSwipeMove = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((x)=>{
        if (animating.current || !material.current || !textures) return;
        lastSwipePosition.current = x;
        const absoluteX = Math.abs(x);
        const containerWidth = canvasRect.width;
        swipeDirection.current = x > 0 ? -1 : 1;
        const swipePercentage = 1 - (absoluteX - containerWidth) / containerWidth * -1;
        const nextIndex = determineIndex(imageIndex, null, images, swipeDirection.current);
        const uniforms = material.current.uniforms;
        const displacementClamp = Math.min(Math.max(swipePercentage, 0), 1);
        uniforms.currentImage.value = textures[imageIndex];
        uniforms.nextImage.value = textures[nextIndex];
        uniforms.direction.value = swipeDirection.current;
        uniforms.dispFactor.value = displacementClamp;
        requestAnimationFrame(()=>{
            renderer.current.render(scene.current, camera.current);
        });
    }, [
        canvasRect,
        imageIndex,
        images,
        textures
    ]);
    const onSwipeEnd = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        if (!material.current) return;
        const uniforms = material.current.uniforms;
        const duration = (1 - uniforms.dispFactor.value) * 1000;
        const position = Math.abs(lastSwipePosition.current);
        const minSwipeDistance = canvasRect.width * 0.2;
        lastSwipePosition.current = 0;
        if (animating.current) return;
        if (position === 0 || !position) return;
        if (position > minSwipeDistance) {
            navigate({
                duration,
                direction: swipeDirection.current
            });
        } else {
            uniforms.currentImage.value = uniforms.nextImage.value;
            uniforms.nextImage.value = uniforms.currentImage.value;
            uniforms.dispFactor.value = 1 - uniforms.dispFactor.value;
            navigate({
                direction: swipeDirection.current * -1,
                index: imageIndex
            });
        }
    }, [
        canvasRect,
        imageIndex,
        navigate
    ]);
    const handlePointerMove = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        onSwipeMove(event.clientX - initSwipeX.current);
    }, [
        onSwipeMove
    ]);
    const handlePointerUp = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)(()=>{
        setDragging(false);
        onSwipeEnd();
        document.removeEventListener("pointerup", handlePointerUp);
        document.removeEventListener("pointermove", handlePointerMove);
    }, [
        handlePointerMove,
        onSwipeEnd
    ]);
    const handlePointerDown = (0,react__WEBPACK_IMPORTED_MODULE_5__.useCallback)((event)=>{
        initSwipeX.current = event.clientX;
        setDragging(true);
        document.addEventListener("pointermove", handlePointerMove);
        document.addEventListener("pointerup", handlePointerUp);
    }, [
        handlePointerMove,
        handlePointerUp
    ]);
    const handleKeyDown = (event)=>{
        switch(event.key){
            case "ArrowRight":
                navigate({
                    direction: 1
                });
                break;
            case "ArrowLeft":
                navigate({
                    direction: -1
                });
                break;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().carousel),
        onKeyDown: handleKeyDown,
        ...rest,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().content),
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().imageWrapper),
                        "data-dragging": dragging,
                        onPointerDown: handlePointerDown,
                        style: (0,utils_style__WEBPACK_IMPORTED_MODULE_7__/* .cssProps */ .Fh)({
                            aspectRatio: `${width} / ${height}`
                        }),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                "aria-atomic": true,
                                className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().canvasWrapper),
                                "aria-live": "polite",
                                "aria-label": currentImageAlt,
                                role: "img",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                                    "aria-hidden": true,
                                    className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().canvas),
                                    ref: canvas
                                })
                            }),
                            showPlaceholder && placeholder && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                "aria-hidden": true,
                                className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().placeholder),
                                "data-loaded": loaded && !!textures,
                                src: placeholder.src,
                                ref: placeholderRef,
                                alt: "",
                                role: "presentation"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().button),
                        "data-prev": true,
                        "aria-label": "Previous slide",
                        onClick: ()=>navigate({
                                direction: -1
                            }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_arrow_left_svg__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().button),
                        "data-next": true,
                        "aria-label": "Next slide",
                        onClick: ()=>navigate({
                                direction: 1
                            }),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(assets_arrow_right_svg__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().nav),
                children: images.map((image, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_Carousel_module_css__WEBPACK_IMPORTED_MODULE_12___default().navButton),
                        onClick: ()=>onNavClick(index),
                        "aria-label": `Jump to slide ${index + 1}`,
                        "aria-pressed": index === imageIndex
                    }, image.alt))
            })
        ]
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1003:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Carousel": () => (/* reexport safe */ _Carousel__WEBPACK_IMPORTED_MODULE_0__.l)
/* harmony export */ });
/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6782);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Carousel__WEBPACK_IMPORTED_MODULE_0__]);
_Carousel__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2202:
/***/ ((module) => {

"use strict";
module.exports = "varying vec2 vUv;\nuniform sampler2D currentImage;\nuniform sampler2D nextImage;\nuniform float dispFactor;\nuniform float direction;\nuniform bool reduceMotion;\n\nvoid main() {\n  if (reduceMotion) {\n    // Simple crossfade\n    vec4 _currentImage = texture2D(currentImage, vUv);\n    vec4 _nextImage = texture2D(nextImage, vUv);\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  } else {\n    // Liquid distortion effect\n    vec2 uv = vUv;\n    vec4 _currentImage;\n    vec4 _nextImage;\n    float intensity = 0.6;\n\n    vec4 orig1 = texture2D(currentImage, uv);\n    vec4 orig2 = texture2D(nextImage, uv);\n\n    vec2 distortedPosition = vec2(\n      uv.x + direction * (dispFactor * (orig2.r * intensity)),\n      uv.y + direction * (dispFactor * (orig2 * intensity))\n    );\n\n    vec2 distortedPosition2 = vec2(\n      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),\n      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))\n    );\n\n    _currentImage = texture2D(currentImage, distortedPosition);\n    _nextImage = texture2D(nextImage, distortedPosition2);\n\n    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);\n    gl_FragColor = finalTexture;\n  }\n}\n";

/***/ }),

/***/ 5678:
/***/ ((module) => {

"use strict";
module.exports = "varying vec2 vUv;\n\nvoid main() {\n  vUv = uv;\n  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}\n";

/***/ })

};
;