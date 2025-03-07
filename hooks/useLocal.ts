"use client";

import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import zh from "../dictionaries/zh.json";
import en from "../dictionaries/en.json";

const locals = {
  zh,
  en,
};

export default function useLocal() {
  const [locale, setLocale] = useState("");

  useEffect(() => {
    const cookieLocale = Cookies.get("locale");
    if (cookieLocale) {
      setLocale(cookieLocale);
    }
  }, []);

  return {
    i18n: (locale && locals[locale]) || {},
  };
}
