import styled from 'styled-components';

interface Props {
  size: number;
  background?: string;
}

export const Component = styled.div<Props>`
  height: ${(props) => `${props.size}px`};
  background: ${(props) => props.background ?? 'transparent'};
  /* position: relative; */
`;
