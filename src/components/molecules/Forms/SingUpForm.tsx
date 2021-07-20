import React from 'react';
import * as S from './style';
import { useForm } from 'react-hook-form';
import type { AddUserBody } from '~/types/api-types';
import { FormProps } from '@molecules/Forms/types';
import { createRule } from '@molecules/Forms/helpers';

interface SingUpTemplate {
  username: string
  password: string
  confirmPassword: string
  email: string
}

const emailPattern = /^[^@]+@[^@]+\.[^@]+$/;

const SingUpForm = ({ onSubmit }: FormProps<AddUserBody>) => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<SingUpTemplate>();

  const messages = {
    username: errors.username?.message,
    password: errors.password?.message,
    confirmPassword: errors.confirmPassword?.message,
    email: errors.email?.message,
  };

  return (
    <S.Wrapper onSubmit={handleSubmit(({ email, username, password }) => {
      onSubmit({
        name: username,
        email,
        password,
      });
    })}>
      <div>
        <S.Input
          placeholder='e-mail'
          {...register('email', {
            required: createRule(true, 'Email cannot be empty'),
            pattern: createRule(emailPattern, 'Email is invalid'),
          })} />
        <S.ErrorPop>{messages.email}</S.ErrorPop>
      </div>
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
          })} />
        <S.ErrorPop>{messages.password}</S.ErrorPop>
      </div>
      <div>
        <S.Input
          placeholder='Confirm Password'
          type='password'
          {...register('confirmPassword', {
            validate: (data) => data == watch('password') || 'Passwords is not same',
          })} />
        <S.ErrorPop>{messages.confirmPassword}</S.ErrorPop>
      </div>

      <S.Button value='Sing Up' />
    </S.Wrapper>
  );
};

export default SingUpForm;

