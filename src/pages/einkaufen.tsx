import { BackgroundBlueWrapper } from "@/components/@UI/BackgroundWrapper";
import { SplitSection } from "@/components/@UI/Section";
import { H1, H2 } from "@/components/@UI/Texts";
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
  const data = await graphCmsRequest(HomePageDocument, { page: "Einkaufen" });
  return {
    props: data,
  };
};

const Einkaufen: React.FC<HomePageQuery> = ({ pageSections }) => (
  <>
    <div>
      <SplitSection.Section>
        <SplitSection.Main>
          <H1>{pageSections[0].title}</H1>
          <div
            css={tw`py-4`}
            dangerouslySetInnerHTML={{
              __html: pageSections[0].content.html ?? "",
            }}
          />
        </SplitSection.Main>
        <SplitSection.Side>
          <img src={pageSections[0].picture[0].url} alt="side" />
        </SplitSection.Side>
      </SplitSection.Section>
    </div>
    <BackgroundBlueWrapper>
      <SplitSection.Section>
        <SplitSection.Main
          css={`
            h2 {
              ${tw`font-lemonism`}
              font-size: 2.25rem;
              line-height: 2rem;
            }
            p {
              font-size: 1.25rem;
              line-height: 2rem;
            }

            ${tw`py-4 pr-4`}
          `}
          dangerouslySetInnerHTML={{
            __html: pageSections[1].content.html ?? "",
          }}
        />
        <SplitSection.Side>
          <img src={pageSections[1].picture[0].url} alt="side" />
        </SplitSection.Side>
      </SplitSection.Section>

      <SplitSection.Section>
        <SplitSection.Side>
          <img src={pageSections[2].picture[0].url} alt="side" />
        </SplitSection.Side>
        <SplitSection.Main>
          <H2>{pageSections[2].title}</H2>
          <div
            css={tw`py-4`}
            dangerouslySetInnerHTML={{
              __html: pageSections[2].content.html ?? "",
            }}
          />
        </SplitSection.Main>
      </SplitSection.Section>

      <SplitSection.Section>
        <SplitSection.Main
          css={`
            flex: 1 !important;
          `}
        >
          <H2>{pageSections[3].title}</H2>
          <div
            css={`
              ${tw`py-4 `}
              ol {
                list-style: decimal;
              }
            `}
            dangerouslySetInnerHTML={{
              __html: pageSections[3].content.html ?? "",
            }}
          />
        </SplitSection.Main>
        <SplitSection.Side
          css={`
            flex: 1 !important;
          `}
        >
          <div
            css={`
              bottom: -100px;
              position: relative;
              display: flex;
            `}
          >
            <div css={tw`self-center m-2`}>
              <img
                src={pageSections[3].picture[0].url}
                alt="side"
                css={tw`pb-4`}
              />
              <img src={pageSections[3].picture[2].url} alt="side" />
            </div>
            <div css={tw`self-center m-2`}>
              <img src={pageSections[3].picture[1].url} alt="side" />
            </div>
          </div>
        </SplitSection.Side>
      </SplitSection.Section>
    </BackgroundBlueWrapper>
    <BackgroundBlueWrapper css={tw`flex justify-center p-10 md:p-0`}>
      <div css={tw`md:w-3/5 py-20 flex justify-center`}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/s6bm1Z76jQY"
          frameBorder="0"
          title="video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          css={tw`max-w-full`}
        ></iframe>
      </div>
    </BackgroundBlueWrapper>
  </>
);

export default withLayout()(Einkaufen);
