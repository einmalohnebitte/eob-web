import { Link } from "gatsby-plugin-intl";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";
import tw from "twin.macro";

import { FOOTER_HEIGHT } from "../../constants/MediaQueries";
import { useTranslate } from "../@hooks/useTranslate";
import SEO from "../SEO";
import { AppFooter } from "./Footer";
import { GlobalStyle } from "./GlobalStyle.css";
import { Header } from "./Header";

const Layout = styled.div`
  ${tw`pt-16 md:pt-20`}
  min-height: calc(100vh - ${FOOTER_HEIGHT}px);
`;

const LinkCookie = styled(Link)`
  color: white;
`;

const queryClient = new QueryClient();

// eslint-disable-next-line react/display-name
export const withGrommetTheme = () => (Comp: any) => (props: any) => {
  const intl = useTranslate();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        <SEO />
        {/* <Grommet theme={theme as any}> */}
        <Header />

        <Layout>
          <Comp {...props} />
        </Layout>
        <AppFooter />
        {/* </Grommet> */}
        <CookieConsent
          buttonStyle={{ background: "white", borderRadius: "10px" }}
          style={{ background: "rgba(0,0,0,0.75)", zIndex: 999999 }}
        >
          {intl.formatMessage({ id: "COOKIE_TEXT" })}{" "}
          <LinkCookie to="/datenschutz">
            {intl.formatMessage({ id: "COOKIE_LINK" })}
          </LinkCookie>
        </CookieConsent>
      </QueryClientProvider>
    </>
  );
};
