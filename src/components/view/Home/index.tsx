import React, { useState } from 'react';
import * as S from './style';
import Options from '@organisms/Options';
import MainPage from '@organisms/MainPage';

const Home = () => {
  const [selected, changeSelected] = useState('');

  return (
    <S.Wrapper rightColumn={true}>
      <Options selected={selected} changeSelected={changeSelected} />
      <MainPage listID={selected || '(no-name)@000'} />
    </S.Wrapper>
  );
};

export default Home;