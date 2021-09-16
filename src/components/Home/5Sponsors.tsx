import { SponsorCard } from "@/components/@UI/SponsorCard";
import { useTranslations } from "@/hooks/useTranslations";
import React from "react";
import tw from "twin.macro";

import { Section } from "../@UI/Section";
import { Slide, SlideTrack, SliderContainer } from "../@UI/Slider";
import { H2 } from "../@UI/Texts";

export const Sponsors: React.FC = () => {
  const intl = useTranslations();
  return (
    <div>
      <Section css={tw`text-blue-500 underline text-center`}>
        <H2>{intl("SPONSORS")}</H2>
        <SliderContainer>
          <SlideTrack>
            <Slide>
              <SponsorCard src={"/images/sponsors/dpl.png"} />
            </Slide>
            <Slide>
              <SponsorCard src={"/images/sponsors/lush.png"} />
            </Slide>
            <Slide>
              <SponsorCard src={"/images/sponsors/patagonia.jpg"} />
            </Slide>
            <Slide>
              <SponsorCard src={"/images/sponsors/rgu.png"} />
            </Slide>
            <Slide>
              <SponsorCard src={"/images/sponsors/soul.jpg"} />
            </Slide>
            <Slide>
              <SponsorCard src={"/images/sponsors/stiftung-veolia.png"} />
            </Slide>
            <Slide>
              <SponsorCard
                src={"/images/sponsors/zukunftsstiftungehrenamt.jpg"}
              />
            </Slide>
          </SlideTrack>
        </SliderContainer>
      </Section>
    </div>
  );
};
