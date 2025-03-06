
"use client";

import { useTranslation } from "react-i18next";
import flowerIcon2 from "../../../public/assets/img/course/icons/flower2.svg";
import Image from "next/image";

export default function CourseCurriculum() {
  const { t } = useTranslation();

  const curriculum = t("curriculum.list", { returnObjects: true }) as Record<string, { title: string; step1: string; step2: string }>;

  return (
    <section id="curriculum" className="pt-12 bg-[#FFFFFF] text-gray-900 h-[25rem]">
      <h2 className="text-3xl font-bold text-center">{t("curriculum.title")}</h2>

      <div className="relative w-full overflow-x-auto snap-start h-[20rem]">
        <div className="flex items-center space-x-6 px-6 snap-x snap-mandatory overflow-x-scroll scrollbar-hide h-full">
          {Object.keys(curriculum).map((key) => (
            <div
              key={key}
              className="flex-shrink-0 flex flex-col w-[20rem] h-[14rem] bg-white shadow-md rounded-lg p-6 snap-center border-1 border"
            >
              <h3 className="text-xl font-semibold flex justify-center items-center mb-3">
                <Image
                  src={flowerIcon2}
                  alt="flower svg"
                  className="w-[2rem] h-[2rem] mr-2"
                />
                {curriculum[key].title}
              </h3>
              <p className="text-gray-600 text-center mb-3">{curriculum[key].step1}</p>
              <p className="text-gray-600 text-center mb-3">{curriculum[key].step2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}