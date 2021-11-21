import { AnchorPointer } from "@/components/@UI/AnchorPointer";
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
  // networks = [
  //   ...networks,
  //   ...networks,
  //   ...networks,
  //   ...networks,
  //   ...networks,
  //   ...networks,
  //   ...networks,
  //   ...networks,
  // ];
  networks.sort((a, b) => {
    if ((a?.title ?? "") < (b?.title ?? "")) {
      return -1;
    }
    if ((a?.title ?? "") > (b?.title ?? "")) {
      return 1;
    }
    return 0;
  });
  console.log(networks);

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
      <AnchorPointer id="network" />
      <Section>
        <H2 css={tw`m-4`}>{intl("ABOUT_NETWORK")}</H2>
        {Object.keys(letters).map((l, i) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <span
            role="presentation"
            css={tw`font-lemonism text-3xl cursor-pointer`}
            onClick={() => {
              window.location.hash = `${l}`;
            }}
            key={l}
          >
            {i > 0 && " - "}
            {l}
          </span>
        ))}
        <div
          css={`
            height: 300px;
            overflow: scroll;
          `}
        >
          {networks.map((network, k) => {
            return (
              <div key={`nw${k}`}>
                <AnchorPointer id={network.title?.substr(0, 1) ?? ""} />
                <CardHorizontal
                  title={network.title ?? ""}
                  img={network.logo?.url}
                  message={network.description?.html ?? ""}
                  color={k % 3 === 0 ? "pink" : k % 3 === 1 ? "blue" : "yellow"}
                ></CardHorizontal>
              </div>
            );
          })}
        </div>
      </Section>
    </div>
  );
};
