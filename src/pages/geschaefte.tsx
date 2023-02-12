import { Loading } from "@/components/@UI/Loading";
import { Section } from "@/components/@UI/Section";
import { withLayout } from "@/components/Layout";
import { HeadMeta } from "@/components/Layout/HeadMeta";
import { Search } from "@/components/ShopsMap/Search";
import { ShopsSideMenu } from "@/components/ShopsMap/ShopsSideMenu";
import { useFetchMap } from "@/components/ShopsMap/useFetchMap";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { TranslationsDocument } from "@/hooks/useTranslations/Translations.cms.generated";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import styles from "@/components/ShopsMap/Shops.module.scss";
import classnames from "classnames";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(TranslationsDocument, {
    locale: contextToLocale(ctx),
  });

  return {
    props: data,
  };
};

const ShopsMap = dynamic(
  async () => (await import("../components/ShopsMap")).ShopsMap,
  { ssr: false }
);

const Shops: React.FC = () => {
  const { isLoading, state, dispatchAction } = useFetchMap();

  const [showSidebar, setShowSidebar] = useState(true);
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  if (isLoading || !state.data) {
    return (
      <Section
        className={classnames(
          "flex justify-center items-center",
          styles.loadingMap
        )}
      >
        <Loading />
      </Section>
    );
  }

  return (
    <>
      <HeadMeta />
      <div>
        <button
          className={classnames(
            styles.OpenButton,
            "py-2 px-6 font-lemonism text-xl tracking-wider rounded focus:outline-none",
            {
              [styles["OpenButton--is-visible"]]: !showSidebar,
            }
          )}
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <GrNext />
        </button>{" "}
        <div
          className="md:hidden p-2 w-full"
          role="presentation"
          onClick={() => setIsOpenMobile(true)}
        >
          <Search
            onSearch={(search) =>
              dispatchAction({ type: "SET_SEARCH", payload: search })
            }
            search={state.filters.search ?? ""}
            disabled={true}
          />
        </div>
        <ShopsMap
          center={state.filters.center}
          zoom={state.filters.zoom}
          shops={state.shops}
          height="100vh"
        />
      </div>

      <ShopsSideMenu
        filters={state.filters}
        dispatchAction={dispatchAction}
        onClose={() => {
          setShowSidebar(false);
          setIsOpenMobile(false);
        }}
        isOpen={showSidebar}
        isOpenMobile={isOpenMobile}
        data={state.data}
      />
    </>
  );
};

export default withLayout()(Shops);
