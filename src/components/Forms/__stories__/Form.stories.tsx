// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Meta, Story } from "@storybook/react/types-6-0";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { FOOTER_HEIGHT } from "../../../constants/MediaQueries";
import { Section } from "../../@UI/Section";
import { FormVerkaufen } from "../FormVerkaufen";

export default {
  title: "Form",
} as Meta;

const A = styled.a`
  ${tw`m-4`}
`;

const Layout = styled.div`
  ${tw`pt-16 md:pt-20`}
  min-height: calc(100vh - ${FOOTER_HEIGHT}px);
`;

const Template: Story = (args) => (
  <>
    <Layout>
      <Section>
        <FormVerkaufen />
      </Section>
    </Layout>
  </>
);

export const FormStory = Template.bind({});
