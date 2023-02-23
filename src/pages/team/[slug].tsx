import { CardImage } from "@/components/@UI/CardWrapper";
import { Section } from "@/components/@UI/Section";
import {
  dangerouslySetFormattedInnerHTML,
  ExtraClass,
} from "@/components/@UI/Texts";
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
    <div className="float-left m-4 max-w-sm">
      <CardImage
        title={members[0]?.name ?? ""}
        src={members[0]?.picture?.url ?? ""}
      />
    </div>

    <div
      dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
        members[0]?.bio?.html ?? "",
        {
          p: "pb-4",
        } as ExtraClass
      )}
    />
  </Section>
);

export default withLayout()(TeamPage);
