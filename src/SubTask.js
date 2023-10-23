import Done from './Done';

function SubTask(initialValues) {
  const privateScope = {
    title: initialValues.title,
  };

  return {
    ...Done(),

    getTitle() {
      return privateScope.title;
    },
  };
}

export default SubTask;
