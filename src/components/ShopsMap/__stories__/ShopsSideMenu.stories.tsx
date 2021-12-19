// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { initialState } from "@/components/ShopsMap/useFetchMap";
import { shopsData } from "@/components/ShopsMap/__mocks__/shops.mocks";
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { ShopsSideMenu } from "../ShopsSideMenu";

export default {
  title: "ShopsSideMenu",
} as Meta;

const Template: Story = (args) => (
  <>
    <ShopsSideMenu
      onClose={() => console.log("close")}
      data={shopsData.data}
      isOpen={true}
      isOpenMobile={true}
      dispatchAction={() => {}}
      filters={initialState.filters}
    />
  </>
);

export const ShopsSideMenuStory = Template.bind({});
