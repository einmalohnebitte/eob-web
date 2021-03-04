import { withLayout } from "@/components/Layout";
import {
  MembersDocument,
  MembersQuery,
} from "@/components/Members/Members.cms.generated";
import { TeamPhoto } from "@/components/Members/TeamPhoto";
import { graphCmsRequest } from "@/graphql/graphcms";
import { useTranslations } from "@/translate";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Section, SplitSection } from "../components/@UI/Section";
import { H1, H2 } from "../components/@UI/Texts";
import { MQ_DESKTOP, MQ_MOBILE } from "../constants/MediaQueries";

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media ${MQ_MOBILE} {
    grid-template-columns: 1fr;
  }
  @media ${MQ_DESKTOP} {
    grid-template-columns: 1fr 1fr 1fr;
  }
  a {
    font-weight: normal;
  }
  a:hover {
    text-decoration: none;
  }
`;

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
        <GridStyle>
          {members.map((item, k) => (
            <Link key={k} href={`/team/${item.slug}`}>
              <div css={tw`m-4 border-solid border-2 border-gray-600 `}>
                <TeamPhoto src={item?.picture?.url} />
                <div css={tw`p-4`}>
                  <b>{item.name}</b>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: item.abstract ?? "",
                    }}
                  />
                </div>
              </div>
            </Link>
          ))}
        </GridStyle>
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
