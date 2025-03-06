
"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import flowerIcon from "../../../public/assets/img/course/icons/flower.svg";


export default function Results() {
  const { t } = useTranslation();

  const results = t("results.list", {returnObjects: true}) as string[];

  return (
    <section id="results" className="bg-[#F3F4F6] text-gray-900 h-[40rem] flex items-center justify-center">
      <div className="flex items-center flex-col">
        <h1 className="font-bold text-4xl mb-8">{t("results.title")}</h1>
        <div>
          {results.map((item, index) => (
            <p
              key={index}
              className="font-semibold mb-3 flex flex-row"
            >
              <Image
                  src={flowerIcon}
                  alt="flower svg"
                  className="w-[1rem] h-[1rem] mt-1 mr-1"
                />
              {item}
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}