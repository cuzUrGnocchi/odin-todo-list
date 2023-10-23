function TaskGroup() {
  const privateScope = {
    tasks: [],
  };

  return {
    addTask(task) {
      privateScope.tasks.push(task);
    },

    getTask(i) {
      return privateScope.tasks[i];
    },

    registerTaskCompletion(i) {
      privateScope.tasks[i].done = true;
    },

    unregisterTaskCompletion(i) {
      privateScope.tasks[i].done = false;
    },

    isDone() {
      return privateScope.tasks.every((task) => task.done);
    },
  };
}

export default TaskGroup;
