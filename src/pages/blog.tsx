import {
  BlogsDocument,
  BlogsQuery,
} from "@/components/Blog/Blog.cms.generated";
import { withLayout } from "@/components/Layout";
import { graphCmsRequest } from "@/graphql/graphcms";
import { useTranslations } from "@/translate";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

import { Section } from "../components/@UI/Section";
import { H1 } from "../components/@UI/Texts";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(BlogsDocument, {
    locale: contextToLocale(ctx),
  });

  return {
    props: data,
  };
};

const BlogPage: React.FC<BlogsQuery> = ({ blogs }) => {
  const intl = useTranslations();
  return (
    <Section>
      <H1>{intl("Blog")}</H1>

      {blogs.map((item, k) => (
        <div css={tw`m-4  `} key={k}>
          <Link href={`/blog/${item.date}`}>
            <a>
              <i css={tw`mx-2`}>{item.date}</i>
              <b>{item.title}</b>
            </a>
          </Link>
        </div>
      ))}
    </Section>
  );
};

export default withLayout()(BlogPage);
