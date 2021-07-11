import { useTranslations } from "@/hooks/useTranslations";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { FaQuestion } from "react-icons/fa";
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

export const withLayout = () => (Comp: any) => (props: any) => {
  const intl = useTranslations(props.translations);
  const router = useRouter();
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
        <FaQuestion
          onClick={() => router.push("/faq")}
          css={tw`w-8 h-8 fixed text-pink-500 bottom-2.5 right-2.5 cursor-pointer hover:w-10 hover:h-10`}
        />
      </QueryClientProvider>
    </>
  );
};
