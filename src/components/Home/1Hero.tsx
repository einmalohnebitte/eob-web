import { PageSectionsQuery } from "@/components/CmsQueries/PageSections.cms.generated";
import Image from "next/image";
import React from "react";
import tw from "twin.macro";

import { Section } from "../@UI/Section";
import { H1 } from "../@UI/Texts";

const HeroImg: React.FC<{
  is2Col?: boolean;
  is2Row?: boolean;
  src: string;
}> = ({ src, is2Row, is2Col }) => (
  <div
    css={`
      /* position: relative; */
      div {
        height: 100%;
      }
      ${is2Row && tw`row-span-2`}
      ${is2Col && tw`col-span-2`}
    `}
  >
    {src && (
      <Image
        css={tw`rounded-lg`}
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
          css={`
            ${tw`py-4 `}
            strong {
              font-size: 1.8rem;
              ${tw`text-pink-600`}
            }
          `}
          dangerouslySetInnerHTML={{
            __html: content.html.replace("[shops]", shops.toString()),
          }}
        />
      </Section>
      <div css={tw`overflow-x-scroll`}>
        <div
          css={`
            min-width: 1020px;
            ${tw`gap-4 grid grid-flow-col grid-cols-7 grid-rows-2 px-10`}
          `}
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
