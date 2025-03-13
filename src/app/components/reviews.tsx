
"use client";

import { useTranslation } from "react-i18next";

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = t("reviews.list", { returnObjects: true }) as Record<string, { name: string; age: string; review: string }>;

  return (
    <section id="reviews" className="bg-[#FFFFFF] text-gray-900 h-[35rem] pb-10">
      <h2 className="text-2xl md:text-3xl lg-text-4xl font-bold text-center pb-10">{t("reviews.title")}</h2>

      <div className="relative w-full overflow-x-auto snap-start">
        <div className="flex flex-row items-center space-y-6 space-y-0 space-x-6 px-6 pt-8 snap-x snap-mandatory scrollbar-hide overflow-x-scroll ">
          {Object.keys(reviews).map((key) => (
            <div
              key={key}
              className="flex-shrink-0 flex flex-col justify-center w-full h-[25rem] md:w-[30rem] min-w-0 bg-[#faf5f3] shadow-md rounded-xl p-6 snap-center border border-[#AD6049]"
            >
              <h3 className="text-xl font-semibold">{reviews[key].name}</h3>
              <h2 className="font-light pb-3">{reviews[key].age}</h2>
              <p className="text-gray-600 mb-3 mt-3">{reviews[key].review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}