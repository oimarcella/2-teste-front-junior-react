import styled from 'styled-components';

export const Container = styled.aside`
  background:#fff;
  border-radius:5px;
  padding:5px;
  margin:5px;
  overflow:none;

  div{
    display:flex;
    justify-content: space-between;

    strong{
      margin:10px 0 10px 10px;
    }

    span{
      display:flex;
      justify-content: space-between;
      align-items:center;
      margin-right:10px;

      p{
        margin: 10px 2px 10px 0;
      }
      svg{
        cursor: pointer;
      }
    }
  }

  >div:nth-child(2){
    display:flex;
    flex-direction:column;
    max-height:85%;
    overflow-y:scroll;
  }
`;