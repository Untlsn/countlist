import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from './style';
import { FormProps } from '@molecules/Forms/types';

interface LoginTemplate {
  username: string
  password: string
}

const LoginForm = ({ onSubmit }: FormProps<LoginTemplate>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginTemplate>();

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <S.Input
          placeholder='Username'
          {...register('username', {
            required: { value: true, message: 'Username cannot be empty' },
            minLength: { value: 5, message: 'Username is too short' },
          })} />
        <S.ErrorPop>{errors.username?.message}</S.ErrorPop>
      </div>
      <div>
        <S.Input
          placeholder='Password'
          type='password'
          {...register('password', {
            required: { value: true, message: 'Password cannot be empty' },
            minLength: { value: 8, message: 'Password is too short' },
          })}/>
        <S.ErrorPop>{errors.password?.message}</S.ErrorPop>
      </div>
      <S.Button value='Log In' />
    </S.Wrapper>
  );
};

export default LoginForm;