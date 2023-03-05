import React from "react";
import { GrFacebook, GrInstagram } from "react-icons/gr";

import Image from "next/image";
import { Section } from "../@UI/Section";
import { H2 } from "../@UI/Texts";
import { Flex } from "../@UI/Flex";

export const Social: React.FC = () => (
  <Flex bgColor="gray-solid">
    <Section className="text-center text-blue-500">
      <H2>FOLGE EINMAL OHNE, BITTE AUF INSTAGRAM ODER FACEBOOK</H2>

      <picture className="p-4">
        <Image width="960" height="225" src="/images/social.png" alt="social" />
      </picture>
      <div>
        <a rel="noopener" href="https://www.facebook.com/einmalohnebitte/">
          <GrFacebook style={{ display: "inline-block" }} /> Facebook
        </a>{" "}
        <a rel="noopener" href="https://www.instagram.com/einmal.ohne.bitte/">
          <GrInstagram style={{ display: "inline-block" }} /> Instagram
        </a>
      </div>
    </Section>
  </Flex>
);
