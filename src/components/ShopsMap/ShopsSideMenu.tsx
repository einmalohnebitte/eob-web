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

import { Search } from "./Search";

const Sidebar = styled.div<{ isOpen: boolean; isOpenMobile: boolean }>`
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
    <Sidebar
      className="flex overflow-x-hidden fixed left-0 flex-col pb-28 h-full bg-white rounded-md shadow-lg duration-500"
      isOpen={isOpen}
      isOpenMobile={isOpenMobile}
    >
      <div
        role="presentation"
        onClick={onClose}
        className={`p-2 flex justify-end`}
      >
        <MdClose size={25} />
      </div>

      <div className={`p-4`}>
        <Search
          suggestions={suggestions}
          onSearch={(search) =>
            dispatchAction({ type: "SET_SEARCH", payload: search })
          }
          search={filters.search ?? ""}
        />
      </div>
      <div>
        <div className={`flex justify-center`}>
          <ButtonNoColor
            onClick={() => setActiveTab(0)}
            className="m-2 text-2xl border-2 border-solid px-4"
            css={[activeTab === 0 ? Pink : PinkInverted]}
          >
            {intl("CATEGORIES")}
          </ButtonNoColor>

          <ButtonNoColor
            onClick={() => setActiveTab(2)}
            className="m-2 text-2xl border-2 border-solid px-4"
            css={[activeTab === 2 ? Blue : BlueInverted]}
          >
            {intl("Types")}
          </ButtonNoColor>

          <ButtonNoColor
            onClick={() => setActiveTab(1)}
            className="m-2 text-2xl border-2 border-solid px-4"
            css={[activeTab === 1 ? Yellow : YellowInverted]}
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
                  className="m-2"
                  css={[
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
                    dispatchAction({ type: "SET_STATE", payload: town });
                  }}
                  className="m-2"
                  css={[town.name === filters.state ? Yellow : YellowInverted]}
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
                  className="m-2"
                  css={[type.name === filters.type ? Blue : BlueInverted]}
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
