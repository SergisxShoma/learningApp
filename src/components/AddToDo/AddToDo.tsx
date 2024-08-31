import { useForm, FormProvider } from 'react-hook-form';
import { Input } from '@alfalab/core-components/input';

import style from './AddToDo.module.scss';

import AddToDoBtn from '../../ui/AddToDoBtn';

const AddToDo = () => {
  const form = useForm();
  const addNewToDo = () => {};
  //TODO добавить логику работу инпута и кнопки добавить
  return (
    <div className={style.container}>
      <FormProvider {...form}>
        <Input />
        <AddToDoBtn onClickHandle={addNewToDo} />
      </FormProvider>
    </div>
  );
};
export default AddToDo;
