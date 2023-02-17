import { useTranslations } from "@/hooks/useTranslations";
import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import { FaQuestion } from "react-icons/fa";
import { QueryClient, QueryClientProvider } from "react-query";

import { AppFooter } from "./Footer";
// import { GlobalStyle } from "./GlobalStyle.css";
import { Header } from "./Header";
import styles from "./Layout.module.css";

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
          {/* <GlobalStyle /> */}
          <Header />

          <div className={classNames("pt-16 md:pt-20", styles.layout)}>
            <Comp {...props} />
          </div>
          <AppFooter />
          <FaQuestion
            onClick={() => router.push("/faq")}
            className="fixed right-2.5 bottom-2.5 h-8 w-8 cursor-pointer text-pink-500 hover:h-10 hover:w-10"
          />
        </QueryClientProvider>
      </>
    );
  };
