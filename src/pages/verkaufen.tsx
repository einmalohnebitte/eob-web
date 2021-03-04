import { BackgroundYellowWrapper } from "@/components/@UI/BackgroundWrapper";
import { Section, SplitSection } from "@/components/@UI/Section";
import { H1 } from "@/components/@UI/Texts";
import { VerkaufenForm } from "@/components/Forms/VerkaufenForm";
import { withLayout } from "@/components/Layout";
import {
  PageSectionsDocument,
  PageSectionsQuery,
} from "@/components/PageSections/PageSections.cms.generated";
import { graphCmsRequest } from "@/graphql/graphcms";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
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

const Home: React.FC<PageSectionsQuery> = ({ pageSections }) => {
  return (
    <>
      <SplitSection.Section>
        <SplitSection.Side>
          <picture>
            <img src="/images/Verkaufen_Small.svg" alt="side" />
          </picture>
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
          <H1>{pageSections[1].title}</H1>
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
