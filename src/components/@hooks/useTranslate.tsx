import type {
  changeLocale as ChangeLocaleType,
  Link as LinkType,
  navigate as NavigateType,
  useIntl,
} from "gatsby-plugin-intl";
import React from "react";

// import { useIntl } from "gatsby-plugin-intl";
export const useTranslate: typeof useIntl = () => {
  if (process.env.SB) {
    // eslint-disable-next-line global-require
    const DE = require("../../intl/de.json");
    return {
      formatMessage: ({ id }: any) => DE[id],
    };
    // eslint-disable-next-line no-else-return
  } else {
    // eslint-disable-next-line global-require
    return require("gatsby-plugin-intl").useIntl();
  }
};

export const Link: typeof LinkType = process.env.SB
  ? ((({ to, activeStyle, ...props }: any) => <a {...props} />) as any) // eslint-disable-next-line global-require
  : require("gatsby-plugin-intl").Link;

export const navigate: typeof NavigateType = process.env.SB
  ? (to: string) => {} // eslint-disable-next-line global-require
  : require("gatsby-plugin-intl").navigate;

export const changeLocale: typeof ChangeLocaleType = process.env.SB
  ? (to: string) => {} // eslint-disable-next-line global-require
  : require("gatsby-plugin-intl").changeLocale;
