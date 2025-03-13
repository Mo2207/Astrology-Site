
"use client";

import { useTranslation } from "react-i18next";
import flower from "../../../public/assets/img/curriculum/icons/flower.svg";
import Image from "next/image";

export default function CourseCurriculum() {
  const { t } = useTranslation();

  const curriculum = t("curriculum.list", { returnObjects: true }) as Record<string, { title: string; step1: string; step2: string }>;

  return (
    <section id="curriculum" className="pt-12 bg-[#FFFFFF] text-gray-900 h-[25rem]">
      <h2 className="text-2xl md:text-3xl lg-text-4xl font-bold text-center pb-10">{t("curriculum.title")}</h2>

      <div className="relative w-full overflow-hidden snap-start">
        <div className="flex flex-row space-y-0 space-x-6 px-6 pt-8 snap-x snap-mandatory scrollbar-hide overflow-y-hidden h-[18rem]">
          {Object.keys(curriculum).map((key) => (
            <div
              key={key}
              className="flex-shrink-0 flex flex-col justify-start w-full h-full sm:w-[20rem] min-w-0 bg-[#faf5f3] shadow-md rounded-xl p-6 snap-center border border-[#AD6049]"
            >
              <h3 className="text-lg md:text-xl text-[#AD6049] font-semibold flex justify-center items-center mb-3">
                <Image
                  src={flower}
                  alt="flower svg"
                  className="w-[2rem] h-[2rem] mr-2"
                />
                {curriculum[key].title}
              </h3>
              <p className="text-gray-600 text-center mb-3 text-md lg:text-md">{curriculum[key].step1}</p>
              <p className="text-gray-600 text-center mb-3 text-md lg:text-md">{curriculum[key].step2}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}