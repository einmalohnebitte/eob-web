// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import styled from "styled-components";

import { FOOTER_HEIGHT } from "../../../constants/MediaQueries";
import { Section } from "../../@UI/Section";
import { FormVerkaufen } from "../FormVerkaufen";

export default {
  title: "Form",
} as Meta;

const Layout = styled.div`
  min-height: calc(100vh - ${FOOTER_HEIGHT}px);
`;

const Template: Story = (args) => (
  <>
    <Layout className="pt-16 md:pt-20">
      <Section>
        <FormVerkaufen />
      </Section>
    </Layout>
  </>
);

export const FormStory = Template.bind({});
