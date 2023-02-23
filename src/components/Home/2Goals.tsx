import { Card } from "@/components/@UI/Card";
import { PageSectionsQuery } from "@/components/CmsQueries/PageSections.cms.generated";
import { useTranslations } from "@/hooks/useTranslations";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BackgroundWrapper } from "../@UI/BackgroundWrapper";
import { BrandColors, CardWrapper, getTextColor } from "../@UI/CardWrapper";

import { Section } from "../@UI/Section";
import { dangerouslySetFormattedInnerHTML, H2 } from "../@UI/Texts";

const CardGoal: React.FC<{
  src: string;
  title: string;
  href: string;
  messageHtml?: string;
  color: BrandColors;
}> = ({ src, title, href, color, messageHtml }) => {
  const router = useRouter();
  const intl = useTranslations();
  return (
    <CardWrapper
      color={color}
      onClick={(e) => {
        router.push(href);
      }}
    >
      <Image
        width={200}
        height={300}
        className="h-52 self-center "
        src={src}
        alt={title}
      />
      <div className="p-4">
        <H2>{title}</H2>
        {messageHtml && (
          <div
            className="mt-2 text-gray-500"
            dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
              messageHtml
            )}
          />
        )}
      </div>
      <div
        className={classNames(
          "flex-grow flex justify-end flex-col m-2",
          getTextColor(color)
        )}
      >
        <Link legacyBehavior href={href}>
          <a className="hover:underline">{intl("READ_MORE")}</a>
        </Link>
      </div>
    </CardWrapper>
  );
};

export const Goals: React.FC<PageSectionsQuery> = ({ pageSections }) => {
  const intl = useTranslations();
  const buy = pageSections.find((s) => s.code === "einkaufen");
  const sell = pageSections.find((s) => s.code === "verkaufen");
  const spread = pageSections.find((s) => s.code === "verbreiten");

  return (
    <BackgroundWrapper vibrantColor="#dddddd">
      <Section className="sm:flex ">
        <CardGoal
          color="blue"
          title={intl("BUY")}
          src={buy?.picture[0].url ?? ""}
          messageHtml={buy?.content.html}
          href={"/einkaufen"}
        />
        <CardGoal
          color="yellow"
          src={sell?.picture[0].url ?? ""}
          title={intl("SELL")}
          messageHtml={sell?.content.html}
          href={"/verkaufen"}
        />
        <CardGoal
          color="pink"
          src={spread?.picture[0].url ?? ""}
          title={intl("SPREAD")}
          messageHtml={spread?.content.html}
          href={"/verbreiten"}
        />
      </Section>
    </BackgroundWrapper>
  );
};
