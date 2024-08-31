import { useForm, Controller } from 'react-hook-form';
import { Input } from '@alfalab/core-components/input';

import style from './AddToDo.module.scss';
import {
  withoutLatin,
  removeDuplicateSpaces,
  changeRegisterCapitalize,
} from '../../tools/validate';

import AddToDoBtn from '../../ui/PrimaryBtn';
import { toDoListActions } from '../../redux/toDoList-reducer';
import { useAppDispatch } from '../../redux/store';

type UseFormType = { todo: string };

const AddToDo = () => {
  const form = useForm<UseFormType>();
  const dispatch = useAppDispatch();

  const addNewToDo = form.handleSubmit(data => {
    dispatch(toDoListActions.addTodo({ title: data.todo, isCompleted: false }));
    form.reset({ todo: '' });
  });

  const prepareValue = (value: string) => {
    formattingThunks.forEach(mutation => {
      value = mutation(value);
    });

    return value;
  };

  return (
    <div className={style.container}>
      <Controller
        name="todo"
        control={form.control}
        rules={{ required: 'Поле не должно быть пустым' }}
        render={({ field, fieldState }) => {
          return (
            <Input
              {...field}
              error={fieldState.error?.message}
              onChange={e => {
                const value = prepareValue(e.target.value);
                field.onChange(value);
              }}
            />
          );
        }}
      />

      <AddToDoBtn
        title="Добавить"
        onClickHandle={addNewToDo}
        disabled={!form.formState.isValid}
      />
    </div>
  );
};
export default AddToDo;

const formattingThunks = [withoutLatin, removeDuplicateSpaces, changeRegisterCapitalize];
