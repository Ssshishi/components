import styled from 'styled-components';

export const Component = styled.div``;

export const Core = styled.div<{ disabled?: boolean; checked: boolean }>`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 46px;
  border-radius: 46px;
  box-sizing: border-box;
  opacity: ${({ disabled }) => (disabled ? 0.35 : 1)};
  border: 1px solid ${({ checked }) => (checked ? '#5bae00' : '#e6e6e6')};
  background-color: ${({ checked }) => (checked ? '#5bae00' : '#fff')};
  &::before {
    content: '';
    position: absolute;
    transition: transform 0.3s;
    will-change: scale;
    border-radius: 46px;
    width: 80px;
    height: 46px;
    box-sizing: border-box;
    transform: ${({ checked }) => (checked ? 'scale(1)' : 'scale(0)')}};
  }
`;

export const Circle = styled.div<{ checked: boolean }>`
  left: 0;
  top: 50%;
  position: absolute;
  width: 36px;
  height: 36px;
  transition: transform 0.3s;
  will-change: transform;
  box-sizing: border-box;
  transform: ${({ checked }) => (checked ? 'translateX(28px)' : 'translateX(12px)')}};
  &::before {
    display: none;
    content: ' ';
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    animation: switch 500ms infinite linear;
    border: 1px solid #efefef;
    border-radius: 100%;
    border-top-color: transparent !important;
    width: 50%;
    height: 50%;
    box-sizing: border-box;
    transform: translate(-50%, -50%);
  }
  &::after {
    content: ' ';
    position: absolute;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
    border-radius: 100%;
    background-color: #fff;
    box-sizing: border-box;
    box-shadow: 2px 0 8px rgba(0, 0, 0, 0.14);
  }
  @keyframes switch {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
`;
