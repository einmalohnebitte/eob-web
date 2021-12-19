import { Button } from "@/components/@UI/Buttons";
import { Loading } from "@/components/@UI/Loading";
import { Section } from "@/components/@UI/Section";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { Search } from "@/components/ShopsMap/Search";
import { ShopsSideMenu } from "@/components/ShopsMap/ShopsSideMenu";
import { useFetchMap } from "@/components/ShopsMap/useFetchMap";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { TranslationsDocument } from "@/hooks/useTranslations/Translations.cms.generated";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import styled from "styled-components";
import tw from "twin.macro";

import { MQ_MOBILE } from "../constants/MediaQueries";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(TranslationsDocument, {
    locale: contextToLocale(ctx),
  });

  return {
    props: data,
  };
};

const ShopsMap = dynamic(
  async () => (await import("../components/ShopsMap")).ShopsMap,
  { ssr: false }
);

const OpenButton = styled(Button)<{ isVisible: boolean }>`
  position: absolute;
  z-index: 999999;
  background: white;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  border-radius: 4px;
  margin-top: 100px;
  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  @media ${MQ_MOBILE} {
    display: none;
  }
`;

const Shops: React.FC = () => {
  const { isLoading, state, dispatchAction } = useFetchMap();

  const [showSidebar, setShowSidebar] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  if (isLoading || !state.data) {
    return (
      <Section
        css={`
          height: 70vh;
          ${tw`flex justify-center items-center`}
        `}
      >
        <Loading />
      </Section>
    );
  }

  return (
    <>
      <HeadMeta />
      <div>
        <OpenButton
          isVisible={!showSidebar}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <GrNext />
        </OpenButton>{" "}
        <div
          css={tw`p-2 w-full md:hidden`}
          role="presentation"
          onClick={() => setIsOpenMobile(true)}
        >
          <Search
            onSearch={(search) =>
              dispatchAction({ type: "SET_SEARCH", payload: search })
            }
            search={state.filters.search ?? ""}
            disabled={true}
          />
        </div>
        <ShopsMap
          center={state.filters.center}
          shops={state.shops}
          height="100vh"
        />
      </div>

      <ShopsSideMenu
        filters={state.filters}
        dispatchAction={dispatchAction}
        onClose={() => {
          setShowSidebar(false);
          setIsOpenMobile(false);
        }}
        isOpen={showSidebar}
        isOpenMobile={isOpenMobile}
        data={state.data}
      />
    </>
  );
};

export default withLayout()(Shops);
