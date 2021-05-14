import { Card } from "@/components/@UI/Card";
import { Grid } from "@/components/@UI/Grid";
import {
  MembersDocument,
  MembersQuery,
} from "@/components/CmsQueries/Members.cms.generated";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { useTranslations } from "@/hooks/useTranslations";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

import { Section, SplitSection } from "../components/@UI/Section";
import { H1, H2 } from "../components/@UI/Texts";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(MembersDocument, {
    locale: contextToLocale(ctx),
  });

  return {
    props: data,
  };
};

const ArticlePage: React.FC<MembersQuery> = ({
  members,
  pageSections,
  pages,
}) => {
  const intl = useTranslations();
  return (
    <>
      <HeadMeta />
      <Section>
        <Image
          width={960}
          height={640}
          src={pageSections[0].picture[0].url}
          alt="uber-uns"
        />
      </Section>
      <Section>
        <div css={tw`flex flex-row text-center`}>
          <Card
            onClick={() => {
              window.location.hash = "#team";
            }}
            title={intl("ABOUT_TEAM")}
            color={"blue"}
          ></Card>
          <Card
            onClick={() => {
              window.location.hash = "#vision";
            }}
            title={intl("ABOUT_VISION")}
            color={"yellow"}
          ></Card>
          <Card
            onClick={() => {
              window.location.hash = "#mission";
            }}
            title={intl("ABOUT_MISSION")}
            color={"pink"}
          ></Card>
        </div>
      </Section>
      <div
        css={`
          background-color: ${pages?.[0]?.vibrantColor?.hex};
        `}
      >
        <SplitSection.Section id="team">
          <SplitSection.Side>
            <H1>{pageSections[0].title}</H1>
          </SplitSection.Side>
          <SplitSection.Main>
            <div
              css={tw`py-4`}
              dangerouslySetInnerHTML={{
                __html: pageSections[0].content.html ?? "",
              }}
            />
          </SplitSection.Main>
        </SplitSection.Section>
      </div>
      <Section>
        <H2 css={tw`m-4`}>{intl("TEAM")}</H2>
        <Grid>
          {members.map((item, k) => (
            <Link key={k} href={`/team/${item.slug}`}>
              <Card
                key={k}
                title={item.name ?? ""}
                message={item.abstract ?? ""}
                // eslint-disable-next-line no-nested-ternary
                color={k % 3 === 0 ? "blue" : k % 3 === 1 ? "yellow" : "pink"}
                linkTitle={`Lerne ${item.name} kennen...`}
                linkTo={`/team/${item.slug}`}
              >
                {item?.picture?.url && (
                  <Image
                    src={item?.picture?.url ?? ""}
                    width={208}
                    height={208}
                    layout={"intrinsic"}
                  />
                )}
              </Card>
            </Link>
          ))}
        </Grid>
      </Section>
      <div
        css={`
          background-image: linear-gradient(
            ${pages?.[0]?.vibrantColor?.hex},
            white
          );
        `}
      >
        <SplitSection.Section id="mission">
          <SplitSection.Main>
            <H2>{pageSections[1].title}</H2>
            <div
              css={`
                ${tw`py-4 text-xl leading-8 font-gt`}
                ul {
                  list-style: disc;
                }
              `}
              dangerouslySetInnerHTML={{
                __html: pageSections[1].content.html ?? "",
              }}
            />
          </SplitSection.Main>
          <SplitSection.Side>
            <picture>
              <img src={pageSections[1].picture[0].url} alt="uber-uns" />
            </picture>
          </SplitSection.Side>
        </SplitSection.Section>

        <SplitSection.Section id="vision">
          <SplitSection.Side>
            <picture>
              <img src={pageSections[2].picture[0].url} alt="uber-uns" />
            </picture>
          </SplitSection.Side>
          <SplitSection.Main>
            <H2>{pageSections[2].title}</H2>
            <div
              css={`
                ${tw`py-4 text-xl leading-8 font-gt`}
                ul {
                  list-style: disc;
                }
              `}
              dangerouslySetInnerHTML={{
                __html: pageSections[2].content.html ?? "",
              }}
            />
          </SplitSection.Main>
        </SplitSection.Section>
      </div>
    </>
  );
};

export default withLayout()(ArticlePage);
