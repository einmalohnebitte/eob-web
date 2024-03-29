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
import Head from "next/head";
import { Flex } from "../@UI/Flex";

export const ReusableHero: React.FC<ReusableHeroQuery> = ({
  reusableHeros,
  pageSections,
  pages,
}) => {
  const firstPic = pageSections[0].picture[0];

  return (
    <>
      <Head>
        <meta name="robots" content="noindex" />
      </Head>
      <HeadMeta />
      <Flex bgColor="gray">
        <Section>
          <H1>{pages[0]?.title}</H1>
          <div
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pages[0]?.content?.html ?? ""
            )}
          />
        </Section>
      </Flex>

      <AnchorPointer id="heros" />
      <Heros reusableHeros={reusableHeros} />
      <Flex bgColor="gray">
        <Section>
          <H2>{pageSections[0].title}</H2>
          <SplitSection>
            <Flex basis="1/3">
              <Image
                width={firstPic?.width ?? 0 / 10}
                height={firstPic?.height ?? 0 / 10}
                src={firstPic.url}
                alt="seimehrwegheldin"
              />
            </Flex>
            <Flex basis="2/3">
              <div
                className="py-4 font-gt text-xl leading-8"
                dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
                  pageSections[0].content.html ?? ""
                )}
              />
            </Flex>
          </SplitSection>
        </Section>
      </Flex>
      <Section>
        <H2>{pageSections[1].title}</H2>
        <Flex>
          {pageSections[1].picture.map((pic) => (
            <SponsorCard key={pic.url} src={pic.url} />
          ))}
        </Flex>
      </Section>
    </>
  );
};
