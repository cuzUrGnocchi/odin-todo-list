"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["task"],{

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


/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SubTask__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubTask */ "./src/SubTask.js");


function Task(initialValues) {
  const privateScope = {
    dueDate: initialValues.dueDate,
    description: initialValues.description,
    priority: initialValues.priority,
    notes: initialValues.notes,
  };

  return {
    ...(0,_SubTask__WEBPACK_IMPORTED_MODULE_0__["default"])({ title: initialValues.title }),

    getDueDate() {
      return privateScope.dueDate;
    },

    setDueDate(dueDate) {
      privateScope.dueDate = dueDate;
    },

    getDescription() {
      return privateScope.description;
    },

    setDescription(description) {
      privateScope.description = description;
    },

    getPriority() {
      return privateScope.priority;
    },

    setPriority(priority) {
      privateScope.priority = priority;
    },

    getNotes() {
      return privateScope.notes;
    },

    setNotes(notes) {
      privateScope.notes = notes;
    },
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Task.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCTTs7QUFFMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLGlEQUFJOztBQUVYO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQlM7O0FBRWhDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxvREFBTyxHQUFHLDRCQUE0Qjs7QUFFN0M7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL0RvbmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvU3ViVGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9UYXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIERvbmUoKSB7XG4gIGNvbnN0IHByaXZhdGVTY29wZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzRG9uZSgpIHtcbiAgICAgIHJldHVybiBwcml2YXRlU2NvcGUuZG9uZTtcbiAgICB9LFxuXG4gICAgcmVnaXN0ZXJDb21wbGV0aW9uKCkge1xuICAgICAgcHJpdmF0ZVNjb3BlLmRvbmUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICB1bnJlZ2lzdGVyQ29tcGxldGlvbigpIHtcbiAgICAgIHByaXZhdGVTY29wZS5kb25lID0gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9uZTtcbiIsImltcG9ydCBEb25lIGZyb20gJy4vRG9uZSc7XG5cbmZ1bmN0aW9uIFN1YlRhc2soaW5pdGlhbFZhbHVlcykge1xuICBjb25zdCBwcml2YXRlU2NvcGUgPSB7XG4gICAgdGl0bGU6IGluaXRpYWxWYWx1ZXMudGl0bGUsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5Eb25lKCksXG5cbiAgICBnZXRUaXRsZSgpIHtcbiAgICAgIHJldHVybiBwcml2YXRlU2NvcGUudGl0bGU7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgU3ViVGFzaztcbiIsImltcG9ydCBTdWJUYXNrIGZyb20gJy4vU3ViVGFzayc7XG5cbmZ1bmN0aW9uIFRhc2soaW5pdGlhbFZhbHVlcykge1xuICBjb25zdCBwcml2YXRlU2NvcGUgPSB7XG4gICAgZHVlRGF0ZTogaW5pdGlhbFZhbHVlcy5kdWVEYXRlLFxuICAgIGRlc2NyaXB0aW9uOiBpbml0aWFsVmFsdWVzLmRlc2NyaXB0aW9uLFxuICAgIHByaW9yaXR5OiBpbml0aWFsVmFsdWVzLnByaW9yaXR5LFxuICAgIG5vdGVzOiBpbml0aWFsVmFsdWVzLm5vdGVzLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uU3ViVGFzayh7IHRpdGxlOiBpbml0aWFsVmFsdWVzLnRpdGxlIH0pLFxuXG4gICAgZ2V0RHVlRGF0ZSgpIHtcbiAgICAgIHJldHVybiBwcml2YXRlU2NvcGUuZHVlRGF0ZTtcbiAgICB9LFxuXG4gICAgc2V0RHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgICBwcml2YXRlU2NvcGUuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgfSxcblxuICAgIGdldERlc2NyaXB0aW9uKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5kZXNjcmlwdGlvbjtcbiAgICB9LFxuXG4gICAgc2V0RGVzY3JpcHRpb24oZGVzY3JpcHRpb24pIHtcbiAgICAgIHByaXZhdGVTY29wZS5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIH0sXG5cbiAgICBnZXRQcmlvcml0eSgpIHtcbiAgICAgIHJldHVybiBwcml2YXRlU2NvcGUucHJpb3JpdHk7XG4gICAgfSxcblxuICAgIHNldFByaW9yaXR5KHByaW9yaXR5KSB7XG4gICAgICBwcml2YXRlU2NvcGUucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9LFxuXG4gICAgZ2V0Tm90ZXMoKSB7XG4gICAgICByZXR1cm4gcHJpdmF0ZVNjb3BlLm5vdGVzO1xuICAgIH0sXG5cbiAgICBzZXROb3Rlcyhub3Rlcykge1xuICAgICAgcHJpdmF0ZVNjb3BlLm5vdGVzID0gbm90ZXM7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFzaztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==