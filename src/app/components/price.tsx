
"use client";

import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";

export default function Price() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const audience = searchParams.get("audience");

  const salePrice = audience === '2' ? '$9USD/370' : '$15CAD/580';

  return (
    <section id="price" className="py-8 bg-[#faf5f3] text-gray-900 flex justify-center">
      <div className="max-w-7xl flex justify-center">

      <div className="flex flex-col w-[70%]">
        <h2 className="font-bold self-center pb-8 text-2xl md:text-3xl">{t("cheap.title")}</h2>
        <p className="text-md md:text-lg pb-3">
          {t("cheap.p1")}
          <span className="font-bold text-[#ad6049] text-lg md:text-xl">{salePrice}{t("cheap.price")}</span>
          {t("cheap.p2")}
        </p>
        <p className="text-md md:text-lg">
          <span className="font-bold text-[#ad6049] text-lg md:text-xl">{t("cheap.mission")}</span>
          {t("cheap.p3")}
        </p>
      </div>
      </div>
    </section>
  )
}