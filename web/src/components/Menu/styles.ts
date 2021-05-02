import styled from 'styled-components';

export const MenuContainer = styled.aside`
  display:flex;
  flex-direction:column;
  justify-content:center;
  position:relative;
  margin-left:1rem;

    svg{
      cursor: pointer;
      &:hover{
      color:#fc8403;
      }
    }
    div.menuItems{
      display:block;
      border:2px solid #e3e3e3;
      background: #fff;
      border-radius:5px;
      

      position: absolute;
      top:100%;
      width:250px;
      height:400px;
      z-index: 1000;
      right:500px;
    }
    div.menuItems.open{
      right:-228px;
    }
    .menuItems p:nth-child(odd){
      background:#e3e3e3;
      }
`;