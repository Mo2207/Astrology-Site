
"use client";

import { useTranslation } from "react-i18next";
import flower from "../../../public/assets/img/curriculum/icons/flower.svg";
import dots from "../../../public/assets/img/icons/dots.svg";
import Image from "next/image";

export default function CourseCurriculum() {
  const { t } = useTranslation();
  const curriculum = t("curriculum.list", { returnObjects: true }) as Record<string, { title: string; step1: string; step2: string }>;

  return (
    <section id="curriculum" className="pt-6 bg-[#FFFFFF] text-gray-900 h-auto sm:h-[25rem]">

      <h2 className="text-2xl md:text-3xl lg-text-4xl font-bold text-center pb-2">{t("curriculum.title")}</h2>

      <div className="relative w-full justify-center flex h-auto sm:h-[20rem]">

        <Image
            src={dots}
            alt="dots icon"
            className="w-[3rem] h-[3rem] absolute bottom-[-1rem] left-1/2 -translate-x-1/2 -translate-y-1/2 hidden sm:flex"
          />

        <div 
          className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-6 px-6 pt-8 snap-y sm:snap-x snap-mandatory scrollbar-hide sm:overflow-x-auto sm:h-[16rem] w-full"
        > 
          {Object.keys(curriculum).map((key) => (
            <div
              key={key}
              className="flex-shrink-0 flex flex-col justify-start w-full sm:w-[20rem] min-w-0 bg-[#faf5f3] shadow-md rounded-xl p-4 snap-center border border-[#AD6049]"
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