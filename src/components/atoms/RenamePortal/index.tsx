import React from 'react';
import * as S from './style';
import { Portal } from 'react-portal';
import { RenamePortalProps } from '~/components/atoms/RenamePortal/types';
import { handleChange } from '~/helpers';

const RenamePortal = ({ value, onChange, onClose }: RenamePortalProps) => {
  return (
    <Portal>
      <S.Wrapper>
        <S.Input
          tabIndex={1}
          autoFocus={true}
          placeholder='List Name'
          value={value}
          onChange={handleChange(onChange)}
          onKeyDown={({ key }) => key == 'Enter' && onClose()} />
        <S.CloseButton onClick={onClose} />
      </S.Wrapper>
    </Portal>
  );
};

export default RenamePortal;
export type { RenamePortalProps } from './types.d';