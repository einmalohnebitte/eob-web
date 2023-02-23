import { AnchorPointer } from "@/components/@UI/AnchorPointer";
import { Grid } from "@/components/@UI/Grid";
import { Section } from "@/components/@UI/Section";
import { dangerouslySetFormattedInnerHTML, H2 } from "@/components/@UI/Texts";
import { MembersQuery } from "@/components/CmsQueries/Members.cms.generated";
import { useTranslations } from "@/hooks/useTranslations";
import React, { useState } from "react";
import Link from "next/link";
import classNames from "classnames";
import { BackgroundWrapper } from "../@UI/BackgroundWrapper";
import styles from "./AboutNetwork.module.css";
import { CardWrapper, getBorderColor, getTextColor } from "../@UI/CardWrapper";

export const AboutNetwork: React.FC<{
  networks: MembersQuery["networks"];
  vibrantColor: string;
}> = ({ networks, vibrantColor }) => {
  const intl = useTranslations();
  const letters: any = {};

  networks.sort((a, b) => {
    if ((a?.title ?? "") < (b?.title ?? "")) {
      return -1;
    }
    if ((a?.title ?? "") > (b?.title ?? "")) {
      return 1;
    }
    return 0;
  });

  networks.forEach((n) => {
    const letter: string = n.title?.substr(0, 1) ?? "";
    if (!letters[letter]) {
      letters[letter] = letter;
    }
  });

  const [filter, setFilter] = useState<string | null>(null);

  return (
    <BackgroundWrapper vibrantColor={vibrantColor}>
      <AnchorPointer id="network" />
      <Section>
        <H2 className="m-4">{intl("ABOUT_NETWORK")}</H2>
        <span
          role="presentation"
          className={classNames([
            "m-4 font-lemonism text-3xl cursor-pointer",
            filter === null ? `text-black` : `text-gray-500`,
          ])}
          onClick={() => setFilter(null)}
        >
          Alles
        </span>
        {Object.keys(letters).map((l, i) => (
          <span
            role="presentation"
            className="m-4 cursor-pointer font-lemonism text-3xl"
            onClick={() => setFilter(l)}
            key={l}
          >
            {" - "}
            <span className={filter === l ? `text-black` : `text-gray-500`}>
              {l}
            </span>
          </span>
        ))}
        <Grid>
          {networks.map((item, k) => {
            if (filter !== null && item.title?.[0] !== filter) {
              return null;
            }
            const color =
              k % 3 === 0 ? "blue" : k % 3 === 1 ? "yellow" : "pink";
            return (
              <Link
                key={`mem${k}`}
                href={`/network/${item.slug}`}
                passHref={false}
                legacyBehavior
              >
                <CardWrapper key={k} color={color}>
                  {item.logo?.url && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      alt={item.title ?? ""}
                      src={item.logo?.url ?? ""}
                      height={208}
                      className="object-cover"
                    />
                  )}

                  <div className="p-4">
                    <H2>{item.title}</H2>

                    {item.description?.html && (
                      <div
                        className={classNames(
                          "mt-2 text-gray-500",
                          styles.networkDescription
                        )}
                        dangerouslySetInnerHTML={dangerouslySetFormattedInnerHTML(
                          item.description?.html
                        )}
                      />
                    )}
                    <div
                      className={classNames([
                        getTextColor(color),
                        "flex-grow flex justify-end flex-col m-2",
                      ])}
                    >
                      <Link href={`/network/${item.slug}` ?? ""} legacyBehavior>
                        <a className="hover:underline">{`Lerne ${item.title} kennen...`}</a>
                      </Link>
                    </div>
                  </div>
                </CardWrapper>
              </Link>
            );
          })}
        </Grid>
      </Section>
    </BackgroundWrapper>
  );
};
