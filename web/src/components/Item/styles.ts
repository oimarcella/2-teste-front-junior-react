import styled from 'styled-components';

export const ContainerItem = styled.div`
  margin:5px;
  border-radius:5px;
  border:1px solid #c6c6c6;  
  background:#fff;

  display:flex;
  flex-direction:column;
  
  
  div{
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    flex:1;
    border-left:3px solid orange;
    
    span:first-child{
      display:flex;
      flex-direction:column;
      justify-content:center;   
      
      strong{
        margin-bottom:0;
        font-weight:bold;
      }
      p{
        margin:0 0 5px 5px;
      }
    }
    
    >span:nth-child(2){
      display:flex;
      flex-direction:column;
      justify-content:center;
      
      p{
        display:flex;
        flex-direction:row;
        span{
          color:#3da838;
        }
      }
    }
    
  }

  >div:nth-child(2){
    border:1px solid #c6c6c6;
    padding: 3px;

    p{
      display:flex;
      span{
        color:#fc8403;
      }
    }
  }
`;