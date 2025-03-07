import { useEffect, useState } from "react";
import zh from "../dictionaries/zh.json";
import en from "../dictionaries//en.json";

const locals = {
  zh,
  en,
};

export default function useLocal(lang: any = "zh") {
  const [i18n, setI18n]: any = useState({});
  useEffect(() => {
    setI18n(locals[lang]);
  }, [lang]);
  return {
    i18n,
  };
}
