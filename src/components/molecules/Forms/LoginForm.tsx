import React from 'react';
import { useForm } from 'react-hook-form';
import * as S from './style';
import { FormProps } from '@molecules/Forms/types';
import * as R from 'ramda';

interface LoginTemplate {
  username: string
  password: string
}

const LoginForm = ({ onSubmit }: FormProps<keyof LoginTemplate>) => {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginTemplate>();
  return (
    <S.Wrapper onSubmit={handleSubmit(onSubmit)}>
      <div>
        <S.Input
          placeholder='username'
          {...register('username', { required: true, minLength: 5 })} />
        <S.ErrorPop>{R.cond<any, string>([
          [R.equals('required'), R.always('Username cannot be empty')],
          [R.equals('minLength'), R.always('Username is too short')],
          [R.T, R.always('')],
        ])()}</S.ErrorPop>
      </div>
      <div>
        <S.Input
          placeholder='password'
          type='password'
          {...register('password', { required: true, minLength: 8 })}/>
        <S.ErrorPop>{R.cond<any, string>([
          [R.equals('required'), R.always('Password cannot be empty')],
          [R.equals('minLength'), R.always('Password is too short')],
          [R.T, R.always('')],
        ])(errors.password?.type)}</S.ErrorPop>
      </div>
      <S.Button value='login' />
    </S.Wrapper>
  );
};

export default LoginForm;