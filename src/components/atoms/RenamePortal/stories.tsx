import React, { useState } from 'react';
import type { Meta, Story } from '@storybook/react';
import RenamePortal, { RenamePortalProps } from './index';

export default {
  title: 'Atoms/RenamePortal',
} as Meta;


export const Default: Story<RenamePortalProps> = (props) => {
  const [value, setValue] = useState(props.value);

  return (
    <>
      <RenamePortal value={value} onChange={setValue} onClose={() => alert('portal will close')} />
      <div>Value change by portal: {value}</div>
    </>
  );
};

Default.args = {
  value: '',
};