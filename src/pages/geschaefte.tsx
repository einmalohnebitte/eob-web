import { Loading } from "@/components/@UI/Loading";
import { Section } from "@/components/@UI/Section";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/PageSections/HeadMeta";
import {
  ShopsDocument,
  ShopsQuery,
} from "@/components/ShopsMap/Shops.cms.generated";
import { ShopsSideMenu } from "@/components/ShopsMap/ShopsSideMenu";
import { useReactQueryCms } from "@/components/useReactQuery";
import { graphCmsRequest } from "@/graphql/graphcms";
import { useTranslations } from "@/translate";
import { contextToLocale } from "@/translate/contextToLocale";
import { TranslationsDocument } from "@/translate/Translations.cms.generated";
import { Box, Button, TextInput } from "grommet";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import styled from "styled-components";
import tw from "twin.macro";

import { MQ_MOBILE, MQ_NOT_MOBILE } from "../constants/MediaQueries";

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

const MobileOpen = styled(Box)`
  @media ${MQ_NOT_MOBILE} {
    display: none;
  }
`;

const Shops: React.FC = () => {
  const intl = useTranslations();
  const { data, isLoading } = useReactQueryCms(ShopsDocument);

  const [search, setSearch] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  const [center, setCenter] = useState<[number, number]>([48.13743, 11.57549]);

  const [category, setCategory] = useState<
    ShopsQuery["shopCategories"][0] | null
  >(null);

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
      <Box>
        <OpenButton
          isVisible={!showSidebar}
          icon={<GrNext />}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          Open
        </OpenButton>
        <MobileOpen
          pad="small"
          width="100%"
          onClick={() => setIsOpenMobile(true)}
        >
          <TextInput
            name="search"
            placeholder={intl("SEARCH")}
            value={search ?? ""}
          />
        </MobileOpen>
        <ShopsMap center={center} shops={shops} height="100vh" />
      </Box>

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
      />
    </>
  );
};

export default withLayout()(Shops);
