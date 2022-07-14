import React from 'react';
import { Resizable } from 're-resizable';

const style = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: 'solid 1px #ddd',
  background: '#f0f0f0',
} as const;

const Index: React.FC = (props) => {
  return (
    <Resizable
      style={style}
      defaultSize={{
        width: 200,
        height: 200,
      }}
    >
      {props.children}
    </Resizable>
  );
};

export default Index;
