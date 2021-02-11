// import { Link, useIntl } from "gatsby-plugin-intl";
import { Grommet } from "grommet";
import { base } from "grommet/themes";
import { deepMerge } from "grommet/utils";
import Link from "next/link";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { useTranslations } from "src/Translations/useTranslations";
import styled, { createGlobalStyle } from "styled-components";

import { COLORS } from "../../constants/colors";
import {
  FOOTER_HEIGHT,
  HEADER_HEIGHT,
  HEADER_HEIGHT_MOBILE,
  MQ_MOBILE,
} from "../../constants/MediaQueries";
// import { AppFooter } from "../Footer";
// import SEO from "../SEO";
import { TopHeader } from "./Header";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        
    }
    a{
      box-sizing: border-box;
      font-size: inherit;
      line-height: inherit;
      color: #000;
      font-weight: 600;
      -webkit-text-decoration: none;
      text-decoration: none;
      cursor: pointer;
      outline: none;
      :hover{
        text-decoration: underline;
      }
    }
    
`;

const theme = deepMerge(base, {
  global: {
    colors: {
      brand: COLORS.BRAND,
      focus: COLORS.BRAND,
    },
    font: {
      family: "GT, sans-serif",
    },
    drop: { zIndex: "99999999" },
  },
  heading: {
    font: {
      family: "Lemonism-Regular, sans-serif",
    },
    level: {
      3: {
        medium: {
          size: "2rem",
          height: "32px",
          maxWidth: "624px",
        },
      },
    },
  },
});

const Layout = styled.div<{ hasHeaderPadding: boolean }>`
  min-height: calc(100vh - ${FOOTER_HEIGHT}px);
  padding-top: ${({ hasHeaderPadding }) =>
    hasHeaderPadding ? HEADER_HEIGHT : "0"}px;
  background: ${({ hasHeaderPadding }) =>
    hasHeaderPadding
      ? "linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(/images/logo_start.webp) no-repeat center fixed"
      : "none"};

  @media ${MQ_MOBILE} {
    padding-top: ${({ hasHeaderPadding }) =>
      hasHeaderPadding ? HEADER_HEIGHT_MOBILE : "0"}px;
  }
`;

const LinkCookie = styled(Link)`
  color: white;
`;

export function withLayout(hasHeaderPadding: boolean) {
  // eslint-disable-next-line react/display-name
  return (Comp: any) => (props: any) => {
    const intl = useTranslations();
    return (
      <>
        <GlobalStyle />
        {/* <SEO /> */}
        <Grommet theme={theme as any}>
          <TopHeader background={hasHeaderPadding ? "brand" : "transparent"} />

          <Layout hasHeaderPadding={hasHeaderPadding}>
            <Comp {...props} />
          </Layout>
          {/* <AppFooter /> */}
        </Grommet>
        <CookieConsent
          buttonStyle={{ background: "white", borderRadius: "10px" }}
          style={{ background: "rgba(0,0,0,0.75)", zIndex: 999999 }}
        >
          {intl("COOKIE_TEXT")}{" "}
          <LinkCookie href="/datenschutz">{intl("COOKIE_LINK")}</LinkCookie>
        </CookieConsent>
      </>
    );
  };
}
