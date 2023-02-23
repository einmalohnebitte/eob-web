import { Section } from "@/components/@UI/Section";
import { useTranslations } from "@/hooks/useTranslations";
import React from "react";
import { CardTitle } from "../@UI/CardWrapper";

export const AboutNav: React.FC = () => {
  const intl = useTranslations();
  return (
    <Section className="pb-0">
      <div className="grid grid-cols-2 text-center md:grid-cols-4">
        <CardTitle
          onClick={() => {
            window.location.hash = "#vision";
          }}
          title={intl("ABOUT_VISION")}
          color={"yellow"}
        />
        <CardTitle
          onClick={() => {
            window.location.hash = "#mission";
          }}
          title={intl("ABOUT_MISSION")}
          color={"pink"}
        />
        <CardTitle
          onClick={() => {
            window.location.hash = "#team";
          }}
          title={intl("ABOUT_TEAM")}
          color={"blue"}
        />

        <CardTitle
          onClick={() => {
            window.location.hash = "#network";
          }}
          title={intl("ABOUT_NETWORK")}
          color={"yellow"}
        />
      </div>
    </Section>
  );
};
