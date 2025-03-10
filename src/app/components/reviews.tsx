
"use client";

import { useTranslation } from "react-i18next";

export default function Reviews() {
  const { t } = useTranslation();

  const reviews = t("reviews.list", { returnObjects: true }) as Record<string, { name: string; age: string; review: string }>;

  return (
    <section id="reviews" className="bg-[#FFFFFF] text-gray-900 h-[35rem] pb-10">
      <h2 className="text-3xl font-bold text-center">{t("reviews.title")}</h2>

      <div className="relative w-full overflow-hidden h-full">
        <div className="flex items-left justify-left space-x-6 px-6 pt-8 snap-x snap-mandatory overflow-x-scroll scrollbar-hide h-full">
          {Object.keys(reviews).map((key) => (
            <div
              key={key}
              className="flex-shrink-0 flex flex-col w-[28rem] h-[27rem] bg-[#faf5f3] shadow-md rounded-lg p-6 snap-center border border-[#AD6049]"
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