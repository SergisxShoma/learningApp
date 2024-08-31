import { FC } from 'react';
import { ToDo as ToDoProps } from '../types/toDo';

const ToDo: FC<ToDoProps> = ({ title, isCompleted, description }) => {
  return (
    <div>
      <h3>{title}</h3>
    </div>
  );
};
export default ToDo;
