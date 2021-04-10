import { Card } from "@/components/@UI/Card";
import { Grid } from "@/components/@UI/Grid";
import { withLayout } from "@/components/Layout";
import {
  MembersDocument,
  MembersQuery,
} from "@/components/Members/Members.cms.generated";
import { HeadMeta } from "@/components/PageSections/HeadMeta";
import { graphCmsRequest } from "@/graphql/graphcms";
import { useTranslations } from "@/translate";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
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
        <picture>
          <img src={pageSections[0].picture[0].url} alt="uber-uns" />
        </picture>
      </Section>
      <div
        css={`
          background-color: ${pages?.[0]?.vibrantColor?.hex};
        `}
      >
        <SplitSection.Section>
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
                img={item?.picture?.url}
                title={item.name ?? ""}
                message={item.abstract ?? ""}
                // color={k % 3 === 0 ? "blue" : k % 3 === 1 ? "yellow" : "pink"}
              ></Card>
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
        <SplitSection.Section>
          <SplitSection.Main>
            <H1>{pageSections[1].title}</H1>
            <div
              css={tw`py-4`}
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

        <SplitSection.Section>
          <SplitSection.Side>
            <picture>
              <img src={pageSections[2].picture[0].url} alt="uber-uns" />
            </picture>
          </SplitSection.Side>
          <SplitSection.Main>
            <H1>{pageSections[2].title}</H1>
            <div
              css={tw`py-4`}
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
