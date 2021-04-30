import styled, { css } from 'styled-components';

interface HeaderProps {
  thereIsIcon?: boolean;
  className?: string;
}

export const ContainerHeader = styled.header<HeaderProps>`
  height: 4rem;

  background:#fff;
  border-bottom:solid 1px #c6c6c6;
  display:flex;
  align-items:center;
  
  svg{
    ${props =>
    props.thereIsIcon &&
    css`
        margin-left:1rem;
      `
  }
  }

  h3{
    margin-left:1.5rem;
  }
`;