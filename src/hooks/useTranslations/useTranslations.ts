import { TranslationsQuery } from "@/hooks/useTranslations/Translations.cms.generated";
import { useRouter } from "next/router";
import { useState } from "react";

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
      if (item?.key && item.value) {
        globalTranslations[item.locale][item.key] = item.value;
      }
    });

    return globalTranslations;
  });

  return (key: string, params?: any) => {
    const translatedRawString =
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
