"use strict";
(self["webpackChunkodin_todo_list"] = self["webpackChunkodin_todo_list"] || []).push([["todoList"],{

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
/******/ var __webpack_exports__ = (__webpack_exec__("./src/TodoList.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9kb0xpc3QuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUEsaUVBQWUsUUFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvVG9kb0xpc3QuanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gVG9kb0xpc3QoaW5pdGlhbFZhbHVlcyA9IHsgaXRlbXM6IFtdIH0pIHtcbiAgY29uc3QgcHJpdmF0ZVNjb3BlID0ge1xuICAgIGl0ZW1zOiBpbml0aWFsVmFsdWVzLml0ZW1zLFxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYWRkSXRlbShpdGVtKSB7XG4gICAgICBwcml2YXRlU2NvcGUuaXRlbXMucHVzaChpdGVtKTtcbiAgICB9LFxuXG4gICAgZGVsZXRlSXRlbShpKSB7XG4gICAgICBwcml2YXRlU2NvcGUuaXRlbXMuc3BsaWNlKGksIGkpO1xuICAgIH0sXG5cbiAgICBnZXRJdGVtcygpIHtcbiAgICAgIHJldHVybiBwcml2YXRlU2NvcGUuaXRlbXM7XG4gICAgfSxcblxuICAgIGdldEl0ZW0oaSkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5pdGVtc1tpXTtcbiAgICB9LFxuXG4gICAgaXNEb25lKCkge1xuICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5pdGVtcy5ldmVyeSgodGFzaykgPT4gdGFzay5pc0RvbmUoKSk7XG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3Q7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=