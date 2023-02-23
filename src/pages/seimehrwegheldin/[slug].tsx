import { Section } from "@/components/@UI/Section";
import {
  dangerouslySetFormattedInnerHTML,
  ExtraClass,
} from "@/components/@UI/Texts";
import {
  HeroQuery,
  HeroDocument,
  ReusableHeroDocument,
} from "@/components/CmsQueries/ReusableHero.cms.generated";
import { withLayout } from "@/components/Layout";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { Locale } from "@/server/generated/graphql";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Head from "next/head";
import { CardImage } from "@/components/@UI/CardWrapper";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await graphCmsRequest(ReusableHeroDocument, {
    locale: [Locale.De],
  });

  return {
    paths: data.reusableHeros.map((item) => ({
      params: { slug: item?.slug ?? "" },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await graphCmsRequest(HeroDocument, {
    slug: (context?.params?.slug as string) ?? "",
    locale: contextToLocale(context),
  });
  return {
    props: data,
  };
};

const TeamPage: React.FC<HeroQuery> = ({ reusableHeros }) => (
  <Section>
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
    <div className="float-left m-4 max-w-sm">
      <CardImage
        src={reusableHeros[0]?.picture?.url ?? ""}
        title={reusableHeros[0]?.name ?? ""}
      />
    </div>

    <div
      dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
        reusableHeros[0]?.bio?.html ?? "",
        {
          p: "pb-4",
        } as ExtraClass
      )}
    />
  </Section>
);

export default withLayout()(TeamPage);
