import { BackgroundYellowWrapper } from "@/components/@UI/BackgroundWrapper";
import { Section, SplitSection } from "@/components/@UI/Section";
import { H1, H2 } from "@/components/@UI/Texts";
import {
  PageSectionsDocument,
  PageSectionsQuery,
} from "@/components/CmsQueries/PageSections.cms.generated";
import { FormVerkaufen } from "@/components/Forms/FormVerkaufen";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import tw from "twin.macro";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PageSectionsDocument, {
    page: "verkaufen",
    locale: contextToLocale(ctx),
  });
  return {
    props: data,
  };
};

const Home: React.FC<PageSectionsQuery> = ({ pages, pageSections }) => {
  return (
    <>
      <HeadMeta
        metaDescription={pages[0]?.metaDescription}
        metaKeywords={pages[0]?.metaKeywords}
      />
      <SplitSection.Section>
        <SplitSection.Side>
          <Image
            src={pageSections[0].picture[0].url}
            alt="side"
            width={350}
            height={250}
          />
        </SplitSection.Side>
        <SplitSection.Main>
          <H1>{pageSections[0].title}</H1>
          <div
            css={tw`py-4`}
            dangerouslySetInnerHTML={{
              __html: pageSections[0].content.html ?? "",
            }}
          />
        </SplitSection.Main>
      </SplitSection.Section>

      <BackgroundYellowWrapper>
        <Section>
          <H2>{pageSections[1].title}</H2>
          <div
            css={`
              ol {
                padding: 2rem;
                list-style: none;
                counter-reset: my-awesome-counter;
                li::before {
                  content: counter(my-awesome-counter);
                  font-weight: bold;
                  font-size: 3rem;
                  margin-right: 1rem;
                  font-family: "Lemonism-Regular", serif;
                  line-height: 1.5;
                }
                li {
                  counter-increment: my-awesome-counter;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                }
                div {
                  display: flex;
                }
              }

              ${tw`py-4 pr-4`}
            `}
            dangerouslySetInnerHTML={{
              __html: pageSections[1].content.html ?? "",
            }}
          />
        </Section>
        <Section>
          <H2>{pageSections[2].title}</H2>
          <div
            css={`
              ${tw`py-4 `}
              ul {
                padding: 2rem;
                text-indent: 10px;
                list-style: disc inside;
                div {
                  display: inline;
                }
              }
            `}
            dangerouslySetInnerHTML={{
              __html: pageSections[2].content.html ?? "",
            }}
          />
        </Section>
        <Section>
          <FormVerkaufen />
        </Section>
      </BackgroundYellowWrapper>
    </>
  );
};

export default withLayout()(Home);
