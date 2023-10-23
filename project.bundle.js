"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["project"],{

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

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Task */ "./src/Task.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoList */ "./src/TodoList.js");



function Project(initialValues) {
  return {
    ...(0,_Task__WEBPACK_IMPORTED_MODULE_0__["default"])({ title: initialValues.title }),
    ...(0,_TodoList__WEBPACK_IMPORTED_MODULE_1__["default"])(),
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);


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


/***/ }),

/***/ "./src/TodoList.js":
/*!*************************!*\
  !*** ./src/TodoList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function TodoList(initialValues = { items: [] }) {
  const privateScope = {
    items: initialValues.items,
  };

  return {
    addItem(item) {
      privateScope.items.push(item);
    },

    deleteItem(i) {
      privateScope.items.splice(i, i);
    },

    getItems() {
      return privateScope.items;
    },

    getItem(i) {
      return privateScope.items[i];
    },

    isDone() {
      return privateScope.items.every((task) => task.isDone());
    },
  };
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoList);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/Project.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQk07QUFDUTs7QUFFbEM7QUFDQTtBQUNBLE9BQU8saURBQUksR0FBRyw0QkFBNEI7QUFDMUMsT0FBTyxxREFBUTtBQUNmO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVkc7O0FBRTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTyxpREFBSTs7QUFFWDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsT0FBTyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJTOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8sb0RBQU8sR0FBRyw0QkFBNEI7O0FBRTdDO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQy9DcEIsb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL0RvbmUuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvUHJvamVjdC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9TdWJUYXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL1Rhc2suanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvVG9kb0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gRG9uZSgpIHtcbiAgY29uc3QgcHJpdmF0ZVNjb3BlID0ge1xuICAgIGRvbmU6IGZhbHNlLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNEb25lKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5kb25lO1xuICAgIH0sXG5cbiAgICByZWdpc3RlckNvbXBsZXRpb24oKSB7XG4gICAgICBwcml2YXRlU2NvcGUuZG9uZSA9IHRydWU7XG4gICAgfSxcblxuICAgIHVucmVnaXN0ZXJDb21wbGV0aW9uKCkge1xuICAgICAgcHJpdmF0ZVNjb3BlLmRvbmUgPSBmYWxzZTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBEb25lO1xuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL1RvZG9MaXN0JztcblxuZnVuY3Rpb24gUHJvamVjdChpbml0aWFsVmFsdWVzKSB7XG4gIHJldHVybiB7XG4gICAgLi4uVGFzayh7IHRpdGxlOiBpbml0aWFsVmFsdWVzLnRpdGxlIH0pLFxuICAgIC4uLlRvZG9MaXN0KCksXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFByb2plY3Q7XG4iLCJpbXBvcnQgRG9uZSBmcm9tICcuL0RvbmUnO1xuXG5mdW5jdGlvbiBTdWJUYXNrKGluaXRpYWxWYWx1ZXMpIHtcbiAgY29uc3QgcHJpdmF0ZVNjb3BlID0ge1xuICAgIHRpdGxlOiBpbml0aWFsVmFsdWVzLnRpdGxlLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgLi4uRG9uZSgpLFxuXG4gICAgZ2V0VGl0bGUoKSB7XG4gICAgICByZXR1cm4gcHJpdmF0ZVNjb3BlLnRpdGxlO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFN1YlRhc2s7XG4iLCJpbXBvcnQgU3ViVGFzayBmcm9tICcuL1N1YlRhc2snO1xuXG5mdW5jdGlvbiBUYXNrKGluaXRpYWxWYWx1ZXMpIHtcbiAgY29uc3QgcHJpdmF0ZVNjb3BlID0ge1xuICAgIGR1ZURhdGU6IGluaXRpYWxWYWx1ZXMuZHVlRGF0ZSxcbiAgICBkZXNjcmlwdGlvbjogaW5pdGlhbFZhbHVlcy5kZXNjcmlwdGlvbixcbiAgICBwcmlvcml0eTogaW5pdGlhbFZhbHVlcy5wcmlvcml0eSxcbiAgICBub3RlczogaW5pdGlhbFZhbHVlcy5ub3RlcyxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLlN1YlRhc2soeyB0aXRsZTogaW5pdGlhbFZhbHVlcy50aXRsZSB9KSxcblxuICAgIGdldER1ZURhdGUoKSB7XG4gICAgICByZXR1cm4gcHJpdmF0ZVNjb3BlLmR1ZURhdGU7XG4gICAgfSxcblxuICAgIHNldER1ZURhdGUoZHVlRGF0ZSkge1xuICAgICAgcHJpdmF0ZVNjb3BlLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH0sXG5cbiAgICBnZXREZXNjcmlwdGlvbigpIHtcbiAgICAgIHJldHVybiBwcml2YXRlU2NvcGUuZGVzY3JpcHRpb247XG4gICAgfSxcblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICBwcml2YXRlU2NvcGUuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9LFxuXG4gICAgZ2V0UHJpb3JpdHkoKSB7XG4gICAgICByZXR1cm4gcHJpdmF0ZVNjb3BlLnByaW9yaXR5O1xuICAgIH0sXG5cbiAgICBzZXRQcmlvcml0eShwcmlvcml0eSkge1xuICAgICAgcHJpdmF0ZVNjb3BlLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfSxcblxuICAgIGdldE5vdGVzKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5ub3RlcztcbiAgICB9LFxuXG4gICAgc2V0Tm90ZXMobm90ZXMpIHtcbiAgICAgIHByaXZhdGVTY29wZS5ub3RlcyA9IG5vdGVzO1xuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRhc2s7XG4iLCJmdW5jdGlvbiBUb2RvTGlzdChpbml0aWFsVmFsdWVzID0geyBpdGVtczogW10gfSkge1xuICBjb25zdCBwcml2YXRlU2NvcGUgPSB7XG4gICAgaXRlbXM6IGluaXRpYWxWYWx1ZXMuaXRlbXMsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgIHByaXZhdGVTY29wZS5pdGVtcy5wdXNoKGl0ZW0pO1xuICAgIH0sXG5cbiAgICBkZWxldGVJdGVtKGkpIHtcbiAgICAgIHByaXZhdGVTY29wZS5pdGVtcy5zcGxpY2UoaSwgaSk7XG4gICAgfSxcblxuICAgIGdldEl0ZW1zKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5pdGVtcztcbiAgICB9LFxuXG4gICAgZ2V0SXRlbShpKSB7XG4gICAgICByZXR1cm4gcHJpdmF0ZVNjb3BlLml0ZW1zW2ldO1xuICAgIH0sXG5cbiAgICBpc0RvbmUoKSB7XG4gICAgICByZXR1cm4gcHJpdmF0ZVNjb3BlLml0ZW1zLmV2ZXJ5KCh0YXNrKSA9PiB0YXNrLmlzRG9uZSgpKTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdDtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==