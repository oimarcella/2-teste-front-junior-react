import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  @media(min-width:1154px){
    &{
      min-height: 100vh;
    }
  }
  
  
  >div{
    display:flex;
     @media(min-width:1154px){
      &{        
        height:51.4rem;
        max-height:80%;
      }
    }
    @media(max-width:1154px){
      &{
        flex-direction:column;
      }
    }
  }

  input{
    @media(min-width:1154px){
      &{
        margin: 5px 7px 0 7px;
      }
    }
    
    @media(max-width:1154px){
      &{
        margin:10px;
        width:98%;
      }
    }

    border-radius:5px;
    padding:10px;
    border: 0.5px solid #707070;
    height:2.5rem;
    width:32.5%;
  }
`;


export const Main = styled.div`
  width: 100%;

  @media(min-width:1154px){
    &{      
      max-width: 800px;
    }
  }

  header{
    display:flex;
    
    .basicCard{
      margin:10px;
    }

    @media(max-width:1154px){
      &{
        flex-direction:column;
        .basicCard{
          margin:5px;
        }
      }
    }
  }

  div.lineChart{
    background:#fff;
    border-radius:5px;
    box-shadow: 6px 3px 5px rgba(0, 0, 0, 0.2);

    margin:0 10px 5px 10px;

    @media(max-width:1000px){
      &{
          margin:0 5px 5px 5px;
      }
    }
  }
  div.pieChartContainer{
    background:#fff;
    border-radius:5px;
    box-shadow: 6px 3px 5px rgba(0, 0, 0, 0.2);
    margin:10px 10px 0 10px;
    max-height:40%;

    display:flex;
    justify-content:center;

    @media(max-width:1154px){
      &{
          margin:0 5px 20px 5px;
      }
    }
  }
`;

export const Aside = styled.aside`
  flex:1;

  display:flex;
  flex-direction:column;

  .listProducts{
    max-height:50%;
  }
  .listServices{
    max-height:40%;
  }
  .filters{
    display:flex;
    justify-content:flex-end;
    .filter{
      margin-right:5px;
    }
  }
`;