import { Section } from "@/components/@UI/Section";
import { H2 } from "@/components/@UI/Texts";
import {
  BlogDocument,
  BlogQuery,
  BlogsDocument,
} from "@/components/Blog/Blog.cms.generated";
import { withLayout } from "@/components/Layout";
import { Locale } from "@/generated/graphql";
import { graphCmsRequest } from "@/graphql/graphcms";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import tw from "twin.macro";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await graphCmsRequest(BlogsDocument, { locale: [Locale.De] });

  return {
    paths: data.blogs.map((item) => ({ params: { date: item?.date ?? "" } })),
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const data = await graphCmsRequest(BlogDocument, {
    date: new Date((context?.params?.date as string) ?? ""),
    locale: contextToLocale(context),
  });
  return {
    props: data,
  };
};

const BlogPage: React.FC<BlogQuery> = ({ blogs }) => (
  <Section>
    <H2 css={tw`my-4`}>{blogs[0]?.title}</H2>
    <div
      dangerouslySetInnerHTML={{
        __html: blogs[0]?.content?.html ?? "",
      }}
    />
  </Section>
);

export default withLayout()(BlogPage);
