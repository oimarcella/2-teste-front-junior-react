import styled from 'styled-components';

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

  .menuList {
    li:nth-child(odd){
      background:#e3e3e3;
    }
    li:hover{
        color:#fc8403;
        cursor: pointer;
        font-weight:bold;
      }
  }

  h3{
    margin-left:1.5rem;
  }
`;