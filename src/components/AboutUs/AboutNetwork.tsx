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
  const letters: any = {};

  networks.forEach((n) => {
    const letter: string = n.title?.substr(0, 1) ?? "";
    if (!letters[letter]) {
      letters[letter] = letter;
    }
  });

  return (
    <div
      css={`
        background-image: linear-gradient(${vibrantColor}, white);
      `}
    >
      <Section id="network">
        <H2 css={tw`m-4`}>{intl("ABOUT_NETWORK")}</H2>
        {Object.keys(letters).map((l, i) => (
          <span css={tw`font-lemonism text-3xl`} key={l}>
            {i > 0 && " - "}
            {l}
          </span>
        ))}
        {networks.map((network, k) => {
          return (
            <CardHorizontal
              key={`nw${k}`}
              title={network.title ?? ""}
              img={network.logo?.url}
              message={network.description?.html ?? ""}
              color={k % 3 === 0 ? "pink" : k % 3 === 1 ? "blue" : "yellow"}
            ></CardHorizontal>
          );
        })}
      </Section>
    </div>
  );
};
