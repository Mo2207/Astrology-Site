
"use client";

import { useTranslation } from "react-i18next";
// import left from "../../../public/assets/img/icons/arrow-left.svg";
// import right from "../../../public/assets/img/icons/arrow-right.svg";
import dots from "../../../public/assets/img/icons/dots.svg";
import Image from "next/image";
// import { useRef } from "react";

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = t("reviews.list", { returnObjects: true }) as Record<string, { name: string; age: string; review: string }>;

  // const scrollContainerRef = useRef<HTMLDivElement>(null);

  // const scrollLeft = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({ left: -300, behavior: "smooth" });
  //   }
  // };

  // const scrollRight = () => {
  //   if (scrollContainerRef.current) {
  //     scrollContainerRef.current.scrollBy({ left: 300, behavior: "smooth" });
  //   }
  // };

  return (
    <section id="reviews" className="bg-[#FFFFFF] text-gray-900 h-auto">
      <h2 className="text-2xl md:text-3xl lg-text-4xl font-bold text-center pb-2">{t("reviews.title1")}</h2>
      <h2 className="text-lg md:text-xl lg-text-2xl font-normal text-center">{t("reviews.title2")}</h2>

      <div className="relative w-full overflow-hidden snap-start pb-10 md:h-[500px]">
        <div 
          className="flex flex-row space-x-6 px-6 pt-8 
           overflow-x-auto overflow-y-hidden 
           snap-x snap-mandatory 
           scrollbar-hide w-full h-full"
          // ref={scrollContainerRef}
        >
          {Object.keys(reviews).map((key) => (
            <div
              key={key}
              className="flex-shrink-0 flex flex-col w-full md:h-full md:w-[30rem] min-w-0 bg-[#faf5f3] shadow-md rounded-xl p-6 snap-center border border-[#AD6049] overflow-y-auto"
            >
              <h3 className="text-xl font-semibold">{reviews[key].name}</h3>
              <h2 className="font-light pb-3">{reviews[key].age}</h2>
              <p className="text-gray-600 mb-3 mt-3">{reviews[key].review}</p>
            </div>
          ))}
        </div>


          <Image
            src={dots}
            alt="right arrow icon"
            className="w-[3rem] h-[3rem] absolute bottom-[-2rem] left-1/2 -translate-x-1/2 -translate-y-1/2 md:flex"
          />
          {/* <Image
            onClick={scrollLeft}
            src={left}
            alt="right arrow icon"
            className="w-[3rem] h-[3rem] absolute left-5 bottom-0 -translate-x-y-1/2  hover:scale-150 transition delay-100 duration-300 ease-in-out hidden md:flex"
          />
          <Image
            onClick={scrollRight}
            src={right}
            alt="right arrow icon"
            className="w-[3rem] h-[3rem] absolute right-5 bottom-0 -translate-x-y-1/2  hover:scale-150 transition delay-100 duration-300 ease-in-out hidden md:flex"
          /> */}
        </div>
      

    </section>
  )
}