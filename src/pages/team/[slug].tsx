import { Card } from "@/components/@UI/Card";
import { Section } from "@/components/@UI/Section";
import { withLayout } from "@/components/Layout";
import {
  MemberDocument,
  MemberQuery,
  MembersDocument,
} from "@/components/Members/Members.cms.generated";
import { Locale } from "@/generated/graphql";
import { graphCmsRequest } from "@/graphql/graphcms";
import { contextToLocale } from "@/translate/contextToLocale";
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
      ></Card>
    </div>

    <div
      dangerouslySetInnerHTML={{
        __html: members[0]?.bio?.html ?? "",
      }}
    />
  </Section>
);

export default withLayout()(TeamPage);
