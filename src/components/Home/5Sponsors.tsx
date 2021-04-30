import { SponsorCard } from "@/components/@UI/SponsorCard";
import { useTranslations } from "@/hooks/useTranslations";
import React from "react";
import tw from "twin.macro";

import { Section } from "../@UI/Section";
import { H2 } from "../@UI/Texts";

export const Sponsors: React.FC = () => {
  const intl = useTranslations();
  return (
    <div>
      <Section css={tw` text-center`}>
        <H2>{intl("SPONSORS")}</H2>
        <div css={tw`px-2 py-6  flex overflow-x-auto`}>
          <SponsorCard src={"/images/sponsors/dpl.png"} />
          <SponsorCard src={"/images/sponsors/lush.png"} />
          <SponsorCard src={"/images/sponsors/patagonia.jpg"} />
          <SponsorCard src={"/images/sponsors/rgu.png"} />
          <SponsorCard src={"/images/sponsors/soul.jpg"} />
          <SponsorCard src={"/images/sponsors/stiftung-veolia.png"} />
          <SponsorCard src={"/images/sponsors/zukunftsstiftungehrenamt.jpg"} />
        </div>
      </Section>
    </div>
  );
};
