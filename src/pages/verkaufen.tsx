import { BackgroundWrapper } from "@/components/@UI/BackgroundWrapper";
import styles from "@/components/@UI/List.module.scss";
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
import { FormVerkaufen } from "@/components/Forms/FormVerkaufen";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import Image from "next/image";
import React from "react";

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
            className="py-4"
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[0].content.html ?? ""
            )}
          />
        </SplitSection.Main>
      </SplitSection.Section>

      <BackgroundWrapper color="yellow">
        <Section>
          <H2>{pageSections[1].title}</H2>
          <div
            className={`${styles.OLWrapper} py-4 pr-4`}
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[1].content.html ?? ""
            )}
          />
        </Section>
        <Section>
          <H2>{pageSections[2].title}</H2>
          <div
            className={`${styles.ULWrapper} py-4 `}
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              pageSections[2].content.html ?? ""
            )}
          />
        </Section>
        <Section>
          <FormVerkaufen />
        </Section>
      </BackgroundWrapper>
    </>
  );
};

export default withLayout()(Home);
