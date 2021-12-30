// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import styled from "styled-components";

import { FOOTER_HEIGHT } from "../../../constants/MediaQueries";
import { Section } from "../../@UI/Section";
import { AppFooter } from "../Footer";

export default {
  title: "Footer",
} as Meta;

const Layout = styled.div`
  min-height: calc(100vh - ${FOOTER_HEIGHT}px);
`;

const SampleText = `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
    Lorem Ipsum has been the industry's standard dummy text ever since the
    1500s, when an unknown printer took a galley of type and scrambled it to
    make a type specimen book. It has survived not only five centuries, but also
    the leap into electronic typesetting, remaining essentially unchanged. It
    was popularised in the 1960s with the release of Letraset sheets containing
    Lorem Ipsum passages, and more recently with desktop publishing software
    like Aldus PageMaker including versions of Lorem Ipsum.`;

const Template: Story = (args) => (
  <>
    <Layout className="pt-16 md:pt-20">
      <Section>{SampleText}</Section>
    </Layout>
    <AppFooter />
  </>
);

export const FooterStory = Template.bind({});
