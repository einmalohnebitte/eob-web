import { BackgroundWrapper } from "@/components/@UI/BackgroundWrapper";
import styles from "@/components/@UI/List.module.scss";
import { Section, SplitSection } from "@/components/@UI/Section";
import { SponsorCard } from "@/components/@UI/SponsorCard";
import {
  dangerouslySetFormattedInnerHTML,
  H1,
  H2,
} from "@/components/@UI/Texts";
import {
  CityPartnersDocument,
  CityPartnersQuery,
} from "@/components/CmsQueries/CityPartners.cms.generated";
import {
  PageSectionsDocument,
  PageSectionsQuery,
} from "@/components/CmsQueries/PageSections.cms.generated";
import { FormVerbreiten } from "@/components/Forms/FormVerbreiten";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { useTranslations } from "@/hooks/useTranslations";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PageSectionsDocument, {
    page: "verbreiten",
    locale: contextToLocale(ctx),
  });
  const cityPartners = await graphCmsRequest(CityPartnersDocument);
  return {
    props: { ...data, cityPartners },
  };
};

const Home: React.FC<
  PageSectionsQuery & { cityPartners: CityPartnersQuery }
> = ({ pages, pageSections, cityPartners }) => {
  const intl = useTranslations();
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

      <BackgroundWrapper color="pink">
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
          <FormVerbreiten />
        </Section>
        <Section className="text-center">
          <H2>{intl("CITY_PARTNERS")}</H2>
          <div className="flex overflow-x-auto py-6 px-2">
            {cityPartners.cityPartners.map((c) => (
              <Link key={c.name} href={c.link ?? ""} passHref={true}>
                <SponsorCard src={c.logo?.url ?? ""} alt={c.name ?? ""} />
              </Link>
            ))}
          </div>
        </Section>
      </BackgroundWrapper>
    </>
  );
};

export default withLayout()(Home);
