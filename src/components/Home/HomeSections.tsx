import { Section } from "@/components/@UI/Section";
import { Hero } from "@/components/Home/1Hero";
import { HomePageQuery } from "@/components/Home/Home.generated";
import React from "react";

export const HomeSections: React.FC<HomePageQuery["pageSections"][0]> = (
  props
) => {
  switch (props.code) {
    case "hero":
      return <Hero {...props} />;
    case "subheader":
      return (
        <Section>
          <div
            dangerouslySetInnerHTML={{
              __html: props.content.html ?? "",
            }}
          />
        </Section>
      );
    default:
      return null;
  }
};
