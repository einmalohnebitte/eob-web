import { Section } from "@/components/@UI/Section";
import { PageSectionsQuery } from "@/components/CmsQueries/PageSections.cms.generated";
import { Hero } from "@/components/Home/1Hero";
import React from "react";
import { dangerouslySetFormattedInnerHTML } from "../@UI/Texts";

export const HomeSections: React.FC<
  PageSectionsQuery["pageSections"][0] & { shops: number }
> = (props) => {
  switch (props.code) {
    case "hero":
      return <Hero {...props} />;
    case "subheader":
      return (
        <Section>
          <div
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              props.content.html ?? ""
            )}
          />
        </Section>
      );
    default:
      return null;
  }
};
