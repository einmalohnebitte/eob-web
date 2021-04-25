import { BackgroundPinkWrapper } from "@/components/@UI/BackgroundWrapper";
import { Section, SplitSection } from "@/components/@UI/Section";
import { SponsorCard } from "@/components/@UI/SponsorCard";
import { H1, H2 } from "@/components/@UI/Texts";
import { FormVerbreiten } from "@/components/Forms/FormVerbreiten";
import { withLayout } from "@/components/Layout";
import {
  CityPartnersDocument,
  CityPartnersQuery,
} from "@/components/PageSections/CityPartners.cms.generated";
import { HeadMeta } from "@/components/PageSections/HeadMeta";
import {
  PageSectionsDocument,
  PageSectionsQuery,
} from "@/components/PageSections/PageSections.cms.generated";
import { graphCmsRequest } from "@/graphql/graphcms";
import { useTranslations } from "@/translate";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import tw from "twin.macro";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PageSectionsDocument, {
    page: "Verbreiten",
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
            css={tw`py-4`}
            dangerouslySetInnerHTML={{
              __html: pageSections[0].content.html ?? "",
            }}
          />
        </SplitSection.Main>
      </SplitSection.Section>

      <BackgroundPinkWrapper>
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
          <FormVerbreiten />
        </Section>
        <Section css={tw` text-center`}>
          <H2>{intl("CITY_PARTNERS")}</H2>
          <div css={tw`px-2 py-6  flex overflow-x-auto`}>
            {cityPartners.cityPartners.map((c) => (
              <Link key={c.name} href={c.link ?? ""}>
                <SponsorCard src={c.logo?.url ?? ""} alt={c.name ?? ""} />
              </Link>
            ))}
          </div>
        </Section>
      </BackgroundPinkWrapper>
    </>
  );
};

export default withLayout()(Home);
