import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@store';
import { FaSun, FaMoon } from 'react-icons/fa';
import { IconBaseProps } from 'react-icons';

const SwitchTheme = (props: Omit<IconBaseProps, 'onClick'> ) => {
  const dispatch = useDispatch();
  const switchTheme = () => dispatch(actions.mini.switchTheme());
  const isDark = useSelector(({ mini }) => mini.isDark);
  
  return isDark
    ? <FaMoon {...props} onClick={switchTheme} />
    : <FaSun {...props} onClick={switchTheme} />;
};

export default SwitchTheme;