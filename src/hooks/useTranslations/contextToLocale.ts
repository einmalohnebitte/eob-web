import { Locale } from "@/server/generated/graphql";
import { GetStaticPropsContext } from "next";

export const contextToLocale = (ctx: GetStaticPropsContext) => {
  return [(ctx.locale ?? "de") as Locale, Locale.De];
};
