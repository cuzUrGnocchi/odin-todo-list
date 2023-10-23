"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["index"],{

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


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoList */ "./src/TodoList.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ "./src/Task.js");




const todoList = (0,_TodoList__WEBPACK_IMPORTED_MODULE_0__["default"])();
const project = (0,_Project__WEBPACK_IMPORTED_MODULE_1__["default"])({ title: 'Verhandi' });
const task1 = (0,_Task__WEBPACK_IMPORTED_MODULE_2__["default"])({ title: 'Clean toaster' });
const task2 = (0,_Task__WEBPACK_IMPORTED_MODULE_2__["default"])({ title: "Jump over neighbour's house" });

todoList.addItem(project);
project.addItem(task1);
project.addItem(task2);

console.log(project.getItem(0).isDone());
console.log(project.getItem(1).isDone());
console.log(todoList.isDone());

project.getItem(0).registerCompletion();

console.log(project.getItem(0).isDone());
console.log(project.getItem(1).isDone());
console.log(todoList.isDone());

project.getItem(1).registerCompletion();

console.log(project.getItem(0).isDone());
console.log(project.getItem(1).isDone());
console.log(todoList.isDone());

console.log(project.getTitle());


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxJQUFJLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEJNO0FBQ1E7O0FBRWxDO0FBQ0E7QUFDQSxPQUFPLGlEQUFJLEdBQUcsNEJBQTRCO0FBQzFDLE9BQU8scURBQVE7QUFDZjtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZHOztBQUUxQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU8saURBQUk7O0FBRVg7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBLGlFQUFlLE9BQU8sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCUzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPLG9EQUFPLEdBQUcsNEJBQTRCOztBQUU3QztBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUMvQ3BCLG9DQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzVCVTtBQUNGO0FBQ047O0FBRTFCLGlCQUFpQixxREFBUTtBQUN6QixnQkFBZ0Isb0RBQU8sR0FBRyxtQkFBbUI7QUFDN0MsY0FBYyxpREFBSSxHQUFHLHdCQUF3QjtBQUM3QyxjQUFjLGlEQUFJLEdBQUcsc0NBQXNDOztBQUUzRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9Eb25lLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvU3ViVGFzay5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9UYXNrLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL1RvZG9MaXN0LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIERvbmUoKSB7XG4gIGNvbnN0IHByaXZhdGVTY29wZSA9IHtcbiAgICBkb25lOiBmYWxzZSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGlzRG9uZSgpIHtcbiAgICAgIHJldHVybiBwcml2YXRlU2NvcGUuZG9uZTtcbiAgICB9LFxuXG4gICAgcmVnaXN0ZXJDb21wbGV0aW9uKCkge1xuICAgICAgcHJpdmF0ZVNjb3BlLmRvbmUgPSB0cnVlO1xuICAgIH0sXG5cbiAgICB1bnJlZ2lzdGVyQ29tcGxldGlvbigpIHtcbiAgICAgIHByaXZhdGVTY29wZS5kb25lID0gZmFsc2U7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgRG9uZTtcbiIsImltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9Ub2RvTGlzdCc7XG5cbmZ1bmN0aW9uIFByb2plY3QoaW5pdGlhbFZhbHVlcykge1xuICByZXR1cm4ge1xuICAgIC4uLlRhc2soeyB0aXRsZTogaW5pdGlhbFZhbHVlcy50aXRsZSB9KSxcbiAgICAuLi5Ub2RvTGlzdCgpLFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0O1xuIiwiaW1wb3J0IERvbmUgZnJvbSAnLi9Eb25lJztcblxuZnVuY3Rpb24gU3ViVGFzayhpbml0aWFsVmFsdWVzKSB7XG4gIGNvbnN0IHByaXZhdGVTY29wZSA9IHtcbiAgICB0aXRsZTogaW5pdGlhbFZhbHVlcy50aXRsZSxcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIC4uLkRvbmUoKSxcblxuICAgIGdldFRpdGxlKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS50aXRsZTtcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBTdWJUYXNrO1xuIiwiaW1wb3J0IFN1YlRhc2sgZnJvbSAnLi9TdWJUYXNrJztcblxuZnVuY3Rpb24gVGFzayhpbml0aWFsVmFsdWVzKSB7XG4gIGNvbnN0IHByaXZhdGVTY29wZSA9IHtcbiAgICBkdWVEYXRlOiBpbml0aWFsVmFsdWVzLmR1ZURhdGUsXG4gICAgZGVzY3JpcHRpb246IGluaXRpYWxWYWx1ZXMuZGVzY3JpcHRpb24sXG4gICAgcHJpb3JpdHk6IGluaXRpYWxWYWx1ZXMucHJpb3JpdHksXG4gICAgbm90ZXM6IGluaXRpYWxWYWx1ZXMubm90ZXMsXG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICAuLi5TdWJUYXNrKHsgdGl0bGU6IGluaXRpYWxWYWx1ZXMudGl0bGUgfSksXG5cbiAgICBnZXREdWVEYXRlKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5kdWVEYXRlO1xuICAgIH0sXG5cbiAgICBzZXREdWVEYXRlKGR1ZURhdGUpIHtcbiAgICAgIHByaXZhdGVTY29wZS5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICB9LFxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICByZXR1cm4gcHJpdmF0ZVNjb3BlLmRlc2NyaXB0aW9uO1xuICAgIH0sXG5cbiAgICBzZXREZXNjcmlwdGlvbihkZXNjcmlwdGlvbikge1xuICAgICAgcHJpdmF0ZVNjb3BlLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgfSxcblxuICAgIGdldFByaW9yaXR5KCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5wcmlvcml0eTtcbiAgICB9LFxuXG4gICAgc2V0UHJpb3JpdHkocHJpb3JpdHkpIHtcbiAgICAgIHByaXZhdGVTY29wZS5wcmlvcml0eSA9IHByaW9yaXR5O1xuICAgIH0sXG5cbiAgICBnZXROb3RlcygpIHtcbiAgICAgIHJldHVybiBwcml2YXRlU2NvcGUubm90ZXM7XG4gICAgfSxcblxuICAgIHNldE5vdGVzKG5vdGVzKSB7XG4gICAgICBwcml2YXRlU2NvcGUubm90ZXMgPSBub3RlcztcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBUYXNrO1xuIiwiZnVuY3Rpb24gVG9kb0xpc3QoaW5pdGlhbFZhbHVlcyA9IHsgaXRlbXM6IFtdIH0pIHtcbiAgY29uc3QgcHJpdmF0ZVNjb3BlID0ge1xuICAgIGl0ZW1zOiBpbml0aWFsVmFsdWVzLml0ZW1zLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICBwcml2YXRlU2NvcGUuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlSXRlbShpKSB7XG4gICAgICBwcml2YXRlU2NvcGUuaXRlbXMuc3BsaWNlKGksIGkpO1xuICAgIH0sXG5cbiAgICBnZXRJdGVtcygpIHtcbiAgICAgIHJldHVybiBwcml2YXRlU2NvcGUuaXRlbXM7XG4gICAgfSxcblxuICAgIGdldEl0ZW0oaSkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5pdGVtc1tpXTtcbiAgICB9LFxuXG4gICAgaXNEb25lKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5pdGVtcy5ldmVyeSgodGFzaykgPT4gdGFzay5pc0RvbmUoKSk7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iLCJpbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi9Ub2RvTGlzdCc7XG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcblxuY29uc3QgdG9kb0xpc3QgPSBUb2RvTGlzdCgpO1xuY29uc3QgcHJvamVjdCA9IFByb2plY3QoeyB0aXRsZTogJ1ZlcmhhbmRpJyB9KTtcbmNvbnN0IHRhc2sxID0gVGFzayh7IHRpdGxlOiAnQ2xlYW4gdG9hc3RlcicgfSk7XG5jb25zdCB0YXNrMiA9IFRhc2soeyB0aXRsZTogXCJKdW1wIG92ZXIgbmVpZ2hib3VyJ3MgaG91c2VcIiB9KTtcblxudG9kb0xpc3QuYWRkSXRlbShwcm9qZWN0KTtcbnByb2plY3QuYWRkSXRlbSh0YXNrMSk7XG5wcm9qZWN0LmFkZEl0ZW0odGFzazIpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldEl0ZW0oMCkuaXNEb25lKCkpO1xuY29uc29sZS5sb2cocHJvamVjdC5nZXRJdGVtKDEpLmlzRG9uZSgpKTtcbmNvbnNvbGUubG9nKHRvZG9MaXN0LmlzRG9uZSgpKTtcblxucHJvamVjdC5nZXRJdGVtKDApLnJlZ2lzdGVyQ29tcGxldGlvbigpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldEl0ZW0oMCkuaXNEb25lKCkpO1xuY29uc29sZS5sb2cocHJvamVjdC5nZXRJdGVtKDEpLmlzRG9uZSgpKTtcbmNvbnNvbGUubG9nKHRvZG9MaXN0LmlzRG9uZSgpKTtcblxucHJvamVjdC5nZXRJdGVtKDEpLnJlZ2lzdGVyQ29tcGxldGlvbigpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldEl0ZW0oMCkuaXNEb25lKCkpO1xuY29uc29sZS5sb2cocHJvamVjdC5nZXRJdGVtKDEpLmlzRG9uZSgpKTtcbmNvbnNvbGUubG9nKHRvZG9MaXN0LmlzRG9uZSgpKTtcblxuY29uc29sZS5sb2cocHJvamVjdC5nZXRUaXRsZSgpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==