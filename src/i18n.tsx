
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import en from "./app/locales/en.json";
import ru from "./app/locales/ru.json";

let savedLang = "ru";
if (typeof window !== "undefined") {
  const storedLang = localStorage.getItem("i18nextLng");
  if (storedLang) {
    savedLang = storedLang;
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      ru: { translation: ru },
    },
    lng: savedLang,
    fallbackLng: "ru",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["localStorage", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
