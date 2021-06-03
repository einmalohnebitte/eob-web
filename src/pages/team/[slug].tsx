import { Card } from "@/components/@UI/Card";
import { Section } from "@/components/@UI/Section";
import {
  MemberDocument,
  MemberQuery,
  MembersDocument,
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
    paths: data.members.map((item) => ({ params: { slug: item?.slug ?? "" } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await graphCmsRequest(MemberDocument, {
    slug: (context?.params?.slug as string) ?? "",
    locale: contextToLocale(context),
  });
  return {
    props: data,
  };
};

const TeamPage: React.FC<MemberQuery> = ({ members }) => (
  <Section>
    <div css={tw`max-w-sm float-left m-4`}>
      <Card
        img={members[0]?.picture?.url}
        title={members[0]?.name ?? ""}
        // color={"blue"}
      ></Card>
    </div>

    <div
      css={`
        p {
          padding-bottom: 1rem !important;
        }
      `}
      dangerouslySetInnerHTML={{
        __html: members[0]?.bio?.html ?? "",
      }}
    />
  </Section>
);

export default withLayout()(TeamPage);
