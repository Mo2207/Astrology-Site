
"use client";

import { useTranslation } from "react-i18next";

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = t("reviews.list", { returnObjects: true }) as Record<string, { name: string; review: string }>;

  return (
    <section id="reviews" className="pt-12 bg-[#FFFFFF] text-gray-900 h-[25rem]">
      <h2 className="text-3xl font-bold text-center">{t("reviews.title")}</h2>

      <div className="relative w-full overflow-x-auto h-[20rem]">
        <div className="flex items-center space-x-6 px-6 snap-x snap-mandatory overflow-x-scroll scrollbar-hide h-full">
          {Object.keys(reviews).map((key) => (
            <div
              key={key}
              className="flex-shrink-0 flex flex-col w-[20rem] h-[12rem] bg-white shadow-md rounded-lg p-6 snap-center border-1 border"
            >
              <h3 className="text-xl font-semibold text-center">{reviews[key].name}</h3>
              <p className="text-gray-600 text-center mb-3 mt-3">{reviews[key].review}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}