import {
  Blue,
  BlueInverted,
  Button,
  Pink,
  PinkInverted,
  Yellow,
  YellowInverted,
} from "@/components/@UI/Buttons";
import { ShopsQuery } from "@/components/ShopsMap/Shops.cms.generated";
import { MQ_MOBILE } from "@/constants/MediaQueries";
import { useTranslations } from "@/hooks/useTranslations";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import tw from "twin.macro";

import { Search } from "./Search";

const Sidebar = styled.div<{ isOpen: boolean; isOpenMobile: boolean }>`
  ${tw`pb-28 h-full fixed bg-white flex left-0 overflow-x-hidden flex-col rounded-md shadow-lg duration-500`}
  width: ${({ isOpen }) => (isOpen ? "25%" : "0")};
  min-width: ${({ isOpen }) => (isOpen ? "400px" : "0")};
  z-index: 99999;
  top: ${90}px;

  @media ${MQ_MOBILE} {
    top: ${70}px;
    width: ${({ isOpenMobile }) => (isOpenMobile ? "100%" : "0")};
    min-width: ${({ isOpenMobile }) => (isOpenMobile ? "100%" : "0")};
  }
`;

export const ShopsSideMenu: React.FC<{
  onClose: () => void;
  onSearch: (key: string) => void;
  onSelectCategory: (category: ShopsQuery["shopCategories"][0]) => void;
  onSelectTown: (town: ShopsQuery["shopTowns"][0] | null) => void;
  onSelectType: (type: ShopsQuery["shopTypes"][0] | null) => void;
  isOpen: boolean;
  isOpenMobile: boolean;
  search: string | null;
  data: ShopsQuery;
  selectedCategory: ShopsQuery["shopCategories"][0] | null;
  selectedType: ShopsQuery["shopTypes"][0] | null;
}> = ({
  onClose,
  onSearch,
  onSelectCategory,
  onSelectTown,
  onSelectType,
  isOpenMobile,
  isOpen,
  search,
  selectedCategory,
  selectedType,
  data,
}) => {
  const intl = useTranslations();
  const [activeTab, setActiveTab] = useState<number>(0);
  const [town, setTown] = useState<ShopsQuery["shopTowns"][0] | null>(null);

  if (!data?.shops || !data?.shopTowns || !data?.shopCategories) {
    return null;
  }
  const { shops, shopTowns, shopCategories, shopTypes } = data;
  const suggestions = shops
    .slice(0, 6)
    .filter((s) => s.name)
    .map((s) => s.name);

  return (
    <Sidebar isOpen={isOpen} isOpenMobile={isOpenMobile}>
      <div role="presentation" onClick={onClose} css={tw`p-2 flex justify-end`}>
        <MdClose size={25} />
      </div>

      <div css={tw`p-4`}>
        <Search
          suggestions={suggestions}
          onSearch={onSearch}
          search={search ?? ""}
        />
      </div>
      <div>
        <div css={tw`flex justify-center`}>
          <Button
            onClick={() => setActiveTab(0)}
            css={[
              tw`text-2xl  border-solid  border-2 m-2`,
              activeTab === 0 ? Pink : PinkInverted,
            ]}
          >
            {intl("CATEGORIES")}
          </Button>

          <Button
            onClick={() => setActiveTab(2)}
            css={[
              tw`text-2xl  border-solid  border-2 m-2`,
              activeTab === 2 ? Blue : BlueInverted,
            ]}
          >
            {intl("Types")}
          </Button>

          <Button
            onClick={() => setActiveTab(1)}
            css={[
              tw`text-2xl  border-solid  border-2 m-2`,
              activeTab === 1 ? Yellow : YellowInverted,
            ]}
          >
            {intl("TOWNS")}
          </Button>
        </div>

        {
          // eslint-disable-next-line no-nested-ternary
          activeTab === 0 ? (
            <div>
              {shopCategories.map((c) => (
                <Button
                  key={c.id}
                  onClick={() => {
                    onSelectCategory(c);
                  }}
                  css={[tw`m-2`, c === selectedCategory ? Pink : PinkInverted]}
                >
                  {c.name}
                </Button>
              ))}
            </div>
          ) : activeTab === 1 ? (
            <div>
              {shopTowns.map((c) => (
                <Button
                  onClick={() => {
                    setTown(c);
                    onSelectTown(c);
                  }}
                  css={[tw`m-2`, c === town ? Yellow : YellowInverted]}
                  key={c.id}
                >
                  {c.name}
                </Button>
              ))}
            </div>
          ) : (
            <div>
              {shopTypes.map((c) => (
                <Button
                  onClick={() => {
                    onSelectType?.(c);
                  }}
                  css={[tw`m-2`, c === selectedType ? Blue : BlueInverted]}
                  key={c.id}
                >
                  {c.name}
                </Button>
              ))}
            </div>
          )
        }
      </div>
    </Sidebar>
  );
};
