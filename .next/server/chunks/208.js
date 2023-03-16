exports.id = 208;
exports.ids = [208];
exports.modules = {

/***/ 9263:
/***/ ((module) => {

// Exports
module.exports = {
	"earth": "Earth_earth__OpSy9",
	"loader": "Earth_loader__FJ8SI",
	"viewport": "Earth_viewport__uBdB2",
	"canvas": "Earth_canvas__8O7Y6",
	"labels": "Earth_labels__dku1G",
	"label": "Earth_label__DShU9",
	"vignette": "Earth_vignette__8nqic",
	"sections": "Earth_sections__KalJU",
	"section": "Earth_section__EU8Lb"
};


/***/ }),

/***/ 1760:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/milkyway.dfc91e8e.jpg","height":512,"width":1024,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAQACAMBIgACEQEDEQH/xAAoAAEBAAAAAAAAAAAAAAAAAAAABwEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAJGF/8QAGRAAAwADAAAAAAAAAAAAAAAAAQIRADEy/9oACAEBAAE/AB2qQTWf/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAgEBPwB//8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAgBAwEBPwB//9k="});

/***/ }),

/***/ 3208:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Earth": () => (/* binding */ Earth),
/* harmony export */   "EarthSection": () => (/* binding */ EarthSection)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var assets_earth_glb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4843);
/* harmony import */ var assets_milkyway_nx_hdr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1850);
/* harmony import */ var assets_milkyway_ny_hdr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2026);
/* harmony import */ var assets_milkyway_nz_hdr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3374);
/* harmony import */ var assets_milkyway_px_hdr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5535);
/* harmony import */ var assets_milkyway_py_hdr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7898);
/* harmony import */ var assets_milkyway_pz_hdr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7673);
/* harmony import */ var assets_milkyway_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1760);
/* harmony import */ var components_Loader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1206);
/* harmony import */ var components_Section__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6602);
/* harmony import */ var components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3994);
/* harmony import */ var components_Transition__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8802);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6197);
/* harmony import */ var hooks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5480);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(886);
/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(three_stdlib__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(2949);
/* harmony import */ var utils_clamp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(2156);
/* harmony import */ var utils_style__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(2362);
/* harmony import */ var utils_three__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(3142);
/* harmony import */ var utils_throttle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(9552);
/* harmony import */ var _Earth_module_css__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(9263);
/* harmony import */ var _Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_Earth_module_css__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([components_Loader__WEBPACK_IMPORTED_MODULE_9__, components_Transition__WEBPACK_IMPORTED_MODULE_12__, framer_motion__WEBPACK_IMPORTED_MODULE_13__, hooks__WEBPACK_IMPORTED_MODULE_14__, three__WEBPACK_IMPORTED_MODULE_17__, utils_three__WEBPACK_IMPORTED_MODULE_19__]);
([components_Loader__WEBPACK_IMPORTED_MODULE_9__, components_Transition__WEBPACK_IMPORTED_MODULE_12__, framer_motion__WEBPACK_IMPORTED_MODULE_13__, hooks__WEBPACK_IMPORTED_MODULE_14__, three__WEBPACK_IMPORTED_MODULE_17__, utils_three__WEBPACK_IMPORTED_MODULE_19__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

























const nullTarget = {
    x: 0,
    y: 0,
    z: 2
};
const interpolatePosition = (value, nextValue, percent)=>value + percent * (nextValue - value);
const positionToString = (value)=>Object.keys(value).map((key)=>parseFloat(Math.round(value[key] * 100) / 100).toFixed(2)).join(", ");
const getPositionValues = (section)=>{
    if (!section || !section.camera) return nullTarget;
    return {
        x: section.camera[0],
        y: section.camera[1],
        z: section.camera[2]
    };
};
const isEqualPosition = (position1, position2)=>{
    const round = (num = 0)=>Math.round((num + Number.EPSILON) * 100) / 100;
    return round(position1?.x) === round(position2?.x) && round(position1?.y) === round(position2?.y) && round(position1?.z) === round(position2?.z);
};
const cameraSpringConfig = {
    stiffness: 80,
    damping: 40,
    mass: 2,
    restSpeed: 0.001,
    restDelta: 0.001
};
const chunkSpringConfig = {
    stiffness: 40,
    damping: 30,
    mass: 2,
    restSpeed: 0.001,
    restDelta: 0.001
};
const opacitySpringConfig = {
    stiffness: 40,
    damping: 30
};
const EarthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_15__.createContext)({});
const Earth = ({ position =[
    0,
    0,
    0
] , scale =1 , hideMeshes =[] , labels =[] , className , children ,  })=>{
    const { 0: loaded , 1: setLoaded  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
    const { 0: grabbing , 1: setGrabbing  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
    const { 0: visible , 1: setVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
    const { 0: loaderVisible , 1: setLoaderVisible  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useState)(false);
    const sectionRefs = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)([]);
    const container = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const labelContainer = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const canvas = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const scene = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const renderer = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const camera = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const clock = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const mouse = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const raycaster = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const sceneModel = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const animations = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const mixer = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const inViewport = (0,hooks__WEBPACK_IMPORTED_MODULE_14__/* .useInViewport */ .NM)(canvas);
    const animationFrame = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const initCameraPosition = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)(getPositionValues(sectionRefs.current[0]));
    const labelElements = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)([]);
    const controls = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const envMap = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const contentAdded = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const mounted = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const { width: windowWidth , height: windowHeight  } = (0,hooks__WEBPACK_IMPORTED_MODULE_14__/* .useWindowSize */ .iP)();
    const reduceMotion = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useReducedMotion)();
    const cameraXSpring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(0, cameraSpringConfig);
    const cameraYSpring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(0, cameraSpringConfig);
    const cameraZSpring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(0, cameraSpringConfig);
    const chunkXSpring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(0, chunkSpringConfig);
    const chunkYSpring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(0, chunkSpringConfig);
    const chunkZSpring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(0, chunkSpringConfig);
    const opacitySpring = (0,framer_motion__WEBPACK_IMPORTED_MODULE_13__.useSpring)(0, opacitySpringConfig);
    const renderFrame = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(()=>{
        if (!inViewport) {
            cancelAnimationFrame(animationFrame.current);
            return;
        }
        animationFrame.current = requestAnimationFrame(renderFrame);
        const delta = clock.current.getDelta();
        mixer.current.update(delta);
        controls.current.update();
        renderer.current.render(scene.current, camera.current);
        // Render labels
        labelElements.current.forEach((label)=>{
            const { element , position , sprite  } = label;
            const vector = new three__WEBPACK_IMPORTED_MODULE_17__.Vector3(...position);
            const meshDistance = camera.current.position.distanceTo(sceneModel.current.position);
            const spriteDistance = camera.current.position.distanceTo(sprite.position);
            const spriteBehindObject = spriteDistance > meshDistance;
            vector.project(camera.current);
            vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth);
            vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight);
            element.style.setProperty("--posX", (0,utils_style__WEBPACK_IMPORTED_MODULE_18__/* .numToPx */ .ml)(vector.x));
            element.style.setProperty("--posY", (0,utils_style__WEBPACK_IMPORTED_MODULE_18__/* .numToPx */ .ml)(vector.y));
            if (spriteBehindObject) {
                element.dataset.occluded = true;
            } else {
                element.dataset.occluded = false;
            }
        });
    }, [
        inViewport
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        mounted.current = true;
        const { innerWidth , innerHeight  } = window;
        renderer.current = new three__WEBPACK_IMPORTED_MODULE_17__.WebGLRenderer({
            canvas: canvas.current,
            antialias: false,
            alpha: true,
            powerPreference: "high-performance",
            failIfMajorPerformanceCaveat: true
        });
        renderer.current.setPixelRatio(1);
        renderer.current.outputEncoding = three__WEBPACK_IMPORTED_MODULE_17__.sRGBEncoding;
        renderer.current.physicallyCorrectLights = true;
        renderer.current.toneMapping = three__WEBPACK_IMPORTED_MODULE_17__.ACESFilmicToneMapping;
        camera.current = new three__WEBPACK_IMPORTED_MODULE_17__.PerspectiveCamera(54, innerWidth / innerHeight, 0.1, 100);
        camera.current.position.x = initCameraPosition.current.x;
        camera.current.position.y = initCameraPosition.current.y;
        camera.current.position.z = initCameraPosition.current.z;
        camera.current.lookAt(0, 0, 0);
        cameraXSpring.set(camera.current.position.x, false);
        cameraYSpring.set(camera.current.position.y, false);
        cameraZSpring.set(camera.current.position.z, false);
        scene.current = new three__WEBPACK_IMPORTED_MODULE_17__.Scene();
        clock.current = new three__WEBPACK_IMPORTED_MODULE_17__.Clock();
        raycaster.current = new three__WEBPACK_IMPORTED_MODULE_17__.Raycaster();
        const ambientLight = new three__WEBPACK_IMPORTED_MODULE_17__.AmbientLight(0x222222, 0.05);
        const dirLight = new three__WEBPACK_IMPORTED_MODULE_17__.DirectionalLight(0xffffff, 1.5);
        dirLight.position.set(3, 0, 1);
        const lights = [
            ambientLight,
            dirLight
        ];
        lights.forEach((light)=>scene.current.add(light));
        controls.current = new three_stdlib__WEBPACK_IMPORTED_MODULE_16__.OrbitControls(camera.current, canvas.current);
        controls.current.enableZoom = false;
        controls.current.enablePan = false;
        controls.current.enableDamping = false;
        controls.current.rotateSpeed = 0.5;
        return ()=>{
            mounted.current = false;
            cancelAnimationFrame(animationFrame.current);
            (0,utils_three__WEBPACK_IMPORTED_MODULE_19__/* .removeLights */ .Ji)(lights);
            (0,utils_three__WEBPACK_IMPORTED_MODULE_19__/* .cleanScene */ ["in"])(scene.current);
            (0,utils_three__WEBPACK_IMPORTED_MODULE_19__/* .cleanRenderer */ .e8)(renderer.current);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        const handleControlStart = ()=>{
            setGrabbing(true);
            cameraXSpring.stop();
            cameraYSpring.stop();
            cameraZSpring.stop();
        };
        const handleControlEnd = ()=>{
            cameraXSpring.set(camera.current.position.x, false);
            cameraYSpring.set(camera.current.position.y, false);
            cameraZSpring.set(camera.current.position.z, false);
            setGrabbing(false);
        };
        controls.current.addEventListener("start", handleControlStart);
        controls.current.addEventListener("end", handleControlEnd);
        return ()=>{
            controls.current.removeEventListener("start", handleControlStart);
            controls.current.removeEventListener("end", handleControlEnd);
        };
    }, [
        cameraXSpring,
        cameraYSpring,
        cameraZSpring
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        if (!loaded) return;
        const chunk = (0,utils_three__WEBPACK_IMPORTED_MODULE_19__/* .getChild */ .x2)("Chunk", sceneModel.current);
        const atmosphere = (0,utils_three__WEBPACK_IMPORTED_MODULE_19__/* .getChild */ .x2)("Atmosphere", sceneModel.current);
        const handleCameraChange = (axis, value)=>{
            camera.current.position[axis] = value;
        };
        const unsubscribeCameraX = cameraXSpring.onChange((value)=>handleCameraChange("x", value));
        const unsubscribeCameraY = cameraYSpring.onChange((value)=>handleCameraChange("y", value));
        const unsubscribeCameraZ = cameraZSpring.onChange((value)=>handleCameraChange("z", value));
        const handleChunkChange = (axis, value)=>{
            chunk.position[axis] = value;
        };
        const unsubscribeChunkX = chunkXSpring.onChange((value)=>handleChunkChange("x", value));
        const unsubscribeChunkY = chunkYSpring.onChange((value)=>handleChunkChange("y", value));
        const unsubscribeChunkZ = chunkZSpring.onChange((value)=>handleChunkChange("z", value));
        const unsubscribeOpacity = opacitySpring.onChange((value)=>{
            atmosphere.material.opacity = value;
        });
        return ()=>{
            unsubscribeCameraX();
            unsubscribeCameraY();
            unsubscribeCameraZ();
            unsubscribeChunkX();
            unsubscribeChunkY();
            unsubscribeChunkZ();
            unsubscribeOpacity();
        };
    }, [
        cameraXSpring,
        cameraYSpring,
        cameraZSpring,
        chunkXSpring,
        chunkYSpring,
        chunkZSpring,
        loaded,
        opacitySpring, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        if (windowWidth <= utils_style__WEBPACK_IMPORTED_MODULE_18__/* .media.tablet */ .BC.tablet) {
            controls.current.enabled = false;
        }
    }, [
        windowWidth
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        if (loaded) return;
        const hdrLoader = new three_stdlib__WEBPACK_IMPORTED_MODULE_16__.HDRCubeTextureLoader();
        const pmremGenerator = new three__WEBPACK_IMPORTED_MODULE_17__.PMREMGenerator(renderer.current);
        pmremGenerator.compileCubemapShader();
        const loadModel = async ()=>{
            const gltf = await utils_three__WEBPACK_IMPORTED_MODULE_19__/* .modelLoader.loadAsync */ .Zf.loadAsync(assets_earth_glb__WEBPACK_IMPORTED_MODULE_1__);
            sceneModel.current = gltf.scene;
            animations.current = gltf.animations;
            mixer.current = new three__WEBPACK_IMPORTED_MODULE_17__.AnimationMixer(sceneModel.current);
            mixer.current.timeScale = 0.1;
            sceneModel.current.traverse(async (child)=>{
                const { material , name  } = child;
                if (name === "Atmosphere") {
                    material.alphaMap = material.map;
                }
                if (material) {
                    await renderer.current.initTexture(material);
                }
            });
            sceneModel.current.position.x = position[0];
            sceneModel.current.position.y = position[1];
            sceneModel.current.position.z = position[2];
            sceneModel.current.scale.x = scale;
            sceneModel.current.scale.y = scale;
            sceneModel.current.scale.z = scale;
        };
        const loadEnv = async ()=>{
            const hdrTexture = await hdrLoader.loadAsync([
                assets_milkyway_nx_hdr__WEBPACK_IMPORTED_MODULE_2__,
                assets_milkyway_ny_hdr__WEBPACK_IMPORTED_MODULE_3__,
                assets_milkyway_nz_hdr__WEBPACK_IMPORTED_MODULE_4__,
                assets_milkyway_px_hdr__WEBPACK_IMPORTED_MODULE_5__,
                assets_milkyway_py_hdr__WEBPACK_IMPORTED_MODULE_6__,
                assets_milkyway_pz_hdr__WEBPACK_IMPORTED_MODULE_7__
            ]);
            hdrTexture.magFilter = three__WEBPACK_IMPORTED_MODULE_17__.LinearFilter;
            envMap.current = pmremGenerator.fromCubemap(hdrTexture);
            pmremGenerator.dispose();
            await renderer.current.initTexture(envMap.current.texture);
        };
        const loadBackground = async ()=>{
            const backgroundTexture = await utils_three__WEBPACK_IMPORTED_MODULE_19__/* .textureLoader.loadAsync */ .Et.loadAsync(assets_milkyway_jpg__WEBPACK_IMPORTED_MODULE_8__/* ["default"].src */ .Z.src);
            backgroundTexture.mapping = three__WEBPACK_IMPORTED_MODULE_17__.EquirectangularReflectionMapping;
            backgroundTexture.encoding = three__WEBPACK_IMPORTED_MODULE_17__.sRGBEncoding;
            scene.current.background = backgroundTexture;
            await renderer.current.initTexture(backgroundTexture);
        };
        const handleLoad = async ()=>{
            await Promise.all([
                loadBackground(),
                loadEnv(),
                loadModel()
            ]);
            sceneModel.current.traverse(({ material  })=>{
                if (material) {
                    material.envMap = envMap.current.texture;
                    material.needsUpdate = true;
                }
            });
            if (mounted.current) {
                setLoaded(true);
            }
        };
        (0,react__WEBPACK_IMPORTED_MODULE_15__.startTransition)(()=>{
            handleLoad();
            setTimeout(()=>{
                setLoaderVisible(true);
            }, 1000);
        });
    }, [
        loaded,
        position,
        scale
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        // Add models and textures once visible
        if (loaded && !contentAdded.current) {
            scene.current.add(sceneModel.current);
            contentAdded.current = true;
        }
        // Only animate while visible
        if (loaded && inViewport) {
            setVisible(true);
            renderFrame();
        }
        return ()=>{
            cancelAnimationFrame(animationFrame.current);
        };
    }, [
        renderFrame,
        inViewport,
        loaded
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        if (loaded) {
            labelContainer.current.innerHTML = "";
            labelElements.current = labels.map((label)=>{
                const element = document.createElement("div");
                element.classList.add((_Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default().label));
                element.dataset.hidden = true;
                element.style.setProperty("--delay", `${label.delay || 0}ms`);
                element.textContent = label.text;
                labelContainer.current.appendChild(element);
                const sprite = new three__WEBPACK_IMPORTED_MODULE_17__.Sprite();
                sprite.position.set(...label.position);
                sprite.scale.set(60, 60, 1);
                return {
                    element,
                    ...label,
                    sprite
                };
            });
        }
    }, [
        labels,
        loaded
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        renderer.current.setSize(windowWidth, windowHeight);
        camera.current.aspect = windowWidth / windowHeight;
        camera.current.updateProjectionMatrix();
    }, [
        windowWidth,
        windowHeight
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        const currentCanvas = canvas.current;
        // Log readouts for dev in console
        const handleMouseUp = (event)=>{
            const { innerWidth , innerHeight  } = window;
            // Set a camera position property to help with defining camera angles
            const cameraPosition = positionToString(camera.current.position);
            console.info({
                cameraPosition
            });
            // Set a surface position to help with defining annotations
            mouse.current = new three__WEBPACK_IMPORTED_MODULE_17__.Vector2(event.clientX / innerWidth * 2 - 1, -(event.clientY / innerHeight) * 2 + 1);
            raycaster.current.setFromCamera(mouse.current, camera.current);
            const intersects = raycaster.current.intersectObjects(scene.current.children, true);
            if (intersects.length > 0) {
                const clickPosition = positionToString(intersects[0].point);
                console.info({
                    clickPosition
                });
            }
        };
        if (false) {}
        return ()=>{
            currentCanvas.removeEventListener("click", handleMouseUp);
        };
    }, []);
    const handleScroll = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)(()=>{
        if (!container.current) return;
        const { offsetTop  } = container.current;
        const { innerHeight  } = window;
        const currentScrollY = window.scrollY - offsetTop;
        let prevTarget;
        const updateMeshes = (index)=>{
            const visibleMeshes = sectionRefs.current[index].meshes;
            sceneModel.current.traverse((child)=>{
                const { name  } = child;
                const chunk = (0,utils_three__WEBPACK_IMPORTED_MODULE_19__/* .getChild */ .x2)("Chunk", sceneModel.current);
                const isVisible = visibleMeshes?.includes(name);
                const isHidden = hideMeshes?.includes(name);
                if (isVisible) {
                    if (name === "Atmosphere") {
                        child.visible = true;
                        opacitySpring.set(1);
                    } else if (name === "Chunk") {
                        const chunkTarget = new three__WEBPACK_IMPORTED_MODULE_17__.Vector3(-0.4, 0.4, 0.4);
                        child.visible = true;
                        if (reduceMotion) {
                            child.position.set(...chunkTarget.toArray());
                        } else {
                            chunkXSpring.set(chunkTarget.x);
                            chunkYSpring.set(chunkTarget.y);
                            chunkZSpring.set(chunkTarget.z);
                        }
                    } else if (name === "EarthFull" && chunk.visible) {
                        child.visible = false;
                    } else {
                        child.visible = true;
                    }
                } else if (isHidden && !isVisible) {
                    if (name === "Atmosphere") {
                        opacitySpring.set(0);
                    } else if (name === "Chunk") {
                        const chunkTarget1 = new three__WEBPACK_IMPORTED_MODULE_17__.Vector3(0, 0, 0);
                        if (isEqualPosition(chunkTarget1, chunk.position)) {
                            child.visible = false;
                        }
                        chunkXSpring.set(chunkTarget1.x);
                        chunkYSpring.set(chunkTarget1.y);
                        chunkZSpring.set(chunkTarget1.z);
                    } else if (name === "EarthPartial" && chunk.visible) {
                        child.visible = true;
                    } else {
                        child.visible = false;
                    }
                }
            });
        };
        const updateAnimation = (index)=>{
            const sectionAnimations = sectionRefs.current[index].animations;
            if (reduceMotion) return;
            animations.current.forEach((clip, index)=>{
                if (!sectionAnimations.find((section)=>section.includes(index.toString()))) {
                    const animation = mixer.current.clipAction(clip);
                    animation.reset().stop();
                }
            });
            if (animations.current.length && sectionRefs.current[index].animations) {
                sectionAnimations.forEach((animItem)=>{
                    const values = animItem.split(":");
                    const clip = animations.current[Number(values[0])];
                    const animation = mixer.current.clipAction(clip);
                    if (!values[1] || values[1] !== "loop") {
                        animation.clampWhenFinished = true;
                        animation.loop = three__WEBPACK_IMPORTED_MODULE_17__.LoopOnce;
                    }
                    animation.play();
                });
            }
        };
        const updateLabels = (index)=>{
            labelElements.current.forEach((label)=>{
                if (label.hidden) {
                    label.element.dataset.hidden = true;
                    label.element.setAttribute("aria-hidden", true);
                }
            });
            const sectionLabels = sectionRefs.current[index].labels;
            sectionLabels.forEach((label)=>{
                const matches = labelElements.current.filter((item)=>item.text === label);
                matches.forEach((match)=>{
                    match.element.dataset.hidden = false;
                    match.element.setAttribute("aria-hidden", false);
                });
            });
        };
        const update = ()=>{
            const sectionCount = sectionRefs.current.length - 1;
            const absoluteSection = Math.floor(currentScrollY / innerHeight);
            const currentSectionIndex = (0,utils_clamp__WEBPACK_IMPORTED_MODULE_21__/* .clamp */ .u)(absoluteSection, 0, sectionCount);
            const currentSection = sectionRefs.current[currentSectionIndex];
            const nextSection = sectionRefs.current[currentSectionIndex + 1];
            const currentTarget = getPositionValues(currentSection) || nullTarget;
            const nextTarget = getPositionValues(nextSection) || nullTarget;
            const sectionScrolled = (currentScrollY - innerHeight * currentSectionIndex) / innerHeight;
            const scrollPercent = (0,utils_clamp__WEBPACK_IMPORTED_MODULE_21__/* .clamp */ .u)(sectionScrolled, 0, 1);
            const currentX = interpolatePosition(currentTarget.x, nextTarget.x, scrollPercent);
            const currentY = interpolatePosition(currentTarget.y, nextTarget.y, scrollPercent);
            const currentZ = interpolatePosition(currentTarget.z, nextTarget.z, scrollPercent);
            if (prevTarget !== currentTarget && sectionRefs.current.length && currentSection) {
                updateMeshes(currentSectionIndex);
                updateAnimation(currentSectionIndex);
                updateLabels(currentSectionIndex);
            }
            prevTarget = currentTarget;
            if (grabbing) return;
            if (reduceMotion) {
                camera.current.position.set(currentX, currentY, currentZ);
                return;
            }
            cameraXSpring.set(currentX);
            cameraYSpring.set(currentY);
            cameraZSpring.set(currentZ);
        };
        requestAnimationFrame(update);
    }, [
        cameraXSpring,
        cameraYSpring,
        cameraZSpring,
        chunkXSpring,
        chunkYSpring,
        chunkZSpring,
        grabbing,
        hideMeshes,
        opacitySpring,
        reduceMotion, 
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        const throttledScroll = (0,utils_throttle__WEBPACK_IMPORTED_MODULE_22__/* .throttle */ .P)(handleScroll, 100);
        if (loaded && inViewport) {
            window.addEventListener("scroll", throttledScroll);
        }
        return ()=>{
            window.removeEventListener("scroll", throttledScroll);
        };
    }, [
        handleScroll,
        inViewport,
        loaded,
        opacitySpring
    ]);
    const registerSection = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)((section)=>{
        sectionRefs.current = [
            ...sectionRefs.current,
            section
        ];
    }, []);
    const unregisterSection = (0,react__WEBPACK_IMPORTED_MODULE_15__.useCallback)((section)=>{
        sectionRefs.current = sectionRefs.current.filter((item)=>item !== section);
    }, []);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(EarthContext.Provider, {
        value: {
            registerSection,
            unregisterSection
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: (0,utils_style__WEBPACK_IMPORTED_MODULE_18__/* .classes */ .Sh)((_Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default().earth), className),
            ref: container,
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default().viewport),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("canvas", {
                            className: (_Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default().canvas),
                            "data-visible": loaded && visible,
                            "data-grabbing": grabbing,
                            ref: canvas
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default().labels),
                            "aria-live": "polite",
                            ref: labelContainer
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default().vignette)
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default().sections),
                    children: children
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Transition__WEBPACK_IMPORTED_MODULE_12__/* .Transition */ .u, {
                    unmount: true,
                    in: !loaded && loaderVisible,
                    timeout: (0,utils_style__WEBPACK_IMPORTED_MODULE_18__/* .msToNum */ .zG)(components_ThemeProvider_theme__WEBPACK_IMPORTED_MODULE_11__/* .tokens.base.durationL */ .T.base.durationL),
                    children: (visible)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Section__WEBPACK_IMPORTED_MODULE_10__/* .Section */ .$, {
                            className: (_Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default().loader),
                            "data-visible": visible,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(components_Loader__WEBPACK_IMPORTED_MODULE_9__/* .Loader */ .a, {})
                        })
                })
            ]
        })
    });
};
const EarthSection = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_15__.memo)(({ children , scrim , scrimReverse , className , camera =[
    0,
    0,
    0
] , animations =[] , meshes =[] , labels =[] ,  })=>{
    const { registerSection , unregisterSection  } = (0,react__WEBPACK_IMPORTED_MODULE_15__.useContext)(EarthContext);
    const sectionRef = (0,react__WEBPACK_IMPORTED_MODULE_15__.useRef)();
    const stringifiedDeps = JSON.stringify(animations) + JSON.stringify(camera) + JSON.stringify(labels) + JSON.stringify(meshes);
    (0,react__WEBPACK_IMPORTED_MODULE_15__.useEffect)(()=>{
        const section = {
            camera,
            animations,
            meshes,
            labels,
            sectionRef
        };
        registerSection(section);
        return ()=>{
            unregisterSection(section);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        stringifiedDeps,
        registerSection,
        unregisterSection
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,utils_style__WEBPACK_IMPORTED_MODULE_18__/* .classes */ .Sh)((_Earth_module_css__WEBPACK_IMPORTED_MODULE_20___default().section), className),
        "data-scrim": scrim,
        "data-scrim-reverse": scrimReverse,
        ref: sectionRef,
        children: children
    });
});

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

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

/***/ 9552:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ throttle)
/* harmony export */ });
function throttle(func, timeFrame) {
    let lastTime = 0;
    return function(...args) {
        const now = new Date();
        if (now - lastTime >= timeFrame) {
            func(...args);
            lastTime = now;
        }
    };
}


/***/ }),

/***/ 4843:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/earth.510551ea.glb";

/***/ }),

/***/ 1850:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/milkyway-nx.0e972b21.hdr";

/***/ }),

/***/ 2026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/milkyway-ny.006459f3.hdr";

/***/ }),

/***/ 3374:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/milkyway-nz.5f35d5a4.hdr";

/***/ }),

/***/ 5535:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/milkyway-px.2922755b.hdr";

/***/ }),

/***/ 7898:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/milkyway-py.7aeec30d.hdr";

/***/ }),

/***/ 7673:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "static/media/milkyway-pz.0ef64b21.hdr";

/***/ })

};
;