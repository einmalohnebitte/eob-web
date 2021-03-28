import { FaqsDocument, FaqsQuery } from "@/components/Faq/Faq.cms.generated";
import { withLayout } from "@/components/Layout";
import { graphCmsRequest } from "@/graphql/graphcms";
import { useTranslations } from "@/translate";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
import React from "react";
import tw from "twin.macro";

import { Section } from "../components/@UI/Section";
import { H1, H2 } from "../components/@UI/Texts";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(FaqsDocument, {
    locale: contextToLocale(ctx),
  });

  return {
    props: data,
  };
};

const FaqPage: React.FC<FaqsQuery> = ({ faqs }) => {
  const intl = useTranslations();
  return (
    <>
      <Section>
        <H1>{intl("FAQ")}</H1>

        {faqs.map((item, k) => (
          <div css={tw`p-4`} key={k}>
            <H2 css={tw`my-2`}>{item.question}</H2>
            <div
              dangerouslySetInnerHTML={{
                __html: item.answer?.html ?? "",
              }}
            />
          </div>
        ))}
      </Section>
    </>
  );
};

export default withLayout()(FaqPage);
