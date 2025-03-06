
"use client";

import { useTranslation } from "react-i18next";
import { Button } from "./ui/button/button";

export default function Bonus() {
  const { t } = useTranslation();

  const checklist = t("bonus.checklist", { returnObjects: true }) as string[];

  return (
    <section id="course" className="flex flex-col items-center bg-[#FFFFFF] text-gray-900 py-16">
      {/* bonus section */}
      <div className="flex flex-col mt-4">
        <h2 className="font-bold text-3xl flex justify-center mb-6">{t("bonus.title")}</h2>
        <div className="text-left font-semibold text-xl">
          {checklist.map((item, index) => (
          <p className="mb-2" key={index}>{item}</p>
          ))}
        </div>
        {/* pricing section */}
        <div className="flex flex-col items-center">
          <p className="mt-4">
            <span className="font-bold">{t("price.sale_price")}</span> 
            <del className="text-gray-500 ml-2">{t("price.old_price")}</del>
          </p>
          <Button className="mt-3">{t("buttons.gain_access")}</Button>
        </div>
      </div>
    </section>
  );
}