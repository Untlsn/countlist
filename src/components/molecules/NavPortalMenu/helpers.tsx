import React from 'react';
import * as S from '~/components/molecules/NavPortalMenu/style';
import { BsFillTrashFill, CgRename } from 'react-icons/all';

const icons = [
  <BsFillTrashFill key='trash' />,
  <CgRename key='rename' />,
];
const texts = [
  'remove',
  'rename',
];

export const createPoints = (showConfirmation: () => void, showRename: () => void) => {
  const events = [
    showConfirmation,
    showRename,
  ];

  return texts.map(
    (text, i) => (
      <S.Points onClick={events[i]} key={text}>
        <S.Icon>{icons[i]}</S.Icon>
        <span>{text}</span>
      </S.Points>
    ),
  );
};