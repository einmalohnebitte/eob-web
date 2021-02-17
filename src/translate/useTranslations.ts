import { useRouter } from "next/router";

import DE from "./de.json";
import EN from "./en.json";

export const useTranslations = () => {
  const context = useRouter();

  return (key: keyof typeof DE, params?: any) => {
    const translationSet = context.locale === "en" ? EN : DE;
    const translatedRawString = translationSet[key];

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
