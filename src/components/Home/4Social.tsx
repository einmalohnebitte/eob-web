import React from "react";
import { GrFacebook, GrInstagram } from "react-icons/gr";
import tw from "twin.macro";

import { Section } from "../@UI/Section";
import { H2 } from "../@UI/Texts";

export const Social: React.FC = () => (
  <div
    css={`
      background-color: #f9f8fd;
    `}
  >
    <Section css={tw` text-center`}>
      <H2>FOLGE EINMAL OHNE, BITTE AUF INSTAGRAM ODER FACEBOOK</H2>

      <picture css={tw`p-4`}>
        <img src="/images/social.png" alt="social" />
      </picture>
      <div>
        <a href="https://www.facebook.com/einmalohnebitte/">
          <GrFacebook style={{ display: "inline-block" }} /> Facebook
        </a>{" "}
        <a href="https://www.facebook.com/einmalohnebitte/">
          <GrInstagram style={{ display: "inline-block" }} /> Instagram
        </a>
      </div>
    </Section>
  </div>
);
