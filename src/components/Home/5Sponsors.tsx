import Image from "next/image";
import React from "react";
import tw from "twin.macro";

import { Section } from "../@UI/Section";
import { H2 } from "../@UI/Texts";

const SponsorCard: React.FC<{
  src: string;
}> = ({ src }) =>
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
      <Image src={src} layout="responsive" width={300} height={300} />
    </div>
  ) : null;

export const Sponsors: React.FC = () => {
  return (
    <div>
      <Section css={tw` text-center`}>
        <H2>USERE FORDERER</H2>
        <div css={tw`px-2 py-6  flex overflow-x-auto`}>
          <SponsorCard src={"/images/sponsors/dpl.png"} />
          <SponsorCard src={"/images/sponsors/lush.png"} />
          <SponsorCard src={"/images/sponsors/patagonia.jpg"} />
          <SponsorCard src={"/images/sponsors/rgu.png"} />
          <SponsorCard src={"/images/sponsors/soul.png"} />
          <SponsorCard src={"/images/sponsors/stiftung-veolia.png"} />
          <SponsorCard src={"/images/sponsors/zukunftsstiftungehrenamt.jpg"} />
        </div>
      </Section>
    </div>
  );
};
