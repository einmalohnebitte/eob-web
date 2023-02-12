import { Section, SplitSection } from "@/components/@UI/Section";
import {
  dangerouslySetFormattedInnerHTML,
  H1,
  H2,
} from "@/components/@UI/Texts";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { AnchorPointer } from "@/components/@UI/AnchorPointer";
import React from "react";
import Image from "next/image";
import { ReusableHeroQuery } from "../CmsQueries/ReusableHero.cms.generated";
import { Heros } from "./Heros";
import { SponsorCard } from "../@UI/SponsorCard";
import { BackgroundWrapper } from "../@UI/BackgroundWrapper";

export const ReusableHero: React.FC<ReusableHeroQuery> = ({
  reusableHeros,
  pageSections,
  pages,
}) => {
  const vibrantColor = pages?.[0]?.vibrantColor?.hex;
  const firstPic = pageSections[0].picture[0];

  return (
    <>
      <HeadMeta />
      <BackgroundWrapper vibrantColor={vibrantColor}>
        <Section>
          <H1>{pages[0]?.title}</H1>
          <div
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pages[0]?.content?.html ?? ""
            )}
          />
        </Section>
      </BackgroundWrapper>

      <AnchorPointer id="heros" />
      <Heros reusableHeros={reusableHeros} />
      <div
        css={`
          background-image: linear-gradient(${vibrantColor}, white);
        `}
      >
        <Section>
          <H2>{pageSections[0].title}</H2>
          <SplitSection.Section>
            <SplitSection.Side>
              <Image
                width={firstPic?.width ?? 0 / 10}
                height={firstPic?.height ?? 0 / 10}
                src={firstPic.url}
                alt="seimehrwegheldin"
              />
            </SplitSection.Side>
            <SplitSection.Main>
              <div
                className="py-4 font-gt text-xl leading-8"
                dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
                  pageSections[0].content.html ?? ""
                )}
              />
            </SplitSection.Main>
          </SplitSection.Section>
        </Section>
      </div>
      <Section>
        <H2>{pageSections[1].title}</H2>
        <div className="flex">
          {pageSections[1].picture.map((pic) => (
            <SponsorCard key={pic.url} src={pic.url} />
          ))}
        </div>
      </Section>
    </>
  );
};
