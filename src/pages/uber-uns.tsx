import { AboutUs } from "@/components/AboutUs";
import { MembersDocument } from "@/components/CmsQueries/Members.cms.generated";
import { withLayout } from "@/components/Layout";
import { contextToLocale } from "@/hooks/useTranslations/contextToLocale";
import { graphCmsRequest } from "@/server/graphcms";
import { GetStaticProps } from "next";

export const getStaticProps: GetStaticProps = async (ctx) => {
  const data = await graphCmsRequest(MembersDocument, {
    locale: contextToLocale(ctx),
  });

  return {
    props: data,
  };
};

export default withLayout()(AboutUs);
