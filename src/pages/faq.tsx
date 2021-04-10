import { FaqsDocument, FaqsQuery } from "@/components/Faq/Faq.cms.generated";
import { withLayout } from "@/components/Layout";
import { graphCmsRequest } from "@/graphql/graphcms";
import { useTranslations } from "@/translate";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
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
  const [openFaq, setOpenFaq] = useState<{ [key: number]: boolean }>({});
  const toggleFaq = (k: number): void =>
    setOpenFaq({ ...openFaq, ...{ [k]: !openFaq[k] } });

  return (
    <>
      <Section>
        <H1 css={tw`mb-2`}>{intl("FAQ")}</H1>

        {faqs.map((item, k) => (
          <div
            css={[
              tw`p-2 border-0 border-l-2 border-b border-r  border-gray-300`,
              openFaq[k] ? tw`bg-white border-pink-500` : tw`bg-blue-50`,
              k === 0 && tw`border-t`,
            ]}
            key={k}
          >
            <div css={tw`flex justify-between transition-all`}>
              <H2 css={tw`my-2`}>{item.question}</H2>
              {openFaq[k] ? (
                <MdKeyboardArrowUp
                  css={tw`text-pink-500`}
                  onClick={() => toggleFaq(k)}
                  size={40}
                />
              ) : (
                <MdKeyboardArrowDown size={40} onClick={() => toggleFaq(k)} />
              )}
            </div>

            <div
              css={[!openFaq[k] && tw`hidden transition-all duration-1000`]}
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
