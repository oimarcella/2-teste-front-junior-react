import styled from 'styled-components'

export const Container = styled.div`
  @media(min-width:1000px){
    &{
      max-height: 100vh;
    }
  }
  
  
  >div{
    display:flex;
    max-height: 50%;
    
    @media(max-width:1000px){
      &{
        flex-direction:column;
      }
    }
  }

  input{
    @media(min-width:1000px){
      &{
        margin: 5px 7px 0 7px;
      }
    }
    
    @media(max-width:1000px){
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

  @media(min-width:1000px){
    &{      
      max-width: 800px;
    }
  }

  header{
    display:flex;
    
    .basicCard{
      margin:10px;
    }

    @media(max-width:1000px){
      &{
        flex-direction:column;
        .basicCard{
          margin:5px;
        }
      }
    }
  }

  div.mainChart{ 
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
  div.chart{
    background:#fff;
    border-radius:5px;
    box-shadow: 6px 3px 5px rgba(0, 0, 0, 0.2);
    margin:0 10px 0 10px;

    @media(max-width:1000px){
      &{
          margin:0 5px 20px 5px;
      }
    }
  }
`;

export const Aside = styled.aside`
  max-height: 100vh;
  flex:1;

  display:flex;
  flex-direction:column;

  .listProducts{
    max-height:60%;
  }
  .listServices{
    max-height:35%;
  }
`;