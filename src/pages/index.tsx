import { Goals } from "@/components/Home/2Goals";
import { Map } from "@/components/Home/3Map";
import { Social } from "@/components/Home/4Social";
import { Sponsors } from "@/components/Home/5Sponsors";
import {
  HomePageDocument,
  HomePageQuery,
} from "@/components/Home/Home.generated";
import { HomeSections } from "@/components/Home/HomeSections";
import { withLayout } from "@/components/Layout";
import { graphCmsRequest } from "@/graphql/graphcms";
import { GetStaticProps } from "next";
import React from "react";

export const getStaticProps: GetStaticProps = async () => {
  const data = await graphCmsRequest(HomePageDocument);

  return {
    props: data,
  };
};

const Home: React.FC<HomePageQuery> = (props) => {
  return (
    <>
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
