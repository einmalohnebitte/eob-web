import { useTranslations } from "@/hooks/useTranslations";
import classNames from "classnames";
import { useRouter } from "next/router";
import React from "react";
import { FaQuestion } from "react-icons/fa";

import { AppFooter } from "./Footer";
import { Header } from "./Header";
import styles from "./Layout.module.css";

export const withLayout =
  () =>
  (Comp: any) =>
  // eslint-disable-next-line react/display-name
  (props: any): React.ReactElement => {
    const intl = useTranslations(props.translations);
    const router = useRouter();
    return (
      <>
        <Header />

        <div className={classNames("pt-16 md:pt-20", styles.layout)}>
          <Comp {...props} />
        </div>
        <AppFooter />
        <FaQuestion
          onClick={() => router.push("/faq")}
          className="fixed right-2.5 bottom-2.5 h-8 w-8 cursor-pointer text-pink-500 hover:h-10 hover:w-10"
        />
      </>
    );
  };
