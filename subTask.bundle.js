"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["subTask"],{

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


/***/ }),

/***/ "./src/SubTask.js":
/*!************************!*\
  !*** ./src/SubTask.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Done__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Done */ "./src/Done.js");


function SubTask(initialValues) {
  const privateScope = {
    title: initialValues.title,
  };

  return {
    ...(0,_Done__WEBPACK_IMPORTED_MODULE_0__["default"])(),

    getTitle() {
      return privateScope.title;
    },
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SubTask);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/SubTask.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3ViVGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCTTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLGlEQUFJOztBQUVYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9Eb25lLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL1N1YlRhc2suanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gRG9uZSgpIHtcbiAgY29uc3QgcHJpdmF0ZVNjb3BlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNEb25lKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5kb25lO1xuICAgIH0sXG5cbiAgICByZWdpc3RlckNvbXBsZXRpb24oKSB7XG4gICAgICBwcml2YXRlU2NvcGUuZG9uZSA9IHRydWU7XG4gICAgfSxcblxuICAgIHVucmVnaXN0ZXJDb21wbGV0aW9uKCkge1xuICAgICAgcHJpdmF0ZVNjb3BlLmRvbmUgPSBmYWxzZTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEb25lO1xuIiwiaW1wb3J0IERvbmUgZnJvbSAnLi9Eb25lJztcblxuZnVuY3Rpb24gU3ViVGFzayhpbml0aWFsVmFsdWVzKSB7XG4gIGNvbnN0IHByaXZhdGVTY29wZSA9IHtcbiAgICB0aXRsZTogaW5pdGlhbFZhbHVlcy50aXRsZSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLkRvbmUoKSxcblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS50aXRsZTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJUYXNrO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9