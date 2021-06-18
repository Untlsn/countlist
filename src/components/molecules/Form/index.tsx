import React from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import { FormProps } from './types';
import { save } from './helpers';

const LoginForm = <T extends string>({ template, onSubmit }: FormProps<T>) => {
  const { register, handleSubmit } = useForm();

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit as () => {})}>
      {template.map(
        (name) => <S.Input key={name} placeholder={name} {...register(save(name))} />,
      )}
      <S.Button value='Login' />
    </S.Wrapper>
  );
};

export default LoginForm;