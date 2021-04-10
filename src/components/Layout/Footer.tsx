import { useTranslations } from "@/translate";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { COLORS } from "../../constants/colors";

const HearthStyle = styled.span`
  color: ${COLORS.RED};
`;

export const AppFooter = () => {
  const intl = useTranslations();
  return (
    <footer css={tw`p-4 text-center leading-10`}>
      <p
        dangerouslySetInnerHTML={{
          __html: intl("FOOTER_LINE_2"),
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: intl("FOOTER_LINE_3"),
        }}
      />

      <p>
        <Link href="/impressum">
          <a>{intl("FOOTER_IMPRESSUM")}</a>
        </Link>{" "}
        <Link href="/datenschutzerklarung">
          <a>{intl("FOOTER_DATA")}</a>
        </Link>{" "}
        <Link href="/press">
          <a>{intl("FOOTER_PRESS")}</a>
        </Link>{" "}
        <Link href="/blog">
          <a>{intl("Blog")}</a>
        </Link>
      </p>
      <p className="center-block">
        Made with <HearthStyle>♥</HearthStyle> in Munich by{" "}
        <a rel="noopener" href="https://rehab-republic.de/">
          Rehab Repulic
        </a>
      </p>
    </footer>
  );
};
