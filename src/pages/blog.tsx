import { CardTitle } from "@/components/@UI/CardWrapper";
import { Grid } from "@/components/@UI/Grid";
import {
  BlogsDocument,
  BlogsQuery,
} from "@/components/CmsQueries/Blog.cms.generated";
import { withLayout } from "@/components/Layout";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";

import { Section } from "../components/@UI/Section";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(BlogsDocument, {
    locale: contextToLocale(ctx),
  });

  return {
    props: data,
  };
};

const BlogPage: React.FC<BlogsQuery> = ({ blogs }) => {
  return (
    <Section>
      <Grid>
        {blogs.map((item, k) => (
          <Link key={k} href={`/blog/${item.date}`} passHref={true}>
            <CardTitle
              className="break-all"
              title={item.title}
              subtitle={item.date}
              message={item.abstract ?? ""}
              color={k % 3 === 0 ? "blue" : k % 3 === 1 ? "yellow" : "pink"}
            />
          </Link>
        ))}
      </Grid>
    </Section>
  );
};

export default withLayout()(BlogPage);
