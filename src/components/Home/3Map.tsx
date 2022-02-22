import { ShopsNumberQuery } from "@/components/CmsQueries/ShopsNumber.cms.generated";
import { useRouter } from "next/router";
import React from "react";

import Image from "next/image";
import { Section } from "../@UI/Section";
import { H1, H2 } from "../@UI/Texts";
import classNames from "classnames";

export const Map: React.FC<{ kpis: ShopsNumberQuery["kpis"] }> = ({ kpis }) => {
  const { push } = useRouter();
  return (
    <>
      <div className="bg-gray-200">
        <Section className=" text-center">
          <H2>DAS HABEN WIR SCHON ERREICHT</H2>
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start py-4 mx-10">
            {kpis.map((kpi, i) => (
              <div
                className={classNames(
                  `w-40`,
                  i % 3 === 0 && `text-pink-600`,
                  i % 3 === 1 && `text-blue-600`,
                  i % 3 === 2 && `text-yellow-600`
                )}
                key={`kpi${i}`}
              >
                <H1>{kpi.value}</H1>
                <p className="text-sm"> {kpi.text}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
      <div
        className="flex md:w-3/5 cursor-pointer"
        onClick={() => push("/geschaefte")}
        role="presentation"
      >
        <div
          css={`
            @media (min-width: 768px) {
              position: relative;
              left: 40%;
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
