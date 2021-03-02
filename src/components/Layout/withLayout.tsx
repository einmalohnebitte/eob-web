import { useTranslations } from "@/translate";
import Link from "next/link";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { QueryClient, QueryClientProvider } from "react-query";
import styled from "styled-components";
import tw from "twin.macro";

import { FOOTER_HEIGHT } from "../../constants/MediaQueries";
// import SEO from "../SEO";
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
export const withLayout = () => (Comp: any) => (props: any) => {
  const intl = useTranslations(props.translations);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <GlobalStyle />
        {/* <SEO /> */}
        <Header />

        <Layout>
          <Comp {...props} />
        </Layout>
        <AppFooter />
        <CookieConsent
          buttonStyle={{ background: "white", borderRadius: "10px" }}
          style={{ background: "rgba(0,0,0,0.75)", zIndex: 999999 }}
        >
          {intl("COOKIE_TEXT")}{" "}
          <LinkCookie href="/datenschutz">
            <a>{intl("COOKIE_LINK")}</a>
          </LinkCookie>
        </CookieConsent>
      </QueryClientProvider>
    </>
  );
};
