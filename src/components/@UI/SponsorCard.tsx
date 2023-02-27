import Image from "next/image";
import React from "react";

export const SponsorCard: React.FC<{
  src: string;
  alt?: string;
}> = ({ src, alt }) =>
  src ? (
    <div className={`m-2 flex h-40 w-40 shrink-0 rounded-lg p-2 shadow-xl`}>
      <Image
        alt={alt ?? "sponsor"}
        src={src}
        className="block object-contain"
        width={300}
        height={300}
      />
    </div>
  ) : null;
