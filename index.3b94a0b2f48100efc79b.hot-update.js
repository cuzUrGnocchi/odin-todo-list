"use strict";
self["webpackHotUpdateodin_todo_list"]("index",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/Task.js");



const task1 = (0,_Task__WEBPACK_IMPORTED_MODULE_1__["default"])({ title: 'Clean toaster' });
const task2 = (0,_Task__WEBPACK_IMPORTED_MODULE_1__["default"])({ title: "Jump over neighbour's house" });

const project = (0,_Project__WEBPACK_IMPORTED_MODULE_0__["default"])({ title: 'Verhandi' });
project.addTask(task1);
project.addTask(task2);

console.log(project.getTask(0));
console.log(project.getTask(1));
console.log(project.isDone());

project.registerTaskCompletion(0);

console.log(project.getTask(0));
console.log(project.getTask(1));
console.log(project.isDone());

project.registerTaskCompletion(1);

console.log(project.getTask(0));
console.log(project.getTask(1));
console.log(project.isDone());

console.log(project.getTitle());


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguM2I5NGEwYjJmNDgxMDBlZmM3OWIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTjs7QUFFMUIsY0FBYyxpREFBSSxHQUFHLHdCQUF3QjtBQUM3QyxjQUFjLGlEQUFJLEdBQUcsc0NBQXNDOztBQUUzRCxnQkFBZ0Isb0RBQU8sR0FBRyxtQkFBbUI7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9qZWN0IGZyb20gJy4vUHJvamVjdCc7XG5pbXBvcnQgVGFzayBmcm9tICcuL1Rhc2snO1xuXG5jb25zdCB0YXNrMSA9IFRhc2soeyB0aXRsZTogJ0NsZWFuIHRvYXN0ZXInIH0pO1xuY29uc3QgdGFzazIgPSBUYXNrKHsgdGl0bGU6IFwiSnVtcCBvdmVyIG5laWdoYm91cidzIGhvdXNlXCIgfSk7XG5cbmNvbnN0IHByb2plY3QgPSBQcm9qZWN0KHsgdGl0bGU6ICdWZXJoYW5kaScgfSk7XG5wcm9qZWN0LmFkZFRhc2sodGFzazEpO1xucHJvamVjdC5hZGRUYXNrKHRhc2syKTtcblxuY29uc29sZS5sb2cocHJvamVjdC5nZXRUYXNrKDApKTtcbmNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFzaygxKSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0LmlzRG9uZSgpKTtcblxucHJvamVjdC5yZWdpc3RlclRhc2tDb21wbGV0aW9uKDApO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2soMCkpO1xuY29uc29sZS5sb2cocHJvamVjdC5nZXRUYXNrKDEpKTtcbmNvbnNvbGUubG9nKHByb2plY3QuaXNEb25lKCkpO1xuXG5wcm9qZWN0LnJlZ2lzdGVyVGFza0NvbXBsZXRpb24oMSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFzaygwKSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2soMSkpO1xuY29uc29sZS5sb2cocHJvamVjdC5pc0RvbmUoKSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGl0bGUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=