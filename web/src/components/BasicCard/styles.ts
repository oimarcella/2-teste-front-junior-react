import styled, { css } from 'styled-components';

interface BasicCardProps {
  thereIsIcon?: boolean;
  className?: string;
}

export const BasicCardContainer = styled.div<BasicCardProps>`
  background:#fff;
  cursor: pointer;
  border-radius:5px;
  max-height:5rem;
  padding:5px;
  flex:1;
  box-shadow: 6px 3px 5px rgba(0, 0, 0, 0.2);


  display:flex;
  justify-content:center;
  align-items:center;

  &:hover{
    background: #fc8403;
    color:#fff;
  }

  div{
    display:flex;
    flex-direction:column;
  }

  svg{
    ${props =>
    props.thereIsIcon &&
    css`
        margin-right:1.5rem;
      `
  }
  }
`;