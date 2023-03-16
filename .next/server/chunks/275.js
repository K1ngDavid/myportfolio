exports.id = 275;
exports.ids = [275];
exports.modules = {

/***/ 1550:
/***/ ((module) => {

// Exports
module.exports = {
	"model": "Model_model__228ej",
	"canvas": "Model_canvas__kaLjL"
};


/***/ }),

/***/ 2386:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "H": () => (/* binding */ Model)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2949);
/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(886);
/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(three_stdlib__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_image__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5622);
/* harmony import */ var utils_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(2362);
/* harmony import */ var utils_three__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3142);
/* harmony import */ var _Model_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1550);
/* harmony import */ var _Model_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_Model_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _deviceModels__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6521);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_2__, three__WEBPACK_IMPORTED_MODULE_4__, utils_three__WEBPACK_IMPORTED_MODULE_7__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, hooks__WEBPACK_IMPORTED_MODULE_2__, three__WEBPACK_IMPORTED_MODULE_4__, utils_three__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











const MeshType = {
    Frame: "Frame",
    Logo: "Logo",
    Screen: "Screen"
};
const rotationSpringConfig = {
    stiffness: 40,
    damping: 20,
    mass: 1.4,
    restSpeed: 0.001
};
const Model = ({ models , show =true , showDelay =0 , cameraPosition ={
    x: 0,
    y: 0,
    z: 8
} , style , className , alt , ...rest })=>{
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const container = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const canvas = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const camera = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const modelGroup = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const scene = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const renderer = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const shadowGroup = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const renderTarget = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const renderTargetBlur = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const shadowCamera = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const depthMaterial = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const horizontalBlurMaterial = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const verticalBlurMaterial = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const plane = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const lights = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const blurPlane = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const fillPlane = (0,react__WEBPACK_IMPORTED_MODULE_3__.useRef)();
    const isInViewport = (0,hooks__WEBPACK_IMPORTED_MODULE_2__/* .useInViewport */ .NM)(container, false, {
        threshold: 0.2
    });
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useReducedMotion)();
    const rotationX = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useSpring)(0, rotationSpringConfig);
    const rotationY = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useSpring)(0, rotationSpringConfig);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const { clientWidth , clientHeight  } = container.current;
        renderer.current = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderer({
            canvas: canvas.current,
            alpha: true,
            antialias: false,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: true
        });
        renderer.current.setPixelRatio(2);
        renderer.current.setSize(clientWidth, clientHeight);
        renderer.current.outputEncoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;
        renderer.current.physicallyCorrectLights = true;
        camera.current = new three__WEBPACK_IMPORTED_MODULE_4__.PerspectiveCamera(36, clientWidth / clientHeight, 0.1, 100);
        camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z);
        scene.current = new three__WEBPACK_IMPORTED_MODULE_4__.Scene();
        modelGroup.current = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
        scene.current.add(modelGroup.current);
        // Lighting
        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_4__.AmbientLight(0xffffff, 1.2);
        const keyLight = new three__WEBPACK_IMPORTED_MODULE_4__.DirectionalLight(0xffffff, 1.1);
        const fillLight = new three__WEBPACK_IMPORTED_MODULE_4__.DirectionalLight(0xffffff, 0.8);
        fillLight.position.set(-6, 2, 2);
        keyLight.position.set(0.5, 0, 0.866);
        lights.current = [
            ambientLight,
            keyLight,
            fillLight
        ];
        lights.current.forEach((light)=>scene.current.add(light));
        // The shadow container, if you need to move the plane just move this
        shadowGroup.current = new three__WEBPACK_IMPORTED_MODULE_4__.Group();
        scene.current.add(shadowGroup.current);
        shadowGroup.current.position.set(0, 0, -0.8);
        shadowGroup.current.rotateX(Math.PI / 2);
        const renderTargetSize = 512;
        const planeWidth = 8;
        const planeHeight = 8;
        const cameraHeight = 1.5;
        const shadowOpacity = 0.8;
        const shadowDarkness = 3;
        // The render target that will show the shadows in the plane texture
        renderTarget.current = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderTarget(renderTargetSize, renderTargetSize);
        renderTarget.current.texture.generateMipmaps = false;
        // The render target that we will use to blur the first render target
        renderTargetBlur.current = new three__WEBPACK_IMPORTED_MODULE_4__.WebGLRenderTarget(renderTargetSize, renderTargetSize);
        renderTargetBlur.current.texture.generateMipmaps = false;
        // Make a plane and make it face up
        const planeGeometry = new three__WEBPACK_IMPORTED_MODULE_4__.PlaneBufferGeometry(planeWidth, planeHeight).rotateX(Math.PI / 2);
        const planeMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({
            map: renderTarget.current.texture,
            opacity: shadowOpacity,
            transparent: true
        });
        plane.current = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(planeGeometry, planeMaterial);
        // The y from the texture is flipped!
        plane.current.scale.y = -1;
        shadowGroup.current.add(plane.current);
        // The plane onto which to blur the texture
        blurPlane.current = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(planeGeometry);
        blurPlane.current.visible = false;
        shadowGroup.current.add(blurPlane.current);
        // The plane with the color of the ground
        const fillMaterial = new three__WEBPACK_IMPORTED_MODULE_4__.MeshBasicMaterial({
            color: 0xffffff,
            opacity: 0,
            transparent: true
        });
        fillPlane.current = new three__WEBPACK_IMPORTED_MODULE_4__.Mesh(planeGeometry, fillMaterial);
        fillPlane.current.rotateX(Math.PI);
        fillPlane.current.position.y -= 0.00001;
        shadowGroup.current.add(fillPlane.current);
        // The camera to render the depth material from
        shadowCamera.current = new three__WEBPACK_IMPORTED_MODULE_4__.OrthographicCamera(-planeWidth / 2, planeWidth / 2, planeHeight / 2, -planeHeight / 2, 0, cameraHeight);
        // Get the camera to look up
        shadowCamera.current.rotation.x = Math.PI / 2;
        shadowGroup.current.add(shadowCamera.current);
        // Like MeshDepthMaterial, but goes from black to transparent
        depthMaterial.current = new three__WEBPACK_IMPORTED_MODULE_4__.MeshDepthMaterial();
        depthMaterial.current.userData.darkness = {
            value: shadowDarkness
        };
        depthMaterial.current.onBeforeCompile = (shader)=>{
            shader.uniforms.darkness = depthMaterial.current.userData.darkness;
            shader.fragmentShader = `
        uniform float darkness;
        ${shader.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );", "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `;
        };
        depthMaterial.current.depthTest = false;
        depthMaterial.current.depthWrite = false;
        horizontalBlurMaterial.current = new three__WEBPACK_IMPORTED_MODULE_4__.ShaderMaterial(three_stdlib__WEBPACK_IMPORTED_MODULE_5__.HorizontalBlurShader);
        horizontalBlurMaterial.current.depthTest = false;
        verticalBlurMaterial.current = new three__WEBPACK_IMPORTED_MODULE_4__.ShaderMaterial(three_stdlib__WEBPACK_IMPORTED_MODULE_5__.VerticalBlurShader);
        verticalBlurMaterial.current.depthTest = false;
        const unsubscribeX = rotationX.onChange(renderFrame);
        const unsubscribeY = rotationY.onChange(renderFrame);
        return ()=>{
            renderTarget.current.dispose();
            renderTargetBlur.current.dispose();
            (0,utils_three__WEBPACK_IMPORTED_MODULE_7__/* .removeLights */ .Ji)(lights.current);
            (0,utils_three__WEBPACK_IMPORTED_MODULE_7__/* .cleanScene */ ["in"])(scene.current);
            (0,utils_three__WEBPACK_IMPORTED_MODULE_7__/* .cleanRenderer */ .e8)(renderer.current);
            unsubscribeX();
            unsubscribeY();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const blurShadow = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)((amount)=>{
        blurPlane.current.visible = true;
        // Blur horizontally and draw in the renderTargetBlur
        blurPlane.current.material = horizontalBlurMaterial.current;
        blurPlane.current.material.uniforms.tDiffuse.value = renderTarget.current.texture;
        horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256);
        renderer.current.setRenderTarget(renderTargetBlur.current);
        renderer.current.render(blurPlane.current, shadowCamera.current);
        // Blur vertically and draw in the main renderTarget
        blurPlane.current.material = verticalBlurMaterial.current;
        blurPlane.current.material.uniforms.tDiffuse.value = renderTargetBlur.current.texture;
        verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256);
        renderer.current.setRenderTarget(renderTarget.current);
        renderer.current.render(blurPlane.current, shadowCamera.current);
        blurPlane.current.visible = false;
    }, []);
    // Handle render passes for a single frame
    const renderFrame = (0,react__WEBPACK_IMPORTED_MODULE_3__.useCallback)(()=>{
        const blurAmount = 5;
        // Remove the background
        const initialBackground = scene.current.background;
        scene.current.background = null;
        // Force the depthMaterial to everything
        // cameraHelper.visible = false;
        scene.current.overrideMaterial = depthMaterial.current;
        // Render to the render target to get the depths
        renderer.current.setRenderTarget(renderTarget.current);
        renderer.current.render(scene.current, shadowCamera.current);
        // And reset the override material
        scene.current.overrideMaterial = null;
        blurShadow(blurAmount);
        // A second pass to reduce the artifacts
        // (0.4 is the minimum blur amout so that the artifacts are gone)
        blurShadow(blurAmount * 0.4);
        // Reset and render the normal scene
        renderer.current.setRenderTarget(null);
        scene.current.background = initialBackground;
        modelGroup.current.rotation.x = rotationX.get();
        modelGroup.current.rotation.y = rotationY.get();
        renderer.current.render(scene.current, camera.current);
    }, [
        blurShadow,
        rotationX,
        rotationY
    ]);
    // Handle mouse move animation
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const onMouseMove = (event)=>{
            const { innerWidth , innerHeight  } = window;
            const position = {
                x: (event.clientX - innerWidth / 2) / innerWidth,
                y: (event.clientY - innerHeight / 2) / innerHeight
            };
            rotationY.set(position.x / 2);
            rotationX.set(position.y / 2);
        };
        if (isInViewport && !reduceMotion) {
            window.addEventListener("mousemove", onMouseMove);
        }
        return ()=>{
            window.removeEventListener("mousemove", onMouseMove);
        };
    }, [
        isInViewport,
        reduceMotion,
        rotationX,
        rotationY
    ]);
    // Handle window resize
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const handleResize = ()=>{
            if (!container.current) return;
            const { clientWidth , clientHeight  } = container.current;
            renderer.current.setSize(clientWidth, clientHeight);
            camera.current.aspect = clientWidth / clientHeight;
            camera.current.updateProjectionMatrix();
            renderFrame();
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return ()=>{
            window.removeEventListener("resize", handleResize);
        };
    }, [
        renderFrame
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_6__/* .classes */ .Sh)((_Model_module_css__WEBPACK_IMPORTED_MODULE_9___default().model), className),
        "data-loaded": loaded,
        style: (0,utils_style__WEBPACK_IMPORTED_MODULE_6__/* .cssProps */ .Fh)({
            delay: (0,utils_style__WEBPACK_IMPORTED_MODULE_6__/* .numToMs */ .aU)(showDelay)
        }, style),
        ref: container,
        role: "img",
        "aria-label": alt,
        ...rest,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                className: (_Model_module_css__WEBPACK_IMPORTED_MODULE_9___default().canvas),
                ref: canvas
            }),
            models.map((model, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Device, {
                    renderer: renderer,
                    modelGroup: modelGroup,
                    show: show,
                    showDelay: showDelay,
                    renderFrame: renderFrame,
                    index: index,
                    setLoaded: setLoaded,
                    model: model
                }, JSON.stringify(model.position)))
        ]
    });
};
const Device = ({ renderer , model , modelGroup , renderFrame , index , showDelay , setLoaded , show ,  })=>{
    const { 0: loadDevice , 1: setLoadDevice  } = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)();
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.useReducedMotion)();
    const placeholderScreen = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        const applyScreenTexture = async (texture, node)=>{
            texture.encoding = three__WEBPACK_IMPORTED_MODULE_4__.sRGBEncoding;
            texture.flipY = false;
            texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy();
            texture.generateMipmaps = false;
            // Decode the texture to prevent jank on first render
            await renderer.current.initTexture(texture);
            node.material.color = new three__WEBPACK_IMPORTED_MODULE_4__.Color(0xffffff);
            node.material.transparent = true;
            node.material.map = texture;
        };
        // Generate promises to await when ready
        const load = async ()=>{
            const { texture , position , url  } = model;
            let loadFullResTexture;
            let playAnimation;
            const [placeholder, gltf] = await Promise.all([
                await utils_three__WEBPACK_IMPORTED_MODULE_7__/* .textureLoader.loadAsync */ .Et.loadAsync(texture.placeholder.src),
                await utils_three__WEBPACK_IMPORTED_MODULE_7__/* .modelLoader.loadAsync */ .Zf.loadAsync(url), 
            ]);
            modelGroup.current.add(gltf.scene);
            gltf.scene.traverse(async (node)=>{
                if (node.material) {
                    node.material.color = new three__WEBPACK_IMPORTED_MODULE_4__.Color(0x1f2025);
                    node.material.color.convertSRGBToLinear();
                }
                if (node.name === MeshType.Screen) {
                    // Create a copy of the screen mesh so we can fade it out
                    // over the full resolution screen texture
                    placeholderScreen.current = node.clone();
                    placeholderScreen.current.material = node.material.clone();
                    node.parent.add(placeholderScreen.current);
                    placeholderScreen.current.material.opacity = 1;
                    placeholderScreen.current.position.z += 0.001;
                    applyScreenTexture(placeholder, placeholderScreen.current);
                    loadFullResTexture = async ()=>{
                        const image = await (0,utils_image__WEBPACK_IMPORTED_MODULE_10__/* .resolveSrcFromSrcSet */ .Ro)(texture);
                        const fullSize = await utils_three__WEBPACK_IMPORTED_MODULE_7__/* .textureLoader.loadAsync */ .Et.loadAsync(image);
                        await applyScreenTexture(fullSize, node);
                        (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.animate)(1, 0, {
                            onUpdate: (value)=>{
                                placeholderScreen.current.material.opacity = value;
                                renderFrame();
                            }
                        });
                    };
                }
            });
            const targetPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(position.x, position.y, position.z);
            if (reduceMotion) {
                gltf.scene.position.set(...targetPosition.toArray());
            }
            // Simple slide up animation
            if (model.animation === _deviceModels__WEBPACK_IMPORTED_MODULE_8__/* .ModelAnimationType.SpringUp */ .u.SpringUp) {
                playAnimation = ()=>{
                    const startPosition = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(targetPosition.x, targetPosition.y - 1, targetPosition.z);
                    gltf.scene.position.set(...startPosition.toArray());
                    (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.animate)(startPosition.y, targetPosition.y, {
                        type: "spring",
                        delay: (300 * index + showDelay) / 1000,
                        stiffness: 60,
                        damping: 20,
                        mass: 1,
                        restSpeed: 0.0001,
                        restDelta: 0.0001,
                        onUpdate: (value)=>{
                            gltf.scene.position.y = value;
                            renderFrame();
                        }
                    });
                };
            }
            // Swing the laptop lid open
            if (model.animation === _deviceModels__WEBPACK_IMPORTED_MODULE_8__/* .ModelAnimationType.LaptopOpen */ .u.LaptopOpen) {
                playAnimation = ()=>{
                    const frameNode = gltf.scene.children.find((node)=>node.name === MeshType.Frame);
                    const startRotation = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(three__WEBPACK_IMPORTED_MODULE_4__.MathUtils.degToRad(90), 0, 0);
                    const endRotation = new three__WEBPACK_IMPORTED_MODULE_4__.Vector3(0, 0, 0);
                    gltf.scene.position.set(...targetPosition.toArray());
                    frameNode.rotation.set(...startRotation.toArray());
                    return (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.animate)(startRotation.x, endRotation.x, {
                        type: "spring",
                        delay: (300 * index + showDelay + 300) / 1000,
                        stiffness: 80,
                        damping: 20,
                        restSpeed: 0.0001,
                        restDelta: 0.0001,
                        onUpdate: (value)=>{
                            frameNode.rotation.x = value;
                            renderFrame();
                        }
                    });
                };
            }
            return {
                loadFullResTexture,
                playAnimation
            };
        };
        setLoadDevice({
            start: load
        });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (!loadDevice || !show) return;
        let animation;
        const onLoad = async ()=>{
            const { loadFullResTexture , playAnimation  } = await loadDevice.start();
            setLoaded(true);
            if (!reduceMotion) {
                animation = playAnimation();
            }
            await loadFullResTexture();
            if (reduceMotion) {
                renderFrame();
            }
        };
        (0,react__WEBPACK_IMPORTED_MODULE_3__.startTransition)(()=>{
            onLoad();
        });
        return ()=>{
            animation?.stop();
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        loadDevice,
        show
    ]);
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7275:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Model": () => (/* reexport safe */ _Model__WEBPACK_IMPORTED_MODULE_0__.H)
/* harmony export */ });
/* harmony import */ var _Model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2386);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Model__WEBPACK_IMPORTED_MODULE_0__]);
_Model__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;