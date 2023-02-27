import { CardMember } from "@/components/@UI/CardMember";
import { Grid } from "@/components/@UI/Grid";
import { Section } from "@/components/@UI/Section";
import { H2 } from "@/components/@UI/Texts";
import { MembersQuery } from "@/components/CmsQueries/Members.cms.generated";
import { useTranslations } from "@/hooks/useTranslations";
import Image from "next/image";
import React from "react";
import userPlaceholder from "./user.jpg";
import { BackgroundWrapper } from "../@UI/BackgroundWrapper";

export const AboutMembers: React.FC<{
  members: MembersQuery["members"];
  vibrantColor: string;
}> = ({ members, vibrantColor }) => {
  const intl = useTranslations();
  return (
    <BackgroundWrapper vibrantColor={vibrantColor}>
      <Section>
        <H2 className="m-4">{intl("TEAM")}</H2>
        <Grid>
          {members.map((item, k) => (
            <CardMember
              key={k}
              title={item.name ?? ""}
              message={item.abstract ?? ""}
              color={k % 3 === 0 ? "blue" : k % 3 === 1 ? "yellow" : "pink"}
              linkTitle={
                /rehab/.test(item.name ?? "")
                  ? `Lerne den rehab republic Vorstand kennen`
                  : `Lerne ${item.name} kennen...`
              }
              href={`/team/${item.slug}`}
            >
              <Image
                alt={item.name ?? ""}
                src={item?.picture?.url ?? userPlaceholder}
                height={400}
                width={480}
                className="object-cover"
              />
            </CardMember>
          ))}
        </Grid>
      </Section>
    </BackgroundWrapper>
  );
};
