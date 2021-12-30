import lemonism from "@/fonts/font.woff";
import GT from "@/fonts/GT-Cinetype-Light.woff";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @font-face {
        font-weight: normal;
        font-style: normal;
        font-family: Lemonism-Regular;
        font-display: fallback;
        src: local('Lemonism-Regular'), url(${lemonism})  format('woff');
    }
    @font-face {
        font-weight: normal;
        font-style: normal;
        font-family: GT;
        font-display: fallback;
        src: local('GT'), url(${GT})  format('woff');
    }

    body {
        margin: 0;
        font-family: GT, sans-serif;
        font-display: swap;
    }

    a{
      box-sizing: border-box;
      font-size: inherit;
      line-height: inherit;
      color: #000;
      font-weight: 600;
      -webkit-text-decoration: none;
      text-decoration: none;
      cursor: pointer;
      outline: none;
      :hover{
        text-decoration: underline;
      }
    }
    
    p,a,div { 
        font-size: 1.25rem;
        line-height: 2rem;
        font-family: GT, sans-serif;
    }

  
   
`;
