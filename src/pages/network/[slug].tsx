import { Card } from "@/components/@UI/Card";
import { Section } from "@/components/@UI/Section";
import {
  MembersDocument,
  NetworkDocument,
  NetworkQuery,
} from "@/components/CmsQueries/Members.cms.generated";
import { withLayout } from "@/components/Layout";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { Locale } from "@/server/generated/graphql";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import tw from "twin.macro";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await graphCmsRequest(MembersDocument, { locale: [Locale.De] });

  return {
    paths: data.networks.map((item) => ({
      params: { slug: item?.slug ?? "" },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await graphCmsRequest(NetworkDocument, {
    slug: (context?.params?.slug as string) ?? "",
    locale: contextToLocale(context),
  });
  return {
    props: data,
  };
};

const TeamPage: React.FC<NetworkQuery> = ({ networks }) => (
  <Section>
    <div css={tw`max-w-sm float-left m-4`}>
      <Card
        img={networks[0]?.logo?.url}
        title={networks[0]?.title ?? ""}
        // color={"blue"}
      />
    </div>

    <div
      css={`
        p {
          padding-bottom: 1rem !important;
        }
      `}
      dangerouslySetInnerHTML={{
        __html: networks[0]?.description?.html ?? "",
      }}
    />
  </Section>
);

export default withLayout()(TeamPage);
