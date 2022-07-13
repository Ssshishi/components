import React from 'react';
import { match } from 'ts-pattern';
import { useSafeArea } from '@/hooks';
import { Component } from './styled';

interface Props {
  position: 'top' | 'bottom';
  min?: number;
}

const Index: React.FC<Props> = (props) => {
  const safeArea = useSafeArea();

  return match(props)
    .with(
      {
        position: 'top',
      },
      () => (
        <Component
          style={{
            height: `${Math.max(props.min ?? 0, safeArea.top)}px`,
          }}
        />
      ),
    )
    .with(
      {
        position: 'bottom',
      },
      () => (
        <Component
          style={{
            height: `${Math.max(props.min ?? 0, safeArea.bottom)}px`,
          }}
        />
      ),
    )
    .otherwise(() => <></>);
};

export default Index;
