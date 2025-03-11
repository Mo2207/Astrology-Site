
"use client";

import { useTranslation } from "react-i18next";

export default function CourseDifference() {
  const { t } = useTranslation();

  const leftList = t("difference.left.list", { returnObjects: true }) as string[];
  const rightList = t("difference.right.list", { returnObjects: true }) as string[];

  return (
    <section id="course_difference" className="pt-12 pb-12 bg-[#FFFFFF] text-gray-900">
      <h2 className="flex justify-center text-3xl font-bold text-[#AD6049] pt-5 pb-5">{t("difference.title")}</h2>
      
      <div className="flex flex-row pt-8 gap-10 mx-10">
        {/* LEFT SIDE */}
        <div className="flex flex-col p-8 bg-[#FAF5F3] border border-[#AD6049] rounded-xl w-1/2">
        <h2 className="font-bold pb-6 text-center text-2xl">{t("difference.left.title")}</h2>
          <div className="text-left font-medium text-lg text-gray-600 space-y-3">
            {leftList.map((item, index) => (
              <p key={index} className="flex items-top gap-2">
                {item}
              </p>
            ))}
          </div>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex flex-col p-8 bg-[#FAF5F3] border border-[#AD6049] rounded-xl w-1/2">
        <h2 className="font-bold pb-6 text-center text-2xl">{t("difference.right.title")}</h2>
          <div className="text-left font-medium text-lg text-gray-600 space-y-3">
            {rightList.map((item, index) => (
              <p key={index} className="flex items-top gap-2">
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}