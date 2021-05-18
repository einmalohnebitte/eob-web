import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";

import { Section } from "../@UI/Section";
import { H1, H2 } from "../@UI/Texts";

export const Map: React.FC = () => {
  const { push } = useRouter();
  return (
    <>
      <div css={tw`bg-gray-700`}>
        <Section css={tw`text-white text-center`}>
          <H2>DAS HABEN WIR SCHON ERREICHT</H2>
          <div
            css={tw`flex flex-col md:flex-row justify-between items-center md:items-start mx-10 py-4`}
          >
            <div css={tw`w-40`}>
              <H1>8</H1>
              <p css={tw`text-sm`}>Städtpartner</p>
            </div>
            <div css={tw`w-40`}>
              <H1>10</H1>
              <p css={tw`text-sm`}>Botschafter*innen</p>
            </div>
            <div css={tw`w-40`}>
              <H1>16</H1>
              <p css={tw`text-sm`}>Tonnen Verpackungsmüll eingespart</p>
            </div>
            <div css={tw`w-40`}>
              <H1>52</H1>
              <p css={tw`text-sm`}>
                Ehrenamtliche Unterstützer*innen deutschlandweit
              </p>
            </div>
          </div>
        </Section>
      </div>
      <div
        css={tw`md:w-3/5 flex cursor-pointer`}
        onClick={() => push("/geschaefte")}
        role="presentation"
      >
        <picture
          css={`
            @media (min-width: 768px) {
              position: relative;
              left: 32%;
              top: -50px;
            }
          `}
        >
          <img src="/images/map.png" alt="Unser Map" />
        </picture>
      </div>
    </>
  );
};
