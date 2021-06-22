import React from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';

interface SingUpTemplate {
  username: string
  password: string
  confirmPassword: string
  email: string
}

const SingUpForm = () => {
  const { register, handleSubmit } = useForm<SingUpTemplate>();

  return (
    <S.Wrapper onSubmit={handleSubmit(() => {})}>
      <S.Input
        placeholder='user name'
        {...register('username')} />
      <S.Input
        placeholder='password'
        type='password'
        {...register('password')} />
      <S.Button value='login' />
    </S.Wrapper>
  );
};

export default SingUpForm;

