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

export default TodoList;
