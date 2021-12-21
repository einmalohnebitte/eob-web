import { useTranslations } from "@/hooks/useTranslations";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { FaQuestion } from "react-icons/fa";
import { QueryClient, QueryClientProvider } from "react-query";

import styled from "styled-components";
import { FOOTER_HEIGHT } from "../../constants/MediaQueries";
// import SEO from "../SEO";
import { AppFooter } from "./Footer";
import { GlobalStyle } from "./GlobalStyle.css";
import { Header } from "./Header";

const Layout = styled.div`
  min-height: calc(100vh - ${FOOTER_HEIGHT}px);
`;

const LinkCookie = styled(Link)`
  color: white;
`;

const queryClient = new QueryClient();

export const withLayout =
  () =>
  (Comp: any) =>
  // eslint-disable-next-line react/display-name
  (props: any): React.ReactElement => {
    const intl = useTranslations(props.translations);
    const router = useRouter();
    return (
      <>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          {/* <SEO /> */}
          <Header />

          <Layout className="pt-16 md:pt-20">
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
            className="fixed right-2.5 bottom-2.5 w-8 hover:w-10 h-8 hover:h-10 text-pink-500 cursor-pointer"
          />
        </QueryClientProvider>
      </>
    );
  };
