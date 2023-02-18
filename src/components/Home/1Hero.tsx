import { PageSectionsQuery } from "@/components/CmsQueries/PageSections.cms.generated";
import classNames from "classnames";
import Image from "next/legacy/image";
import React from "react";

import { Section } from "../@UI/Section";
import { H1 } from "../@UI/Texts";

import styles from "./1Hero.module.css";

const HeroImg: React.FC<{
  is2Col?: boolean;
  is2Row?: boolean;
  src: string;
}> = ({ src, is2Row, is2Col }) => (
  <div
    className={classNames(
      styles.wrapper,
      is2Row && `row-span-2`,
      is2Col && `col-span-2`
    )}
  >
    {src && (
      <Image
        alt="hero"
        className="rounded-lg"
        src={src}
        layout="responsive"
        width={is2Row ? 200 : 100}
        height={is2Col ? 200 : 100}
      />
    )}
  </div>
);

export const Hero: React.FC<
  PageSectionsQuery["pageSections"][0] & { shops: number }
> = ({ content, title, shops }) => {
  return (
    <div>
      <Section>
        <H1>{title}</H1>
        <div
          className={classNames("py-4", styles.shopsNumber)}
          dangerouslySetInnerHTML={{
            __html: content.html.replace("[shops]", shops.toString()),
          }}
        />
      </Section>
      <div className="overflow-x-scroll">
        <div
          className={classNames(
            "grid grid-cols-7 grid-rows-2 grid-flow-col gap-4 px-10",
            styles.grid
          )}
        >
          <HeroImg src={"/images/hero/Bild6 - Berlin.jpg"} />

          <HeroImg src={"/images/hero/Bild13 - Hände.jpg"} />

          <HeroImg src={"/images/hero/Bild4.jpg"} is2Row={true} is2Col={true} />

          <HeroImg src={"/images/hero/Bild1 - sticker.jpg"} />
          <HeroImg src={"/images/hero/Bild3.jpg"} />

          <HeroImg
            src={"/images/hero/Bild11 - Sticker.jpg"}
            is2Row={true}
            is2Col={true}
          />

          <HeroImg src={"/images/hero/Bild8 - Sticker Laden.jpg"} />
          <HeroImg src={"/images/hero/Bild10.jpg"} />
        </div>
      </div>
    </div>
  );
};
