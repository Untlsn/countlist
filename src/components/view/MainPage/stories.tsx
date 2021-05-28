import React from 'react';
import { Meta, Story } from '@storybook/react';
import MainPage, { MainPageProps } from './index';

export default {
  title: 'View/MainPage',
} as Meta;


export const Default: Story<MainPageProps> = (props) => <MainPage {...props} />;
Default.args = {
  rows: 5,
  listName: 'List Name',
};