import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
      --color-primary: #ff577f;
      --color-primary-50: #ff427f;
      --color-primary-disable: #59323f;
      --color-grey-4: #121214;
      --color-grey-3: #212529;
      --color-grey-2: #343b41;
      --color-grey-1: #868e96;
      --color-grey-0: #f8f9fa;
      --color-sucess: #3fe864;
      --color-negative: #e83f5b;
  }
  

    *{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }
  
  body,html{
    width: 100%;
    height: 100vh;
    scroll-behavior: smooth;

    background-color: var(--color-grey-4);
  }

  body, input, button, textarea{
    font-family: 'Inter', sans-serif;
  }

  button{
    cursor: pointer;
    border: none;
    font-family: 'Inter', sans-serif;
  }

  li{
    list-style: none;
  }
`;
