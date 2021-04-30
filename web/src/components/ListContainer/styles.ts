import styled from 'styled-components';

export const Container = styled.aside`
  background:#fff;
  border-radius:5px;
  padding:5px;
  margin:5px;
  overflow:none;

  >div{
    display:flex;
    justify-content: space-between;

    strong{
      margin:10px 0 10px 10px;
    }

    >span{
      display:flex;
      justify-content: space-between;
      align-items:center;
      margin-right:10px;
      cursor: pointer;

      &:hover{
        color:#fc8403;
      }

      p{
        margin: 10px 2px 10px 0;
      }
    }
  }

  >div:nth-child(2){
    display:flex;
    flex-direction:column;
    max-height:90%;
    overflow-y:scroll;
  }
`;