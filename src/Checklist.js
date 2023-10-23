import Done from './Done';
import TaskGroup from './TaskGroup';

function Checklist() {
  return {
    ...Done(),

    ...TaskGroup(),
  };
}

export default Checklist;
