import { ShopsNumberQuery } from "@/components/CmsQueries/ShopsNumber.cms.generated";
import { useRouter } from "next/router";
import React from "react";

import Image from "next/legacy/image";
import { Section } from "../@UI/Section";
import { H1, H2 } from "../@UI/Texts";
import classNames from "classnames";
import styles from "./3Map.module.css";

export const Map: React.FC<{ kpis: ShopsNumberQuery["kpis"] }> = ({ kpis }) => {
  const { push } = useRouter();
  return (
    <>
      <div className="bg-gray-200">
        <Section className=" text-center">
          <H2>DAS HABEN WIR SCHON ERREICHT</H2>
          <div className="mx-10 flex flex-col items-center justify-between py-4 md:flex-row md:items-start">
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
        className="flex cursor-pointer md:w-3/5"
        onClick={() => push("/geschaefte")}
        role="presentation"
      >
        <div className={styles.map}>
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
