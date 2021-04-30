import { Card } from "@/components/@UI/Card";
import { PageSectionsQuery } from "@/components/CmsQueries/PageSections.cms.generated";
import { useTranslations } from "@/hooks/useTranslations";
import React from "react";
import tw from "twin.macro";

import { Section } from "../@UI/Section";

export const Goals: React.FC<PageSectionsQuery> = ({ pageSections }) => {
  const intl = useTranslations();
  const buy = pageSections.find((s) => s.code === "einkaufen");
  const sell = pageSections.find((s) => s.code === "verkaufen");
  const spread = pageSections.find((s) => s.code === "verbreiten");

  return (
    <div
      css={`
        background-image: linear-gradient(#dddddd, white);
      `}
    >
      <Section css={tw` flex`}>
        <Card
          color="blue"
          title={intl("BUY")}
          img={buy?.picture[0].url}
          resize={true}
          messageHtml={buy?.content.html}
          linkTitle={intl("READ_MORE")}
          linkTo={"/einkaufen"}
        />
        <Card
          color="yellow"
          img={sell?.picture[0].url}
          title={intl("SELL")}
          resize={true}
          messageHtml={sell?.content.html}
          linkTitle={intl("READ_MORE")}
          linkTo={"/verkaufen"}
        />
        <Card
          color="pink"
          img={spread?.picture[0].url}
          title={intl("SPREAD")}
          resize={true}
          messageHtml={spread?.content.html}
          linkTitle={intl("READ_MORE")}
          linkTo={"/verbreiten"}
        />
      </Section>
    </div>
  );
};
