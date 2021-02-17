import { Goals } from "@/components/Home/2Goals";
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
    </>
  );
};

export default withLayout()(Home);
