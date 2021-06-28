import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from './style';
import { FormProps } from '@molecules/Forms/types';
import { createRule } from '@molecules/Forms/helpers';

export interface LoginTemplate {
  username: string
  password: string
}

const LoginForm = ({ onSubmit }: FormProps<LoginTemplate>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginTemplate>();

  const messages = {
    username: errors.username?.message,
    password: errors.password?.message,
  };


  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <S.Input
          placeholder='Username'
          {...register('username', {
            required: createRule(true, 'Username cannot be empty'),
            minLength: createRule(5, 'Username is too short'),
          })} />
        <S.ErrorPop>{messages.username}</S.ErrorPop>
      </div>
      <div>
        <S.Input
          placeholder='Password'
          type='password'
          {...register('password', {
            required: createRule(true, 'Password cannot be empty'),
            minLength: createRule(8, 'Password is too short'),
          })}/>
        <S.ErrorPop>{messages.password}</S.ErrorPop>
      </div>
      <S.Button value='Log In' />
    </S.Wrapper>
  );
};

export default LoginForm;