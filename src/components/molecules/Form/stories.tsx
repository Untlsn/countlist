import React from 'react';
import { Meta, Story } from '@storybook/react';
import Form, { FormProps }  from './index';
import * as R from 'ramda';

export default {
  title: 'Molecules/Form',
} as Meta;


const Default: Story<FormProps> = (props) => {
  return <Form {...props} onSubmit={R.pipe(JSON.stringify, alert)} />;
};

export const Login = Default.bind({});
Login.args = {
  template: [
    'User name',
    'Password',
  ],
  buttonText: 'Login',
};


export const SingUp = Default.bind({});
SingUp.args = {
  template: [
    'User name',
    'E-main',
    'Password',
    'Confirm Password',
  ],
  buttonText: 'Sing Up',
};
