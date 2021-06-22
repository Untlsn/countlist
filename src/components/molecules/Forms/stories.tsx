import React from 'react';
import { Meta } from '@storybook/react';
import { SingUpForm, LoginForm }  from './index';

export default {
  title: 'Molecules/Forms',
} as Meta;

export const Login = () => <LoginForm onSubmit={() => {}} />;

export const SingUp = () => <SingUpForm />;
