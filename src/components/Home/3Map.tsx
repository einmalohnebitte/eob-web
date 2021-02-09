import React from "react";
import tw from "twin.macro";

import { navigate } from "../@hooks/useTranslate";
import { Section } from "../@UI/Section";
import { H1, H2 } from "../@UI/Texts";

export const Map: React.FC = () => (
  <>
    <div css={tw`bg-gray-700`}>
      <Section css={tw`text-white text-center`}>
        <H2>DAS HABEN WIR SHON ERREICHT</H2>
        <div
          css={tw`flex flex-col md:flex-row justify-between items-center md:items-start mx-10 py-4`}
        >
          <div css={tw`w-40`}>
            <H1>8</H1>
            <p css={tw`text-sm`}>Städtpartner</p>
          </div>
          <div css={tw`w-40`}>
            <H1>10</H1>
            <p css={tw`text-sm`}>Botshafter*innen</p>
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
      onClick={() => navigate("/geschaefte")}
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
