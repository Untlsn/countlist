import React from 'react';
import { Meta, Story } from '@storybook/react';
import LoginForm  from './index';
import * as R from 'ramda';

export default {
  title: 'Molecules/Form',
} as Meta;


export const Default: Story<{ template: string[] }> = ({ template }) => {
  return <LoginForm template={template} onSubmit={R.pipe(JSON.stringify, alert)} />;
};
Default.args = {
  template: [
    'User name',
    'Password',
  ],
};
