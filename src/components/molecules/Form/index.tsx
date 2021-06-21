import React from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import { FormProps } from './types';
import { save } from './helpers';

const Form = <T extends string>({ buttonText, template, onSubmit }: FormProps<T>) => {
  const { register, handleSubmit } = useForm();

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit as () => {})}>
      {template.map(
        (name) => <S.Input key={name} placeholder={name} {...register(save(name))} />,
      )}
      <S.Button value={buttonText} />
    </S.Wrapper>
  );
};

export default Form;
export type { FormProps } from './types';