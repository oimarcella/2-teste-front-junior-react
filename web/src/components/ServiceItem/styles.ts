import styled from 'styled-components';

export const ContainerServiceItem = styled.div`
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
  }
`;