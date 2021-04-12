import { Card } from "@/components/@UI/Card";
import { Grid } from "@/components/@UI/Grid";
import {
  BlogsDocument,
  BlogsQuery,
} from "@/components/Blog/Blog.cms.generated";
import { withLayout } from "@/components/Layout";
import { graphCmsRequest } from "@/graphql/graphcms";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

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
          <Link css={tw`m-4`} key={k} href={`/blog/${item.date}`}>
            <Card
              title={item.title}
              subtitle={item.date}
              message={item.abstract ?? ""}
            ></Card>
          </Link>
          // </div>
        ))}
      </Grid>
    </Section>
  );
};

export default withLayout()(BlogPage);
