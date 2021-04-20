import { Section } from "@/components/@UI/Section";
import { H1 } from "@/components/@UI/Texts";
import { NewsletterForm } from "@/components/Forms/NewsletterForm";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/PageSections/HeadMeta";
import {
  PageContentDocument,
  PageContentQuery,
} from "@/components/PageSections/PageContent.cms.generated";
import { graphCmsRequest } from "@/graphql/graphcms";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
import React from "react";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PageContentDocument, {
    page: "newsletter",
    locale: contextToLocale(ctx),
  });
  return {
    props: data,
  };
};

const Page: React.FC<PageContentQuery> = (props) => {
  return (
    <>
      <HeadMeta
        metaDescription={props.pages[0]?.metaDescription}
        metaKeywords={props.pages[0]?.metaKeywords}
      />
      <Section>
        <H1>{props.pages[0].title}</H1>

        <div
          dangerouslySetInnerHTML={{
            __html: props.pages[0]?.content?.html ?? "",
          }}
        />
        <NewsletterForm />
      </Section>
    </>
  );
};

export default withLayout()(Page);
