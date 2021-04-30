import styled from 'styled-components';

export const FilterContainer = styled.div`
  background: inherit;
  border-radius:5px;
  border:1px solid #c6c6c6;
  display:flex;
  flex-direction:column;
  align-items:center;
  padding:5px;
  span{
    display:flex;

    svg{
      cursor:pointer;
    }
    svg:hover{
      color:#fc8403;
    }
  }
`;