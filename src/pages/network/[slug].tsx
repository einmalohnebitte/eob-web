import { Card } from "@/components/@UI/Card";
import { Section } from "@/components/@UI/Section";
import {
  dangerouslySetFormattedInnerHTML,
  ExtraClass,
} from "@/components/@UI/Texts";
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
    <div className="float-left m-4 max-w-sm">
      <Card
        img={networks[0]?.logo?.url}
        title={networks[0]?.title ?? ""}
        // color={"blue"}
      />
    </div>

    <div
      dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
        networks[0]?.description?.html ?? "",
        {
          p: "pb-4",
        } as ExtraClass
      )}
    />
  </Section>
);

export default withLayout()(TeamPage);
