import SubTask from './SubTask';

function Task(initialValues) {
  const privateScope = {
    dueDate: initialValues.dueDate,
    description: initialValues.description,
    priority: initialValues.priority,
    notes: initialValues.notes,
  };

  return {
    ...SubTask({ title: initialValues.title }),

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

export default Task;
