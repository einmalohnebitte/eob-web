import { SponsorCard } from "@/components/@UI/SponsorCard";
import { useTranslations } from "@/hooks/useTranslations";
import React from "react";

import { Section } from "../@UI/Section";
import { Slide, SlideTrack, SliderContainer } from "../@UI/Slider";
import { H2 } from "../@UI/Texts";

export const Sponsors: React.FC = () => {
  const intl = useTranslations();
  return (
    <div>
      <Section className="text-center text-blue-500">
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
