
"use client";

import { useTranslation } from "react-i18next";

export default function CourseDifference() {
  const { t } = useTranslation();

  const leftList = t("difference.left.list", { returnObjects: true }) as string[];
  const rightList = t("difference.right.list", { returnObjects: true }) as string[];

  return (
    <section id="course_difference" className="pt-12 pb-12 bg-[#FFFFFF] text-gray-900 flex justify-center">
      <div className="max-w-7xl">

      <h2 className="flex justify-center text-center text-3xl font-bold py-5 px-6">{t("difference.title")}</h2>
      
      <div className="flex flex-col md:flex-row pt-8 gap-3 mx-5 justify-center">
        {/* LEFT SIDE */}
        <div className="flex flex-col p-5 bg-[#FAF5F3] border border-[#AD6049] rounded-xl md:w-1/2 justify-center">
        <h2 className="font-bold pb-6 text-center text-xl md:text-2xl">{t("difference.left.title")}</h2>
          <div className="text-left font-medium text-md md:text-lg text-gray-600 space-y-2">
            {leftList.map((item, index) => (
              <p key={index} className="flex items-top gap-2">
                {item}
              </p>
            ))}
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex flex-col p-5 bg-[#FAF5F3] border border-[#AD6049] rounded-xl md:w-1/2 justify-center">
        <h2 className="font-bold pb-6 text-center text-xl md:text-2xl">{t("difference.right.title")}</h2>
          <div className="text-left font-medium text-md md:text-lg text-gray-600 space-y-2">
            {rightList.map((item, index) => (
              <p key={index} className="flex items-top gap-2">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

    </div>
    </section>
  )
}