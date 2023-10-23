import Task from './Task';
import TodoList from './TodoList';

function Project(initialValues) {
  return {
    ...Task({ title: initialValues.title }),
    ...TodoList(),
  };
}

export default Project;
