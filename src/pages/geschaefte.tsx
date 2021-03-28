import { Loading } from "@/components/@UI/Loading";
import { Section } from "@/components/@UI/Section";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/PageSections/HeadMeta";
import { ShopsDocument } from "@/components/ShopsMap/Shops.cms.generated";
import { Shop, Town, useTownShops } from "@/components/ShopsMap/useShops";
import { useReactQueryCms } from "@/components/useReactQuery";
import { graphCmsRequest } from "@/graphql/graphcms";
import { useTranslations } from "@/translate";
import { contextToLocale } from "@/translate/contextToLocale";
import { TranslationsDocument } from "@/translate/Translations.cms.generated";
import { Box, Button, Tab, Tabs, TextInput } from "grommet";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React, { useRef, useState } from "react";
import { GrFormClose, GrNext } from "react-icons/gr";
import styled from "styled-components";
import tw from "twin.macro";

import { COLORS } from "../constants/colors";
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
  MQ_MOBILE,
  MQ_NOT_MOBILE,
} from "../constants/MediaQueries";

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

const ButtonContainer = styled.div`
  display: inline-block;
  padding: 20px;
`;

const Sidebar = styled.div<{ isOpen: boolean; isOpenMobile: boolean }>`
  height: 100%;
  width: ${({ isOpen }) => (isOpen ? "25%" : "0")};
  min-width: ${({ isOpen }) => (isOpen ? "400px" : "0")};
  position: fixed;
  z-index: 99999;
  top: ${HEADER_HEIGHT}px;
  left: 0;
  background-color: white;
  overflow-x: hidden;
  transition: 0.5s;

  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.65);
  border-radius: 4px;

  display: flex;
  flex-direction: column;

  @media ${MQ_MOBILE} {
    top: ${HEADER_HEIGHT_MOBILE}px;
    width: ${({ isOpenMobile }) => (isOpenMobile ? "100%" : "0")};
    min-width: ${({ isOpenMobile }) => (isOpenMobile ? "100%" : "0")};
  }
`;

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
  const { data, isLoading } = useTownShops();
  const { data: shopsData } = useReactQueryCms(ShopsDocument);

  const [search, setSearch] = useState<string | null>(null);
  const [showSidebar, setShowSidebar] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);
  const townRef = useRef<Town | undefined>(
    data?.Towns.find((t) => t.name?.toLowerCase() === "München".toLowerCase())
  );
  const shopsRef = useRef<Shop[] | undefined>(data?.Shops);
  const [center, setCenter] = useState<[number, number] | null>(null);
  const [category, setCategory] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<number>(0);

  const suggestionsRef = useRef<
    { label?: string; value?: string }[] | undefined
  >([]);

  const handleSearch = (searchValue: string) => {
    shopsRef.current = data?.Shops;
    if (category) {
      shopsRef.current = shopsRef.current?.filter(
        (s) =>
          (s.kategorien ?? []).filter((ct) => category === ct.name).length > 0
      );
    }
    if (searchValue) {
      const regexp = new RegExp(`${searchValue}`, "i");
      shopsRef.current = shopsRef.current?.filter((s) =>
        regexp.test(s.name ?? "")
      );
      suggestionsRef.current = shopsRef.current
        ?.slice(0, 6)
        .map((s) => ({ label: s.name, value: s.name }));
    }

    setSearch(searchValue);
  };

  if (data && !shopsRef.current) {
    shopsRef.current = data?.Shops;
  }

  if (isLoading || !data || !shopsRef.current || !shopsData?.shops) {
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
        <ShopsMap center={center} shops={shopsData?.shops} height="100vh" />
      </Box>

      <Sidebar isOpen={showSidebar} isOpenMobile={isOpenMobile}>
        <Box
          onClick={() => {
            setShowSidebar(false);
            setIsOpenMobile(false);
          }}
          pad="xsmall"
          align="end"
        >
          <GrFormClose />
        </Box>

        <Box width="medium" pad="small">
          <TextInput
            name="search"
            placeholder={intl("SEARCH")}
            onChange={(e) => {
              handleSearch(e.target?.value);
            }}
            value={search ?? ""}
            suggestions={suggestionsRef.current}
          />
        </Box>
        <Tabs
          style={{ height: "80%" }}
          onActive={(e) => {
            setActiveTab(e);
          }}
        >
          <Tab
            title={
              <Box
                style={{
                  color: activeTab === 0 ? COLORS.BRAND : COLORS.LIGHT_BLACK,
                }}
                pad="xsmall"
              >
                {intl("CATEGORIES")}
              </Box>
            }
          >
            <ButtonContainer>
              {shopsData?.shopCategories.map((c, k) => (
                <Button
                  primary={c.name === category}
                  margin="xsmall"
                  key={k}
                  label={c.name}
                  onClick={() => {
                    const currentCategory = c.name === category ? null : c.name;

                    shopsRef.current = data.Shops.filter(
                      (s) =>
                        (s.kategorien ?? []).filter(
                          (ct) =>
                            !currentCategory || currentCategory === ct.name
                        ).length > 0
                    );
                    setCategory(currentCategory ?? "");
                  }}
                ></Button>
              ))}
            </ButtonContainer>
          </Tab>
          <Tab
            title={
              <Box
                style={{
                  color: activeTab === 1 ? COLORS.BRAND : COLORS.LIGHT_BLACK,
                }}
                pad="xsmall"
              >
                {intl("TOWNS")}
              </Box>
            }
          >
            <ButtonContainer>
              {data.Towns.map((c, k) => (
                <Button
                  onClick={() => {
                    townRef.current = c;
                    console.log(JSON.parse(townRef.current?.lon ?? ""));
                    setCenter([
                      JSON.parse(townRef.current?.lat ?? ""),
                      JSON.parse(townRef.current?.lon ?? ""),
                    ]);
                  }}
                  primary={townRef.current?.name === c.name}
                  margin="xsmall"
                  key={k}
                  label={c.name}
                ></Button>
              ))}
            </ButtonContainer>
          </Tab>
        </Tabs>
      </Sidebar>
    </>
  );
};

export default withLayout()(Shops);
