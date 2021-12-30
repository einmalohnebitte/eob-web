import { SponsorCard } from "@/components/@UI/SponsorCard";
import { useTranslations } from "@/hooks/useTranslations";
import React from "react";

import { Section } from "../@UI/Section";
import styles from "./5Sponsors.module.scss";
import { H2 } from "../@UI/Texts";

export const Sponsors: React.FC = () => {
  const intl = useTranslations();
  return (
    <div>
      <Section className="text-center text-blue-500">
        <H2>{intl("SPONSORS")}</H2>
        <div className={styles.SliderContainer}>
          <div className={styles.SliderTrack}>
            <div className={styles.Slide}>
              <SponsorCard src={"/images/sponsors/dpl.png"} />
            </div>
            <div className={styles.Slide}>
              <SponsorCard src={"/images/sponsors/lush.png"} />
            </div>
            <div className={styles.Slide}>
              <SponsorCard src={"/images/sponsors/patagonia.jpg"} />
            </div>
            <div className={styles.Slide}>
              <SponsorCard src={"/images/sponsors/rgu.png"} />
            </div>
            <div className={styles.Slide}>
              <SponsorCard src={"/images/sponsors/soul.jpg"} />
            </div>
            <div className={styles.Slide}>
              <SponsorCard src={"/images/sponsors/stiftung-veolia.png"} />
            </div>
            <div className={styles.Slide}>
              <SponsorCard
                src={"/images/sponsors/zukunftsstiftungehrenamt.jpg"}
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
