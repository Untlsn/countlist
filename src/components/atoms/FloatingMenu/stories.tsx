import React from 'react';
import { Meta } from '@storybook/react';
import FloatingMenu  from './index';
import { AiFillHome, BsPersonFill, ImConnection } from 'react-icons/all';


export default {
  title: 'Atoms/FloatingMenu',
} as Meta;


export const Default = () => {
  return (
    <FloatingMenu
      icons={[
        AiFillHome,
        BsPersonFill,
        ImConnection,
      ]}
      text={[
        'home',
        'person',
        'connection',
      ]}
      actions={[
        () => alert('home'),
        () => alert('person'),
        () => alert('connection'),
      ]} />
  );
};