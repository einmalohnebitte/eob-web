import Image from "next/image";
import React from "react";
import tw from "twin.macro";

export const SponsorCard: React.FC<{
  src: string;
  alt?: string;
}> = ({ src, alt }) =>
  src ? (
    <div
      css={`
        width: 10rem;
        height: 10rem;
        ${tw`shadow-xl rounded-lg p-2 m-2 flex-shrink-0`}
        div {
          top: 50%;
          transform: translateY(-50%);
        }
      `}
    >
      <Image alt={alt} src={src} objectFit="contain" width={300} height={300} />
    </div>
  ) : null;
