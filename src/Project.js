import Task from './Task';
import TaskGroup from './TaskGroup';

function Project(initialValues) {
  return {
    ...Task({ title: initialValues.title }),

    ...TaskGroup(),
  };
}

export default Project;
