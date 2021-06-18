import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Input, Button } from './index';

export default {
  title: 'Atoms/FormInputs',
} as Meta;


export const InputStory: Story<{ placeholder: string }> = (props) => <Input {...props} />;
InputStory.storyName = 'Input';
InputStory.args = {
  placeholder: 'User name',
};

export const ButtonStory: Story<{ name: string }> = ({ name }) => <Button value={name} />;
ButtonStory.storyName = 'Button';
ButtonStory.args = {
  name: 'Login',
};