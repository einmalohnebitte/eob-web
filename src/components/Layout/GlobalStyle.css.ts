import lemonism from "@/fonts/font.woff";
import GT from "@/fonts/GT-Cinetype-Light.woff";
import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

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
        ${tw`font-gt`}
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
    
    p {
      ${tw`text-xl leading-8 font-gt`}
    }

  
   
`;
