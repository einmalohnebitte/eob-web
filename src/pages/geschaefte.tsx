import { Button } from "@/components/@UI/Buttons";
import { Loading } from "@/components/@UI/Loading";
import { Section } from "@/components/@UI/Section";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { Search } from "@/components/ShopsMap/Search";
import {
  ShopsDocument,
  ShopsQuery,
} from "@/components/ShopsMap/Shops.cms.generated";
import { ShopsSideMenu } from "@/components/ShopsMap/ShopsSideMenu";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { TranslationsDocument } from "@/hooks/useTranslations/Translations.cms.generated";
import { graphCmsRequest } from "@/server/graphcms";
import { useReactQuery } from "@correttojs/next-utils/useReactQuery";
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
  const { data, isLoading } = useReactQuery(
    ShopsDocument,
    {},
    {
      url: `https://api-eu-central-1.graphcms.com/v2/${process.env.GQL_CMS_ID}/master`,
    }
  );

  const [search, setSearch] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const [center, setCenter] = useState<[number, number]>([51.1657, 10.2336]);

  const [category, setCategory] = useState<
    ShopsQuery["shopCategories"][0] | null
  >(null);

  const [type, setType] = useState<ShopsQuery["shopTypes"][0] | null>(null);

  if (isLoading || !data?.shops) {
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

  let { shops } = data;
  if (category?.name) {
    shops = shops?.filter(
      (s) =>
        (s.categories ?? []).filter((ct) => category.name === ct.name).length >
        0
    );
  }
  if (search) {
    const regexp = new RegExp(`${search}`, "i");
    shops = shops?.filter((s) => regexp.test(s.name ?? ""));
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
        </OpenButton>
        <div
          css={tw`p-2 w-full md:hidden`}
          role="presentation"
          onClick={() => setIsOpenMobile(true)}
        >
          <Search search={search ?? ""} disabled={true} />
        </div>
        <ShopsMap center={center} shops={shops} height="100vh" />
      </div>

      <ShopsSideMenu
        onClose={() => {
          setShowSidebar(false);
          setIsOpenMobile(false);
        }}
        onSearch={setSearch}
        isOpen={showSidebar}
        isOpenMobile={isOpenMobile}
        search={search}
        onSelectCategory={(c) => {
          setCategory(category === c ? null : c);
        }}
        selectedCategory={category}
        data={data}
        onSelectTown={(c) =>
          setCenter([c?.location?.latitude ?? 0, c?.location?.longitude ?? 0])
        }
        selectedType={type}
        onSelectType={(c) => setType(type === c ? null : c)}
      />
    </>
  );
};

export default withLayout()(Shops);
