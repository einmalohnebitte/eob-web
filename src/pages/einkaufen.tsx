import { BackgroundWrapper } from "@/components/@UI/BackgroundWrapper";
import { Section, SplitSection } from "@/components/@UI/Section";
import {
  dangerouslySetFormattedInnerHTML,
  H1,
  H2,
} from "@/components/@UI/Texts";
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
  });

  return (
    <>
      <div>
        <SplitSection.Section>
          <SplitSection.Main>
            <H1>{pageSections[0].title}</H1>
            <div
              className="py-4"
              dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
                pageSections[0].content.html ?? ""
              )}
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
      <BackgroundWrapper color="blue">
        <SplitSection.Section>
          <SplitSection.Main
            className="py-4 pr-4"
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[1].content.html ?? ""
            )}
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
              className={"rounded-xl"}
            />
          </SplitSection.Side>
          <SplitSection.Main>
            <H2>{pageSections[2].title}</H2>
            <div
              className="py-4"
              dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
                pageSections[2].content.html ?? ""
              )}
            />
          </SplitSection.Main>
        </SplitSection.Section>

        <SplitSection.Section>
          <div className="flex  basis-2/3 flex-col lg:basis-1/2">
            <H2>{pageSections[3].title}</H2>
            <div
              className="py-4"
              dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
                pageSections[3].content.html ?? ""
              )}
            />
          </div>
          <div className="flex basis-1/3 flex-col gap-4 lg:grid lg:basis-1/2 lg:grid-flow-col lg:grid-cols-2">
            <Image
              src={pageSections[3].picture[0].url}
              alt="side"
              width={250}
              height={200}
              className={"flex self-center rounded-xl"}
            />
            <Image
              src={pageSections[3].picture[2].url}
              alt="side"
              width={250}
              height={200}
              className={"flex self-center rounded-xl"}
            />
            <Image
              src={pageSections[3].picture[1].url}
              alt="side"
              width={250}
              height={200}
              className={"flex self-center rounded-xl lg:row-span-2"}
            />
          </div>
        </SplitSection.Section>

        <Section>
          <H2>{pageSections[4].title}</H2>
          <div
            className="py-4"
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[4].content.html ?? ""
            )}
          />
        </Section>
      </BackgroundWrapper>
      <BackgroundWrapper
        ref={ref}
        className={`flex justify-center p-10 md:p-0`}
        color="blue"
      >
        {inView && (
          <div className={`flex justify-center py-20 md:w-3/5`}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/s6bm1Z76jQY"
              frameBorder="0"
              title="video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              className={`max-w-full`}
            ></iframe>
          </div>
        )}
      </BackgroundWrapper>
    </>
  );
};

export default withLayout()(Einkaufen);
