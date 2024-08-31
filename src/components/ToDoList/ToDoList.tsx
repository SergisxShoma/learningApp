import style from './ToDoList.module.scss';

import AddToDo from '../AddToDo/AddToDo';
import ToDo from '../ToDo';
import { useAppSelector } from '../../redux/store';

const ToDoList = () => {
  const toDoList = useAppSelector(state => state.todoList.toDoList);

  return (
    <div className={style.container}>
      <AddToDo />
      {toDoList.map(todo => (
        <ToDo {...todo} />
      ))}
    </div>
  );
};

export default ToDoList;
