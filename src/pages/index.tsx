import {
  PageSectionsDocument,
  PageSectionsQuery,
} from "@/components/CmsQueries/PageSections.cms.generated";
import { Goals } from "@/components/Home/2Goals";
import { Map } from "@/components/Home/3Map";
import { Social } from "@/components/Home/4Social";
import { Sponsors } from "@/components/Home/5Sponsors";
import { HomeSections } from "@/components/Home/HomeSections";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { graphCmsRequest } from "@/graphql/graphcms";
import { contextToLocale } from "@/translate/contextToLocale";
import { GetStaticProps } from "next";
import React from "react";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(PageSectionsDocument, {
    page: "Home",
    locale: contextToLocale(ctx),
  });
  return {
    props: data,
  };
};

const Home: React.FC<PageSectionsQuery> = (props) => {
  return (
    <>
      <HeadMeta
        metaDescription={props.pages[0]?.metaDescription}
        metaKeywords={props.pages[0]?.metaKeywords}
      />
      {props.pageSections.map((section, k) => (
        <HomeSections {...section} key={k} />
      ))}
      <Goals {...props} />
      <Map />
      <Social />
      <Sponsors />
    </>
  );
};

export default withLayout()(Home);
