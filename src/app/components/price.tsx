
"use client";

import { useTranslation } from "react-i18next";

export default function Price() {
  const { t } = useTranslation();

  return (
    <section id="price" className="py-20 bg-[#faf5f3] text-gray-900 flex justify-center">
      <div className="flex flex-col w-[70%]">
        <h2 className="font-bold text-3xl self-center pb-8">{t("cheap.title")}</h2>
        <p className="text-lg pb-3">
          {t("cheap.p1")}
          <span className="font-bold text-2xl text-[#ad6049]">{t("cheap.price")}</span>
          {t("cheap.p2")}
        </p>
        <p className="text-lg">
          <span className="font-bold text-2xl text-[#ad6049]">{t("cheap.mission")}</span>
          {t("cheap.p3")}
        </p>
      </div>
    </section>
  )
}