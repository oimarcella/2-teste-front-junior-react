import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  *{
    font-family: 'Noto Sans TC', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
    outline:0;
  }

  @media(max-width: 1080px){
    html{
      font-size: 93.75%;
    }
  }
  @media(max-width: 720px){
    html{
      font-size: 87.5%;
    }
  }
  
  body{
    max-height:100vh;
    background: #ebebeb;
    color:#403f3f;
    -webkit-font-smoothing:antialiased;
  }
  a{
    text-decoration: none;
  }
  body,input,button{
    font-size:14px;
  }
  h1,h2,h3,h4,h5,h6,strong{
    font-weight:500;
  }
  button{
    cursor:pointer;
  }
`;