import { BackgroundPinkWrapper } from "@/components/@UI/BackgroundWrapper";
import { Section, SplitSection } from "@/components/@UI/Section";
import { H1 } from "@/components/@UI/Texts";
import { VerbreitenForm } from "@/components/Forms/VerbreitenForm";
import {
  HomePageDocument,
  HomePageQuery,
} from "@/components/Home/Home.generated";
import { withLayout } from "@/components/Layout";
import { graphCmsRequest } from "@/graphql/graphcms";
import { GetStaticProps } from "next";
import React from "react";
import tw from "twin.macro";

export const getStaticProps: GetStaticProps = async () => {
  const data = await graphCmsRequest(HomePageDocument, { page: "Verkaufen" });
  return {
    props: data,
  };
};

const Home: React.FC<HomePageQuery> = ({ pageSections }) => {
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

      <BackgroundPinkWrapper>
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
          <VerbreitenForm />
        </Section>
      </BackgroundPinkWrapper>
    </>
  );
};

export default withLayout()(Home);
