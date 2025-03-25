
"use client";

import { useTranslation } from "react-i18next";
import { useRef } from "react";
import flower from "../../../public/assets/img/curriculum/icons/flower.svg";
import left from "../../../public/assets/img/icons/arrow-left.svg";
import right from "../../../public/assets/img/icons/arrow-right.svg";
import Image from "next/image";

export default function CourseCurriculum() {
  const { t } = useTranslation();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const curriculum = t("curriculum.list", { returnObjects: true }) as Record<string, { title: string; step1: string; step2: string }>;

  return (
    <section id="curriculum" className="pt-12 bg-[#FFFFFF] text-gray-900 h-[25rem]">

      <h2 className="text-2xl md:text-3xl lg-text-4xl font-bold text-center pb-10">{t("curriculum.title")}</h2>

      <div className="relative w-full overflow-hidden justify-center flex h-[20rem]">
        
      <Image
          onClick={scrollLeft}
          src={left}
          alt="left arrow icon"
          className="w-[3rem] h-[3rem] absolute left-5 bottom-0 -translate-x-y-1/2 lg:hidden hover:scale-150 transition delay-100 duration-300 ease-in-out"
        />
        <Image
          onClick={scrollRight}
          src={right}
          alt="right arrow icon"
          className="w-[3rem] h-[3rem] absolute right-5 bottom-0 -translate-x-y-1/2 lg:hidden hover:scale-150 transition delay-100 duration-300 ease-in-out"
        />

        <div 
          className="flex flex-row space-x-6  px-6 pt-8 snap-x snap-mandatory scrollbar-hide overflow-x-auto h-[16rem] w-full"
          ref={scrollContainerRef}
        > 
          {Object.keys(curriculum).map((key) => (
            <div
              key={key}
              className="flex-shrink-0 flex flex-col justify-start w-full h-[90%] sm:w-[20rem] min-w-0 bg-[#faf5f3] shadow-md rounded-xl p-4 snap-center border border-[#AD6049]"
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