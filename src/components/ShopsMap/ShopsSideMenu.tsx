import { Button } from "@/components/@UI/Buttons";
import { ShopsQuery } from "@/components/ShopsMap/Shops.cms.generated";
import {
  FilterActionType,
  FilterStateType,
} from "@/components/ShopsMap/useFetchMap";
import { MQ_MD } from "@/constants/MediaQueries";
import { useTranslations } from "@/hooks/useTranslations";
import classNames from "classnames";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";

import { Search } from "./Search";

const Sidebar = styled.div<{ isOpen: boolean; isOpenMobile: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "25%" : "0")};
  min-width: ${({ isOpen }) => (isOpen ? "400px" : "0")};
  z-index: 99999;
  top: ${90}px;

  @media ${MQ_MD} {
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
  const { shops, shopCategories, shopTypes, shopBundeslands } = data;
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
          <Button
            onClick={() => setActiveTab(0)}
            color={activeTab === 0 ? "pink" : "pink-inverted"}
            padding="s"
            className={classNames("m-2 text-2xl border-2 border-solid px-4")}
          >
            {intl("CATEGORIES")}
          </Button>

          <Button
            onClick={() => setActiveTab(2)}
            color={activeTab === 2 ? "blue" : "blue-inverted"}
            padding="s"
            className={classNames("m-2 text-2xl border-2 border-solid px-4")}
          >
            {intl("Types")}
          </Button>

          <Button
            onClick={() => setActiveTab(1)}
            color={activeTab === 1 ? "yellow" : "yellow-inverted"}
            padding="s"
            className={classNames("m-2 text-2xl border-2 border-solid px-4")}
          >
            {intl("COUNTRY")}
          </Button>
        </div>

        {
          // eslint-disable-next-line no-nested-ternary
          activeTab === 0 ? (
            <div>
              {shopCategories.map((category) => (
                <Button
                  key={category.id}
                  color={
                    category.name === filters.category
                      ? "pink"
                      : "pink-inverted"
                  }
                  onClick={() => {
                    dispatchAction({
                      type: "SET_CATEGORY",
                      payload: category.name,
                    });
                  }}
                  className={classNames("m-2")}
                >
                  {category.name}
                </Button>
              ))}
            </div>
          ) : activeTab === 1 ? (
            <div>
              {shopBundeslands.map((state) => (
                <Button
                  color={
                    state.name === filters.state ? "yellow" : "yellow-inverted"
                  }
                  onClick={() => {
                    dispatchAction({ type: "SET_STATE", payload: state });
                  }}
                  className={classNames("m-2")}
                  key={state.id}
                >
                  {state.name}
                </Button>
              ))}
            </div>
          ) : (
            <div>
              {shopTypes.map((type) => (
                <Button
                  color={type.name === filters.type ? "blue" : "blue-inverted"}
                  onClick={() => {
                    dispatchAction({ type: "SET_TYPE", payload: type.name });
                  }}
                  className={classNames("m-2")}
                  key={type.id}
                >
                  {type.name}
                </Button>
              ))}
            </div>
          )
        }
      </div>
    </Sidebar>
  );
};
