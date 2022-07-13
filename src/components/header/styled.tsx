import styled from 'styled-components';
import { NavBar as TitleBar } from 'antd-mobile';

export const NavBar = styled(TitleBar).attrs(() => ({
  mode: 'light',
  icon: (
    <i className="bi bi-b-arrow-left" style={{ color: '#000', marginLeft: '9px', width: '2px' }} />
  ),
}))`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 999;
  height: 45px;
`;

export const BreakLine = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: #d7d7d7;
  transform: scaleY(0.3);
`;
