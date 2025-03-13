
"use client";

import { useTranslation } from "react-i18next";
import flower from "../../../public/assets/img/curriculum/icons/flower.svg";
import Image from "next/image";

export default function CourseCurriculum() {
  const { t } = useTranslation();

  const curriculum = t("curriculum.list", { returnObjects: true }) as Record<string, { title: string; step1: string; step2: string }>;

  return (
    <section id="curriculum" className="pt-12 bg-[#FFFFFF] text-gray-900 h-[25rem]">
      <h2 className="text-xl md:text-2xl lg-text-3xl font-bold text-center">{t("curriculum.title")}</h2>

      <div className="relative w-full overflow-x-auto snap-start h-[20rem]">
        <div className="flex flex-col sm:flex-row items-center space-y-6 sm:space-y-0 sm:space-x-6 px-6 snap-x snap-mandatory scrollbar-hide sm:overflow-x-scroll h-full">
          {Object.keys(curriculum).map((key) => (
            <div
              key={key}
              className="flex-shrink-0 flex flex-col w-full sm:w-[20rem] min-w-0 bg-[#faf5f3] shadow-md rounded-xl p-6 snap-center border border-[#AD6049]"
            >
              <h3 className="text-xl text-[#AD6049] font-semibold flex justify-center items-center mb-3">
                <Image
                  src={flower}
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