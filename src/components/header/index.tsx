import React, { ReactNode } from 'react';
import { history } from 'umi';
import { WhiteSpace } from '@/components';
import { NavBar, BreakLine } from './styled';

interface NavBarProps {
  leftContent?: string | ReactNode;
  rightContent?: string | ReactNode;
  icon?: (ReactNode & JSX.Element) | undefined;
  onLeftClick?: () => void;
}

const Header: React.FC<NavBarProps> = (props) => {
  const onLeft = () => {
    if (typeof props.onLeftClick === 'function') {
      props.onLeftClick();
    } else {
      history.goBack();
    }
  };
  return (
    <>
      <NavBar left={props.leftContent} right={props.rightContent} icon={props.icon} onBack={onLeft}>
        {props.children}
        <BreakLine />
      </NavBar>
      <WhiteSpace size={45} />
    </>
  );
};

export default Header;
