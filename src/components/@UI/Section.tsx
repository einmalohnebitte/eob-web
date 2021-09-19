import styled from "styled-components";
import tw from "twin.macro";

export const Section = tw.section`p-1 mt-5 md:p-8 max-w-screen-lg mx-auto `;

export const SplitSection = {
  Section: styled(Section)`
    ${tw`flex flex-col md:flex-row items-center`}
    div:first-child {
      ${tw`md:mr-8 `}
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
