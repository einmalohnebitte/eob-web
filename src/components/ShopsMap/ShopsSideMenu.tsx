import {
  Blue,
  BlueInverted,
  ButtonNoColor,
  Pink,
  PinkInverted,
  Yellow,
  YellowInverted,
} from "@/components/@UI/Buttons";
import { ShopsQuery } from "@/components/ShopsMap/Shops.cms.generated";
import {
  FilterActionType,
  FilterStateType,
} from "@/components/ShopsMap/useFetchMap";
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
  isOpen: boolean;
  isOpenMobile: boolean;
  data: ShopsQuery;
  filters: FilterStateType["filters"];
  dispatchAction: (action: FilterActionType) => void;
}> = ({ onClose, isOpenMobile, isOpen, filters, dispatchAction, data }) => {
  const intl = useTranslations();
  const [activeTab, setActiveTab] = useState<number>(0);
  if (!data?.shops || !data?.shopTowns || !data?.shopCategories) {
    return null;
  }
  const { shops, shopTowns, shopCategories, shopTypes, shopBundeslands } = data;
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
          onSearch={(search) =>
            dispatchAction({ type: "SET_SEARCH", payload: search })
          }
          search={filters.search ?? ""}
        />
      </div>
      <div>
        <div css={tw`flex justify-center`}>
          <ButtonNoColor
            onClick={() => setActiveTab(0)}
            css={[
              tw`text-2xl  border-solid  border-2 m-2`,
              activeTab === 0 ? Pink : PinkInverted,
            ]}
          >
            {intl("CATEGORIES")}
          </ButtonNoColor>

          <ButtonNoColor
            onClick={() => setActiveTab(2)}
            css={[
              tw`text-2xl  border-solid  border-2 m-2`,
              activeTab === 2 ? Blue : BlueInverted,
            ]}
          >
            {intl("Types")}
          </ButtonNoColor>

          <ButtonNoColor
            onClick={() => setActiveTab(1)}
            css={[
              tw`text-2xl  border-solid  border-2 m-2`,
              activeTab === 1 ? Yellow : YellowInverted,
            ]}
          >
            {intl("COUNTRY")}
          </ButtonNoColor>
        </div>

        {
          // eslint-disable-next-line no-nested-ternary
          activeTab === 0 ? (
            <div>
              {shopCategories.map((category) => (
                <ButtonNoColor
                  key={category.id}
                  onClick={() => {
                    dispatchAction({
                      type: "SET_CATEGORY",
                      payload: category.name,
                    });
                  }}
                  css={[
                    tw`m-2`,
                    category.name === filters.category ? Pink : PinkInverted,
                  ]}
                >
                  {category.name}
                </ButtonNoColor>
              ))}
            </div>
          ) : activeTab === 1 ? (
            <div>
              {shopBundeslands.map((town) => (
                <ButtonNoColor
                  onClick={() => {
                    dispatchAction({ type: "SET_TOWN", payload: town });
                  }}
                  css={[
                    tw`m-2`,
                    town.name === filters.town ? Yellow : YellowInverted,
                  ]}
                  key={town.id}
                >
                  {town.name}
                </ButtonNoColor>
              ))}
            </div>
          ) : (
            <div>
              {shopTypes.map((type) => (
                <ButtonNoColor
                  onClick={() => {
                    dispatchAction({ type: "SET_TYPE", payload: type.name });
                  }}
                  css={[
                    tw`m-2`,
                    type.name === filters.type ? Blue : BlueInverted,
                  ]}
                  key={type.id}
                >
                  {type.name}
                </ButtonNoColor>
              ))}
            </div>
          )
        }
      </div>
    </Sidebar>
  );
};
