import { Flex } from "@/components/@UI/Flex";
import styles from "@/components/@UI/List.module.css";
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
import { FormStickerBestellen } from "@/components/Forms/FormStickerBestellen";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PageSectionsDocument, {
    page: "pack-mich-ein",
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
      <SplitSection>
        <Section>
          <H1>{pages[0].title}</H1>
          <div
            className="py-4"
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pages[0].content?.html ?? ""
            )}
          />
        </Section>
      </SplitSection>

      <SplitSection>
        <Flex basis="1/3" direction="column">
          {pageSections[0].picture.length >= 1  && (
            <Image
              src={pageSections[0].picture[0].url}
              alt="side"
              width={350}
              height={250}
            />
          )}
          {pageSections[0].picture.length >= 2  && (
            <Image
              src={pageSections[0].picture[1].url}
              alt="side"
              width={350}
              height={250}
            />
          )}
          {pageSections[0].picture.length >= 3  && (
            <Image
              src={pageSections[0].picture[2].url}
              alt="side"
              width={350}
              height={250}
            />
          )}
          {pageSections[0].picture.length >= 4  && (
            <Image
              src={pageSections[0].picture[3].url}
              alt="side"
              width={350}
              height={250}
            />
          )}
        </Flex>
        <Flex basis="2/3" direction="column">
          <H1>{pageSections[0].title}</H1>
          <div
            className="py-4"
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[0].content.html ?? ""
            )}
          />
        </Flex>
      </SplitSection>

      <Section>
        <FormStickerBestellen />
      </Section>

      <SplitSection>
        <Flex basis="1/3" direction="column">
          {pageSections[1].picture.length >= 1  && (
            <Image
              src={pageSections[1].picture[0].url}
              alt="side"
              width={350}
              height={250}
            />
          )}
          {pageSections[1].picture.length >= 2  && (
            <Image
              src={pageSections[1].picture[1].url}
              alt="side"
              width={350}
              height={250}
            />
          )}
          {pageSections[1].picture.length >= 3  && (
            <Image
              src={pageSections[1].picture[2].url}
              alt="side"
              width={350}
              height={250}
            />
          )}
          {pageSections[1].picture.length >= 4  && (
            <Image
              src={pageSections[1].picture[3].url}
              alt="side"
              width={350}
              height={250}
            />
          )}
        </Flex>
        <Flex basis="2/3" direction="column">
          <H1>{pageSections[1].title}</H1>
          <div
            className="py-4"
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[1].content.html ?? ""
            )}
          />
        </Flex>
      </SplitSection>
    </>
  );
};

export default withLayout()(Home);
