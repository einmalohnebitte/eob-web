import styled from "styled-components";
import tw from "twin.macro";

export const H1 = tw.h1`font-lemonism text-5xl leading-10 pt-2`;
export const H2 = styled.h2`
  font-size: 3rem;
  ${tw`font-lemonism   leading-8`}
`;
export const H3 = tw.h3`font-lemonism text-4xl leading-6 `;
export const H4 = tw.h3`font-lemonism text-xl leading-6 `;

export const PFont = `text-xl leading-8 font-gt`;
export const P = tw.p`${PFont}`;
export const Span = tw.span`text-lg`;
