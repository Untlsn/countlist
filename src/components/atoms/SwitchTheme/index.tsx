import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actions } from '@store';
import { FiSun, FiMoon } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons';

const SwitchTheme = (props: Omit<IconBaseProps, 'onClick'> ) => {
  const dispatch = useDispatch();
  const switchTheme = () => dispatch(actions.mini.switchTheme());
  const isDark = useSelector(({ mini }) => mini.isDark);
  
  return isDark
    ? <FiMoon {...props} onClick={switchTheme} />
    : <FiSun {...props} onClick={switchTheme} />;
};

export default SwitchTheme;