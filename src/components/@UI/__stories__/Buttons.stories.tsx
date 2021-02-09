// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";

import { ButtonBlue, ButtonPink, ButtonYellow } from "../Buttons";

export default {
  title: "UI/Button",
} as Meta;

const Template: Story<React.ButtonHTMLAttributes<any>> = (args: any) => (
  <ButtonBlue {...args}>Test</ButtonBlue>
);

export const Blue = Template.bind({});

const TemplateP: Story<React.ButtonHTMLAttributes<any>> = (args: any) => (
  <ButtonPink {...args}>Test</ButtonPink>
);

export const Pink = TemplateP.bind({});

const TemplateY: Story<React.ButtonHTMLAttributes<any>> = (args: any) => (
  <ButtonYellow {...args}>Test</ButtonYellow>
);

export const Yellow = TemplateY.bind({});
