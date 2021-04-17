import { BackgroundYellowWrapper } from "@/components/@UI/BackgroundWrapper";
import { Section, SplitSection } from "@/components/@UI/Section";
import { H1, H2 } from "@/components/@UI/Texts";
import { VerkaufenForm } from "@/components/Forms/VerkaufenForm";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/PageSections/HeadMeta";
import {
  PageSectionsDocument,
  PageSectionsQuery,
} from "@/components/PageSections/PageSections.cms.generated";
import { graphCmsRequest } from "@/graphql/graphcms";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import tw from "twin.macro";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PageSectionsDocument, {
    page: "Verkaufen",
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
                display: flex;
                flex-direction: row;
              }

              ${tw`py-4 pr-4`}
            `}
            dangerouslySetInnerHTML={{
              __html: pageSections[1].content.html ?? "",
            }}
          />
        </Section>
        <Section>
          <VerkaufenForm />
        </Section>
      </BackgroundYellowWrapper>
    </>
  );
};

export default withLayout()(Home);
