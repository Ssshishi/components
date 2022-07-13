import React from 'react';
import { Component, Core, Circle } from './styled';

interface Props {
  checked: boolean;
  disabled?: boolean;
  onBeforeChange?: () => Promise<void>;
  onChange?: (state: boolean) => void;
}

const Index: React.FC<Props> = (props) => {
  const onClick = () => {
    if (props.disabled) {
      return;
    }
    if (typeof props.onBeforeChange === 'function') {
      try {
        props
          .onBeforeChange()
          .then(() => {
            onChange();
          })
          .catch(() => {});
      } catch {}
    } else {
      onChange();
    }
  };

  const onChange = () => {
    if (props.checked) {
      props.onChange?.(false);
    } else {
      props.onChange?.(true);
    }
  };

  return (
    <Component onClick={onClick}>
      <Core disabled={props.disabled} checked={props.checked}>
        <Circle checked={props.checked} />
      </Core>
    </Component>
  );
};

export default Index;
