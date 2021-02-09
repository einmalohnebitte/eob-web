import {
  HomePageDocument,
  HomePageQuery,
} from "@/components/Home/Home.generated";
import { graphCmsRequest } from "@/graphql/graphcms";
import { GetStaticProps } from "next";
import React from "react";

import { Hero } from "../components/Home/1Hero";
import { Goals } from "../components/Home/2Goals";
import { Map } from "../components/Home/3Map";
import { Social } from "../components/Home/4Social";
import { Sponsors } from "../components/Home/5Sponsors";
import { withGrommetTheme } from "../components/Layout/withLayout";

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
