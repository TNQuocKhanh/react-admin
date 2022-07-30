import polyglotI18nProvider from "ra-i18n-polyglot";
import vi from "./i18n/vi";
import en from "./i18n/en";

const translations = { en, vi };

export const i18nProvider = polyglotI18nProvider(
  (locale) => {
    // console.log("locale", locale);
    return translations[locale];
  },
  "en",
  { allowMissing: true }
);
