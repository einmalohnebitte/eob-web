import { CardHorizontal } from "@/components/@UI/Card";
import { Section } from "@/components/@UI/Section";
import { H2 } from "@/components/@UI/Texts";
import { MembersQuery } from "@/components/CmsQueries/Members.cms.generated";
import { useTranslations } from "@/hooks/useTranslations";
import React from "react";
import tw from "twin.macro";

export const AboutNetwork: React.FC<{
  networks: MembersQuery["networks"];
  vibrantColor: string;
}> = ({ networks, vibrantColor }) => {
  const intl = useTranslations();
  return (
    <div
      css={`
        background-image: linear-gradient(${vibrantColor}, white);
      `}
    >
      <Section id="network">
        <H2 css={tw`m-4`}>{intl("ABOUT_NETWORK")}</H2>
        {networks.map((network, k) => {
          return (
            <CardHorizontal
              key={`nw${k}`}
              title={network.title ?? ""}
              img={network.logo?.url}
              message={network.description?.html ?? ""}
            ></CardHorizontal>
          );
        })}
      </Section>
    </div>
  );
};
