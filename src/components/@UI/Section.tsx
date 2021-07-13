import styled from "styled-components";
import tw from "twin.macro";
import { MQ_DESKTOP, MQ_MOBILE } from "@/constants/MediaQueries";

export const Section = tw.section`p-1 md:p-8 max-w-screen-lg mx-auto `;

export const HomeSection = {
  Section: styled(Section)` 
    @media ${MQ_MOBILE} {
      ${tw`flex flex-col`}
    }
    @media ${MQ_DESKTOP} {
      ${tw`flex flex-row`}
    }
  `,
};

export const SplitSection = {
  Section: styled(Section)`
    ${tw`flex flex-col items-center md:flex-row`}
    div:first-child {
      ${tw`md:mr-8`}
    }
  `,
  Main: styled.div`
    flex: 2;
  `,
  Side: styled.div`
    flex: 1;
  `,
};

export const SmallSection = tw.section`p-4 max-w-screen-sm mx-auto p-10`;
