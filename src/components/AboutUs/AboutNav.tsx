import { Card } from "@/components/@UI/Card";
import { Section } from "@/components/@UI/Section";
import { useTranslations } from "@/hooks/useTranslations";
import React from "react";
import tw from "twin.macro";

export const AboutNav: React.FC = () => {
  const intl = useTranslations();
  return (
    <Section css={tw`pb-0`}>
      <div css={tw`grid grid-cols-2 md:grid-cols-4 text-center`}>
        <Card
          onClick={() => {
            window.location.hash = "#vision";
          }}
          title={intl("ABOUT_VISION")}
          color={"yellow"}
        ></Card>
        <Card
          onClick={() => {
            window.location.hash = "#mission";
          }}
          title={intl("ABOUT_MISSION")}
          color={"pink"}
        ></Card>
        <Card
          onClick={() => {
            window.location.hash = "#team";
          }}
          title={intl("ABOUT_TEAM")}
          color={"blue"}
        ></Card>

        <Card
          onClick={() => {
            window.location.hash = "#network";
          }}
          title={intl("ABOUT_NETWORK")}
          color={"yellow"}
        ></Card>
      </div>
    </Section>
  );
};
