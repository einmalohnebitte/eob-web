import { ShopsNumberQuery } from "@/components/CmsQueries/ShopsNumber.cms.generated";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";

import Image from "next/image";
import { Section } from "../@UI/Section";
import { H1, H2 } from "../@UI/Texts";

export const Map: React.FC<{ kpis: ShopsNumberQuery["kpis"] }> = ({ kpis }) => {
  const { push } = useRouter();
  return (
    <>
      <div css={tw`bg-gray-200`}>
        <Section css={tw` text-center`}>
          <H2>DAS HABEN WIR SCHON ERREICHT</H2>
          <div
            css={tw`flex flex-col md:flex-row justify-between items-center md:items-start mx-10 py-4`}
          >
            {kpis.map((kpi, i) => (
              <div
                css={[
                  tw`w-40`,
                  i % 3 === 0 && tw`text-pink-600`,
                  i % 3 === 1 && tw`text-blue-600`,
                  i % 3 === 2 && tw`text-yellow-600`,
                ]}
                key={`kpi${i}`}
              >
                <H1>{kpi.value}</H1>
                <p css={tw`text-sm`}>{kpi.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <div
        css={tw`md:w-3/5 flex cursor-pointer`}
        onClick={() => push("/geschaefte")}
        role="presentation"
      >
        <div
          css={`
            @media (min-width: 768px) {
              position: relative;
              left: 32%;
              top: -20px;
            }
            padding-bottom: 20px;
          `}
        >
          <Image
            width={742}
            height={418}
            src="/images/map.png"
            alt="Unser Map"
          />
        </div>
      </div>
    </>
  );
};
