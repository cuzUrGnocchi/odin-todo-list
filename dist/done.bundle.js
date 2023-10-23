"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["done"],{

/***/ "./src/Done.js":
/*!*********************!*\
  !*** ./src/Done.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function Done() {
  const privateScope = {
    done: false,
  };

  return {
    isDone() {
      return privateScope.done;
    },

    registerCompletion() {
      privateScope.done = true;
    },

    unregisterCompletion() {
      privateScope.done = false;
    },
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Done);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Done.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9uZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL0RvbmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gRG9uZSgpIHtcbiAgY29uc3QgcHJpdmF0ZVNjb3BlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNEb25lKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5kb25lO1xuICAgIH0sXG5cbiAgICByZWdpc3RlckNvbXBsZXRpb24oKSB7XG4gICAgICBwcml2YXRlU2NvcGUuZG9uZSA9IHRydWU7XG4gICAgfSxcblxuICAgIHVucmVnaXN0ZXJDb21wbGV0aW9uKCkge1xuICAgICAgcHJpdmF0ZVNjb3BlLmRvbmUgPSBmYWxzZTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEb25lO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9