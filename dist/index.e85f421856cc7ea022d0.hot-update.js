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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTg1ZjQyMTg1NmNjN2VhMDIyZDAuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTjs7QUFFMUIsY0FBYyxpREFBSSxHQUFHLHdCQUF3QjtBQUM3QyxjQUFjLGlEQUFJLEdBQUcsc0NBQXNDOztBQUUzRCxnQkFBZ0Isb0RBQU8sR0FBRyxtQkFBbUI7QUFDN0M7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcblxuY29uc3QgdGFzazEgPSBUYXNrKHsgdGl0bGU6ICdDbGVhbiB0b2FzdGVyJyB9KTtcbmNvbnN0IHRhc2syID0gVGFzayh7IHRpdGxlOiBcIkp1bXAgb3ZlciBuZWlnaGJvdXIncyBob3VzZVwiIH0pO1xuXG5jb25zdCBwcm9qZWN0ID0gUHJvamVjdCh7IHRpdGxlOiAnVmVyaGFuZGknIH0pO1xucHJvamVjdC5hZGRUYXNrKHRhc2sxKTtcbnByb2plY3QuYWRkVGFzayh0YXNrMik7XG5cbmNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFzaygwKSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2soMSkpO1xuY29uc29sZS5sb2cocHJvamVjdC5pc0RvbmUoKSk7XG5cblxucHJvamVjdC5yZWdpc3RlclRhc2tDb21wbGV0aW9uKDApO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2soMCkpO1xuY29uc29sZS5sb2cocHJvamVjdC5nZXRUYXNrKDEpKTtcbmNvbnNvbGUubG9nKHByb2plY3QuaXNEb25lKCkpO1xuXG5wcm9qZWN0LnJlZ2lzdGVyVGFza0NvbXBsZXRpb24oMSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGFzaygwKSk7XG5jb25zb2xlLmxvZyhwcm9qZWN0LmdldFRhc2soMSkpO1xuY29uc29sZS5sb2cocHJvamVjdC5pc0RvbmUoKSk7XG5cbmNvbnNvbGUubG9nKHByb2plY3QuZ2V0VGl0bGUoKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=