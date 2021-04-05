import { ShopsQuery } from "@/components/ShopsMap/Shops.cms.generated";
import { COLORS } from "@/constants/colors";
import {
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
  MQ_MOBILE,
} from "@/constants/MediaQueries";
import { useTranslations } from "@/translate";
import { Box, Button, Tab, Tabs, TextInput } from "grommet";
import React, { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import styled from "styled-components";

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

const ButtonContainer = styled.div`
  display: inline-block;
  padding: 20px;
`;

export const ShopsSideMenu: React.FC<{
  onClose: () => void;
  onSearch: (key: string) => void;
  onSelectCategory: (category: ShopsQuery["shopCategories"][0]) => void;
  onSelectTown: (town: ShopsQuery["shopTowns"][0] | null) => void;
  isOpen: boolean;
  isOpenMobile: boolean;
  search: string | null;
  data: ShopsQuery;
  selectedCategory: ShopsQuery["shopCategories"][0] | null;
}> = ({
  onClose,
  onSearch,
  onSelectCategory,
  onSelectTown,
  isOpenMobile,
  isOpen,
  search,
  selectedCategory,
  data,
}) => {
  const intl = useTranslations();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [town, setTown] = useState<ShopsQuery["shopTowns"][0] | null>(null);

  if (!data?.shops || !data?.shopTowns || !data?.shopCategories) {
    return null;
  }
  const { shops, shopTowns, shopCategories } = data;
  const suggestions = shops
    .slice(0, 6)
    .filter((s) => s.name)
    .map((s) => ({ label: s.name, value: s.name }));
  return (
    <Sidebar isOpen={isOpen} isOpenMobile={isOpenMobile}>
      <Box onClick={onClose} pad="xsmall" align="end">
        <GrFormClose />
      </Box>

      <Box width="medium" pad="small">
        <TextInput
          name="search"
          placeholder={intl("SEARCH")}
          onChange={(e) => onSearch(e.target?.value)}
          value={search ?? ""}
          suggestions={suggestions}
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
            {shopCategories.map((c) => (
              <Button
                primary={c === selectedCategory}
                margin="xsmall"
                key={c.id}
                label={c.name}
                onClick={() => {
                  onSelectCategory(c);
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
            {shopTowns.map((c) => (
              <Button
                onClick={() => {
                  setTown(c);
                  onSelectTown(c);
                }}
                primary={town === c}
                margin="xsmall"
                key={c.id}
                label={c.name}
              ></Button>
            ))}
          </ButtonContainer>
        </Tab>
      </Tabs>
    </Sidebar>
  );
};
