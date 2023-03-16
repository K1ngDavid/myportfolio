"use strict";
exports.id = 142;
exports.ids = [142];
exports.modules = {

/***/ 3142:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Et": () => (/* binding */ textureLoader),
/* harmony export */   "Ji": () => (/* binding */ removeLights),
/* harmony export */   "Zf": () => (/* binding */ modelLoader),
/* harmony export */   "e8": () => (/* binding */ cleanRenderer),
/* harmony export */   "in": () => (/* binding */ cleanScene),
/* harmony export */   "x2": () => (/* binding */ getChild)
/* harmony export */ });
/* unused harmony export cleanMaterial */
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2949);
/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(886);
/* harmony import */ var three_stdlib__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(three_stdlib__WEBPACK_IMPORTED_MODULE_1__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([three__WEBPACK_IMPORTED_MODULE_0__]);
three__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


// Enable caching for all loaders
three__WEBPACK_IMPORTED_MODULE_0__.Cache.enabled = true;
const dracoLoader = new three_stdlib__WEBPACK_IMPORTED_MODULE_1__.DRACOLoader();
const gltfLoader = new three_stdlib__WEBPACK_IMPORTED_MODULE_1__.GLTFLoader();
dracoLoader.setDecoderPath("/draco/");
gltfLoader.setDRACOLoader(dracoLoader);
/**
 * GLTF model loader configured with draco decoder
 */ const modelLoader = gltfLoader;
const textureLoader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();
/**
 * Clean up a scene's materials and geometry
 */ const cleanScene = (scene)=>{
    scene?.traverse((object)=>{
        if (!object.isMesh) return;
        object.geometry.dispose();
        if (object.material.isMaterial) {
            cleanMaterial(object.material);
        } else {
            for (const material of object.material){
                cleanMaterial(material);
            }
        }
    });
};
/**
 * Clean up and dispose of a material
 */ const cleanMaterial = (material)=>{
    material.dispose();
    for (const key of Object.keys(material)){
        const value = material[key];
        if (value && typeof value === "object" && "minFilter" in value) {
            value.dispose();
            // Close GLTF bitmap textures
            value.source?.data?.close?.();
        }
    }
};
/**
 * Clean up and dispose of a renderer
 */ const cleanRenderer = (renderer)=>{
    renderer.dispose();
    renderer = null;
};
/**
 * Clean up lights by removing them from their parent
 */ const removeLights = (lights)=>{
    for (const light of lights){
        light.parent.remove(light);
    }
};
/**
 * Get child by name
 */ const getChild = (name, object)=>{
    let node;
    object.traverse((child)=>{
        if (child.name === name) {
            node = child;
        }
    });
    return node;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;