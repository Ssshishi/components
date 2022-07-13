import React from 'react';
import { Component } from './styled';

interface Props {
  size: number;
  background?: string;
}

const Index: React.FC<Props> = (props) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Component {...props} />
);
export default Index;
