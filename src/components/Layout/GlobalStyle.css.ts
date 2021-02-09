import { createGlobalStyle } from "styled-components";
import tw from "twin.macro";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        ${tw`font-gt`}
        font-display: swap;
        /* position: absolute;
        width: 100vw; */
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
    
`;
