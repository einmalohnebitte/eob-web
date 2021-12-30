import Image from "next/image";
import React from "react";

import styles from "./SponsorCard.module.scss";

export const SponsorCard: React.FC<{
  src: string;
  alt?: string;
}> = ({ src, alt }) =>
  src ? (
    <div
      className={`${styles.SponsorCard} flex-shrink-0 p-2 m-2 rounded-lg shadow-xl`}
    >
      <Image alt={alt} src={src} objectFit="contain" width={300} height={300} />
    </div>
  ) : null;
