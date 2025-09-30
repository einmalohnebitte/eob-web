import { ReusableHeroDocument } from "@/components/CmsQueries/ReusableHero.cms.generated";
import { withLayout } from "@/components/Layout";
import { ReusableHero } from "@/components/ReusableHero/ReusableHero";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(ReusableHeroDocument, {
    locale: contextToLocale(ctx),
  });

  return {
    props: data,
  };
};

export default withLayout()(ReusableHero);
