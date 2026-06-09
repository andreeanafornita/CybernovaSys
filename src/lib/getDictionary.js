import en from "@/dictionaries/en";
import ro from "@/dictionaries/ro";

const dictionaries = { en, ro };

export const LOCALES = ["en", "ro"];
export const DEFAULT_LOCALE = "en";

export function hasLocale(lang) {
  return lang in dictionaries;
}

export function getDictionary(lang) {
  if (!hasLocale(lang)) return dictionaries[DEFAULT_LOCALE];
  return dictionaries[lang];
}
