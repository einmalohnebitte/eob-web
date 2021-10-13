import { BackgroundBlueWrapper } from "@/components/@UI/BackgroundWrapper";
import { Section, SplitSection } from "@/components/@UI/Section";
import { H1, H2 } from "@/components/@UI/Texts";
import {
  PageSectionsDocument,
  PageSectionsQuery,
} from "@/components/CmsQueries/PageSections.cms.generated";
import { withLayout } from "@/components/Layout";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";
import { useInView } from "react-intersection-observer";
import tw from "twin.macro";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PageSectionsDocument, {
    page: "einkaufen",
    locale: contextToLocale(ctx),
  });
  return {
    props: data,
  };
};

const Einkaufen: React.FC<PageSectionsQuery> = ({ pageSections }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    // rootMargin: "300px 0px 300px 0px",
  });

  return (
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
            <Image
              src={pageSections[0].picture[0].url}
              alt="side"
              width={350}
              height={250}
            />
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
            <Image
              src={pageSections[1].picture[0].url}
              alt="side"
              width={350}
              height={300}
            />
          </SplitSection.Side>
        </SplitSection.Section>

        <SplitSection.Section>
          <SplitSection.Side>
            <Image
              src={pageSections[2].picture[0].url}
              alt="side"
              width={350}
              height={350}
              css={`
                border-radius: 13px;
              `}
            />
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
                bottom: -50px;
                position: relative;
                display: flex;
              `}
            >
              <div css={tw`content-between m-4`}>
                <Image
                  src={pageSections[3].picture[0].url}
                  alt="side"
                  width={250}
                  height={200}
                  css={`
                    border-radius: 13px;
                  `}
                />
                <Image
                  src={pageSections[3].picture[2].url}
                  alt="side"
                  width={250}
                  height={200}
                  css={`
                    border-radius: 13px;
                  `}
                />
              </div>
            </div>
            <div
              css={`
                left: 350px;
                bottom: 300px;
                position: relative;
                display: flex;
              `}
            >
              <Image
                src={pageSections[3].picture[1].url}
                alt="side"
                width={250}
                height={200}
                css={`
                  border-radius: 13px;
                `}
              />
            </div>
          </SplitSection.Side>
        </SplitSection.Section>

        <Section>
          <H2>{pageSections[4].title}</H2>
          <div
            css={`
              ${tw`py-4 `}
              ol {
                list-style: decimal;
              }
            `}
            dangerouslySetInnerHTML={{
              __html: pageSections[4].content.html ?? "",
            }}
          />
        </Section>
      </BackgroundBlueWrapper>
      <BackgroundBlueWrapper
        ref={ref}
        css={tw`flex justify-center p-10 md:p-0`}
      >
        {inView && (
          <div css={tw`flex justify-center py-20 md:w-3/5`}>
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
        )}{" "}
      </BackgroundBlueWrapper>
    </>
  );
};

export default withLayout()(Einkaufen);
