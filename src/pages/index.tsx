import {
  PageSectionsDocument,
  PageSectionsQuery,
} from "@/components/CmsQueries/PageSections.cms.generated";
import { ShopsNumberDocument } from "@/components/CmsQueries/ShopsNumber.cms.generated";
import { Goals } from "@/components/Home/2Goals";
import { Map } from "@/components/Home/3Map";
import { Social } from "@/components/Home/4Social";
import { Sponsors } from "@/components/Home/5Sponsors";
import { HomeSections } from "@/components/Home/HomeSections";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import React from "react";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PageSectionsDocument, {
    page: "Home",
    locale: contextToLocale(ctx),
  });
  const shops = await graphCmsRequest(ShopsNumberDocument);
  return {
    props: { ...data, shops: shops.shopsConnection.aggregate.count },
  };
};

const Home: React.FC<PageSectionsQuery & { shops: number }> = (props) => {
  return (
    <>
      <HeadMeta
        metaDescription={props.pages[0]?.metaDescription}
        metaKeywords={props.pages[0]?.metaKeywords}
      />
      {props.pageSections.map((section, k) => (
        <HomeSections {...section} key={k} shops={props.shops} />
      ))}
      <Goals {...props} />
      <Map />
      <Social />
      <Sponsors />
    </>
  );
};

export default withLayout()(Home);
