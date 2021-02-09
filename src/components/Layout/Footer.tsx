import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

import { COLORS } from "../../constants/colors";
import { useTranslate } from "../@hooks/useTranslate";

const HearthStyle = styled.span`
  color: ${COLORS.RED};
`;

export const AppFooter = () => {
  const intl = useTranslate();
  return (
    <footer css={tw`p-4 text-center leading-10`}>
      <p
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "FOOTER_LINE_2" }),
        }}
      />
      <p
        dangerouslySetInnerHTML={{
          __html: intl.formatMessage({ id: "FOOTER_LINE_3" }),
        }}
      />
      <a href="https://www.postcode-lotterie.de/"></a>
      <p>
        <a href="https://www.postcode-lotterie.de/"></a>
        <a href="/impressum/">
          {intl.formatMessage({ id: "FOOTER_IMPRESSUM" })}
        </a>{" "}
        <a href="/datenschutz/">{intl.formatMessage({ id: "FOOTER_DATA" })}</a>{" "}
        <a href="/presse/">{intl.formatMessage({ id: "FOOTER_PRESS" })}</a>
      </p>
      <p className="center-block">
        Made with <HearthStyle>♥</HearthStyle> in Munich by{" "}
        <a href="https://rehab-republic.de/">Rehab Repulic</a>
      </p>
    </footer>
  );
};
