import React from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import * as R from 'ramda';
import { FormProps } from '@molecules/Forms/types';

interface SingUpTemplate {
  username: string
  password: string
  confirmPassword: string
  email: string
}

const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

const SingUpForm = ({ onSubmit }: FormProps<SingUpTemplate>) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SingUpTemplate>();

  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <S.Input
          placeholder='email'
          {...register('email', {
            required: { value: true, message: 'Email cannot be empty' },
            pattern: { value: emailPattern, message: 'Email is invalid' },
          })} />
        <S.ErrorPop>{errors.email?.message}</S.ErrorPop>
      </div>
      <div>
        <S.Input
          placeholder='username'
          {...register('username', {
            required: { value: true, message: 'Username cannot be empty' },
            minLength: { value: 5, message: 'Username is too short' },
          })} />
        <S.ErrorPop>{errors.username?.message}</S.ErrorPop>
      </div>
      <div>
        <S.Input
          placeholder='password'
          type='password'
          {...register('password', {
            required: { value: true, message: 'Password cannot be empty' },
            minLength: { value: 8, message: 'Password is too short' },
          })} />
        <S.ErrorPop>{errors.password?.message}</S.ErrorPop>
      </div>
      <div>
        <S.Input
          placeholder='confirm password'
          type='password'
          {...register('confirmPassword', {
            validate: R.ifElse(R.equals(watch('password')), R.always(true), R.always('Passwords is not same')),
          })} />
        <S.ErrorPop>{errors.confirmPassword?.message}</S.ErrorPop>
      </div>

      <S.Button value='Sing Up' />
    </S.Wrapper>
  );
};

export default SingUpForm;

