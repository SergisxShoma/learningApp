import style from './ToDoList.module.scss';

import AddToDo from '../AddToDo/AddToDo';
import ToDo from '../ToDo';

const ToDoList = () => {
  return (
    <div className={style.container}>
      <AddToDo />
      <ToDo />
    </div>
  );
};

export default ToDoList;
