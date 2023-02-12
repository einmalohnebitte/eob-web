/// <reference types="styled-components/cssprop" />
import { Card } from "@/components/@UI/Card";
import { Grid } from "@/components/@UI/Grid";
import { Section } from "@/components/@UI/Section";
import { H2 } from "@/components/@UI/Texts";
import { MembersQuery } from "@/components/CmsQueries/Members.cms.generated";
import { useTranslations } from "@/hooks/useTranslations";
import Link from "next/link";
import React from "react";

export const AboutMembers: React.FC<{
  members: MembersQuery["members"];
  vibrantColor: string;
}> = ({ members, vibrantColor }) => {
  const intl = useTranslations();
  return (
    <div
      css={`
        background-image: linear-gradient(${vibrantColor}, white);
      `}
    >
      <Section>
        <H2 className="m-4">{intl("TEAM")}</H2>
        <Grid>
          {members.map((item, k) => (
            <Link key={`mem${k}`} href={`/team/${item.slug}`} passHref={true}>
              <Card
                key={k}
                title={item.name ?? ""}
                message={item.abstract ?? ""}
                // eslint-disable-next-line no-nested-ternary
                color={k % 3 === 0 ? "blue" : k % 3 === 1 ? "yellow" : "pink"}
                linkTitle={
                  /rehab/.test(item.name ?? "")
                    ? `Lerne den rehab republic Vorstand kennen`
                    : `Lerne ${item.name} kennen...`
                }
                linkTo={`/team/${item.slug}`}
              >
                {item?.picture?.url && (
                  <img
                    alt={item.name ?? ""}
                    src={item?.picture?.url ?? ""}
                    height={208}
                    className="object-cover"
                  />
                )}
              </Card>
            </Link>
          ))}
        </Grid>
      </Section>
    </div>
  );
};
