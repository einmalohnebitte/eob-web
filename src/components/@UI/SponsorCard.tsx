import Image from "next/legacy/image";
import React from "react";

import styles from "./SponsorCard.module.css";

export const SponsorCard: React.FC<{
  src: string;
  alt?: string;
}> = ({ src, alt }) =>
  src ? (
    <div
      className={`${styles.SponsorCard} m-2 shrink-0 rounded-lg p-2 shadow-xl`}
    >
      <Image alt={alt} src={src} objectFit="contain" width={300} height={300} />
    </div>
  ) : null;
