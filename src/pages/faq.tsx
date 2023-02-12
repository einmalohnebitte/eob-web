import {
  FaqsDocument,
  FaqsQuery,
} from "@/components/CmsQueries/Faq.cms.generated";
import { withLayout } from "@/components/Layout";
import { useTranslations } from "@/hooks/useTranslations";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import classNames from "classnames";
import { GetStaticProps } from "next";
import React, { useState } from "react";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

import { Section } from "../components/@UI/Section";
import {
  dangerouslySetFormattedInnerHTML,
  H1,
  H2,
} from "../components/@UI/Texts";

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
        <H1 className={` mb-4 `}>{intl("FAQ")}</H1>

        {faqs.map((item, k) => (
          <div
            className={classNames(
              "p-2 border-0 border-l-2 border-b border-r  border-gray-300",
              openFaq[k] ? `bg-white border-pink-500` : `bg-blue-50`,
              k === 0 && `border-t`
            )}
            key={k}
          >
            <div className={`flex justify-between transition-all`}>
              <H2 className={`my-2 mb-4 text-4xl`}>{item.question}</H2>
              {openFaq[k] ? (
                <MdKeyboardArrowUp
                  className={`text-pink-500`}
                  onClick={() => toggleFaq(k)}
                  size={40}
                />
              ) : (
                <MdKeyboardArrowDown size={40} onClick={() => toggleFaq(k)} />
              )}
            </div>

            <div
              className={classNames(
                !openFaq[k] && `hidden transition-all duration-1000`
              )}
              dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
                item.answer?.html ?? ""
              )}
            />
          </div>
        ))}
      </Section>
    </>
  );
};

export default withLayout()(FaqPage);
