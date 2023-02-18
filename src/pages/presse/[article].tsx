import { Section } from "@/components/@UI/Section";
import { dangerouslySetFormattedInnerHTML, H2 } from "@/components/@UI/Texts";

import { PressDocument } from "@/components/CmsQueries/Press.cms.generated";
import {
  PressArticleDocument,
  PressArticleQuery,
} from "@/components/CmsQueries/PressArticle.cms.generated";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { Locale } from "@/server/generated/graphql";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import styles from "@/components/Layout/Blog.module.css";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await graphCmsRequest(PressDocument, { locale: [Locale.De] });

  return {
    paths: data.pressArticles.map((item) => ({
      params: { article: item?.slug ?? "" },
    })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await graphCmsRequest(PressArticleDocument, {
    slug: (context?.params?.article as string) ?? "",
    locale: contextToLocale(context),
  });
  return {
    props: data,
  };
};

const BlogPage: React.FC<PressArticleQuery> = ({ pressArticles }) => (
  <>
    <HeadMeta />
    <Section>
      <H2 className={styles.title}>{pressArticles[0]?.title}</H2>
      <div
        className={styles.content}
        dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
          pressArticles[0]?.content?.html ?? ""
        )}
      />
    </Section>
  </>
);

export default withLayout()(BlogPage);
