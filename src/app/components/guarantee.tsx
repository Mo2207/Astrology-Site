
"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import graf from "../../../public/assets/img/guarantee/graf.png";

export default function Guarantee() {
  const { t } = useTranslation();

  return (
    <section id="price" className="pt-20 bg-white text-gray-900 flex justify-center relative">
      <div className="max-w-7xl flex justify-center">
      
      <Image
        src={graf}
        width={300}
        height={100}
        alt="spiral decal"
        className="absolute left-2 z-0 hidden md:flex object-cover h-full self-center "
      />

      <div className="flex z-10 flex-col w-[80%] border border-[#DDBEA9] p-6 rounded-xl bg-[#faf5f3] text-center">
        <h2 className="self-center font-bold text-3xl pb-8">{t("guarantee.title")}</h2>
        <p className="text-lg pb-5">{t("guarantee.p1")}</p>
        <p className="text-lg">{t("guarantee.p2")}</p>
      </div>

      <Image
        src={graf}
        width={300}
        height={100}
        alt="spiral decal"
        className="absolute md:right-2 z-0 hidden md:flex object-cover h-full self-center"
      />

    </div>
    </section>
  )
}