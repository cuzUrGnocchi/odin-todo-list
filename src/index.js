import Project from './Project';
import Task from './Task';

const task1 = Task({ title: 'Clean toaster' });
const task2 = Task({ title: "Jump over neighbour's house" });

const project = Project({ title: 'Verhandi' });
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
