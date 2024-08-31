import { Button } from '@alfalab/core-components/button';
import { FC } from 'react';

interface AddToDoProps {
  onClickHandle: () => void;
}

const AddToDoBtn: FC<AddToDoProps> = ({ onClickHandle }) => {
  return (
    <>
      <Button onClick={onClickHandle} view="primary" size={'s'}>
        Добавить
      </Button>
    </>
  );
};
export default AddToDoBtn;
