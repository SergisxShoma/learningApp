import { Button as ButtonUi } from '@alfalab/core-components/button';
import { FC } from 'react';

interface AddToDoProps {
  title: string;
  onClickHandle: () => void;
  disabled?: boolean;
}

const Button: FC<AddToDoProps> = ({ onClickHandle, disabled, title }) => {
  return (
    <>
      <ButtonUi disabled={disabled} onClick={onClickHandle} view="primary" size={'s'}>
        {title}
      </ButtonUi>
    </>
  );
};
export default Button;
