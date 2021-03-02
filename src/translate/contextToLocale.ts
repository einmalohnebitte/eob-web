import { Locale } from "@/generated/graphql";
import { GetStaticPropsContext } from "next";

export const contextToLocale = (ctx: GetStaticPropsContext) => {
  return [(ctx.locale ?? "de") as Locale];
};
