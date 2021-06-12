import React, { useState } from 'react';
import * as S from './style';
import Options from '@organisms/Options';
import MainPage from '@organisms/MainPage';
import PointOptions from '@organisms/PointOptions';
import { useSelector } from 'react-redux';

const Home = () => {
  const [selected, changeSelected] = useState('');
  const point = useSelector(
    ({ mini }) => mini.usedPoint,
  );

  return (
    <S.Wrapper rightColumn={true}>
      <Options selected={selected} changeSelected={changeSelected} />
      <MainPage listID={selected || '(no-name)@000'} />
      {point && <PointOptions {...point} />}
    </S.Wrapper>
  );
};

export default Home;