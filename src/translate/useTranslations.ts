import { TranslationsQuery } from "@/translate/Translations.cms.generated";
import { useRouter } from "next/router";
import { useState } from "react";

import DE from "./de.json";
import EN from "./en.json";

const globalTranslations: {
  de: { [key: string]: string };
  en: { [key: string]: string };
} = { de: {}, en: {} };

export const useTranslations = (
  initialTranslations?: TranslationsQuery["translations"]
) => {
  const context = useRouter();
  useState(() => {
    initialTranslations?.forEach((item) => {
      const locale = context.locale === "en" ? "en" : "de";
      if (item?.key && item.value) {
        globalTranslations[locale][item.key] = item.value;
      }
    });

    return globalTranslations;
  });

  return (key: string, params?: any) => {
    const translationSet: { [key: string]: string } =
      context.locale === "en" ? EN : DE;
    // console.log(translationsState, translationsState[key]);
    const translatedRawString =
      translationSet[key] ??
      globalTranslations[context.locale === "en" ? "en" : "de"][key];

    if (params && translatedRawString) {
      return translatedRawString.replace(
        /\[\s*(\w+)\s*\]/g,
        ($0, $1) => params[$1]?.toString() ?? ""
      );
    }
    if (!translatedRawString) {
      console.warn(`Missing translation ${key}`);
      return key;
    }
    return translatedRawString;
  };
};
