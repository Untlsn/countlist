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

type BoolFn = (bool: boolean) => void

export const createPoints = (showConfirmationForce: BoolFn, showRenameForce: BoolFn) => {
  const events = [
    () => showConfirmationForce(true),
    () => showRenameForce(true),
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