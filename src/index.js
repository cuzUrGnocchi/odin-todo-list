import TodoList from './TodoList';
import Project from './Project';
import Task from './Task';

const todoList = TodoList();
const project = Project({ title: 'Verhandi' });
const task1 = Task({ title: 'Clean toaster' });
const task2 = Task({ title: "Jump over neighbour's house" });

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
