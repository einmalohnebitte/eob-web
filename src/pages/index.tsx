import {
  HomePageDocument,
  HomePageQuery,
} from "@/components/Home/Home.generated";
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
  return <>Test{props.pageSections.map((page) => page.title)}</>;
};

export default Home;
