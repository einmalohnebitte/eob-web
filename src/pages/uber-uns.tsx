import { withLayout } from "@/components/Layout";
import {
  MembersDocument,
  MembersQuery,
} from "@/components/Members/Members.generated";
import { TeamPhoto } from "@/components/Members/TeamPhoto";
import { graphCmsRequest } from "@/graphql/graphcms";
import { useTranslations } from "@/translate";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { Section } from "../components/@UI/Section";
import { H2 } from "../components/@UI/Texts";
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

export const getStaticProps: GetStaticProps = async () => {
  const data = await graphCmsRequest(MembersDocument);

  return {
    props: data,
  };
};

const ArticlePage: React.FC<MembersQuery> = ({ members }) => {
  const intl = useTranslations();
  return (
    <Section>
      <picture>
        <img src="/images/uberuns.png" alt="uber-uns" />
      </picture>
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
  );
};

export default withLayout()(ArticlePage);
