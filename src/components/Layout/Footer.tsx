import { useTranslations } from "@/translations";
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
        <a href="/impressum/">{intl("FOOTER_IMPRESSUM")}</a>{" "}
        <a href="/datenschutz/">{intl("FOOTER_DATA")}</a>{" "}
        <a href="/presse/">{intl("FOOTER_PRESS")}</a>
      </p>
      <p className="center-block">
        Made with <HearthStyle>♥</HearthStyle> in Munich by{" "}
        <a href="https://rehab-republic.de/">Rehab Repulic</a>
      </p>
    </footer>
  );
};
