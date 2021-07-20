import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from './style';
import { FormProps } from '@molecules/Forms/types';
import { createRule } from '@molecules/Forms/helpers';
import { LoginBody } from '~/types/api-types';

const LoginForm = ({ onSubmit }: FormProps<LoginBody>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginBody>();

  const messages = {
    term: errors.term?.message,
    password: errors.password?.message,
  };


  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <S.Input
          placeholder='Email/Login'
          {...register('term', {
            required: createRule(true, 'Login cannot be empty'),
            minLength: createRule(5, 'Login is too short'),
          })} />
        <S.ErrorPop>{messages.term}</S.ErrorPop>
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