
"use client";

import Image from "next/image";
import { Button } from "./ui/button/button";
import { useTranslation } from "react-i18next";
import flowerIcon from "../../../public/assets/img/course/icons/flower.svg";

export default function CourseCards() {
  const { t } = useTranslation();

  // translations for all card items
  const card1Items= t("course_cards.card1.items", { returnObjects: true }) as string[];
  const card2Items= t("course_cards.card2.items", { returnObjects: true }) as string[];
  const card3Items= t("course_cards.card3.items", { returnObjects: true }) as string[];
  
  return (
    <section id="course" className="flex flex-col items-center gap-12 bg-[#FFFFFF] text-gray-900 py-12">
      
      {/* Card 1 */}
      <div className="h-[32rem] w-[90vw] flex flex-row p-6 rounded-lg bg-[#faf5f3] border border-[#AD6049] text-gray-900 overflow-hidden gap-6">
        {/* LEFT SIDE */}
        {/* image */}
        <div className="w-1/2">
          <Image
            src={"/assets/img/course/lake.jpeg"}
            width={400}
            height={300}
            alt="woman next to lake"
            className="border-0 rounded-lg object-cover h-full w-full"
          />
        </div>
        {/* RIGHT SIDE */}
        {/* main text */}
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="font-bold pb-6 text-center text-2xl">{t("course_cards.card1.title")}</h2>
          <div className="text-left font-medium text-lg text-gray-600 space-y-3">
            {card1Items.map((item, index) => (
              <p key={index} className="flex items-top gap-2">
                <Image
                  src={flowerIcon}
                  alt="flower svg"
                  className="w-[1rem] h-[1rem] mt-2"
                />
                {item}
              </p>
            ))}
          </div>
          {/* pricing section */}
          <div className="flex flex-col items-start">
          <p className="mt-4 text-lg">
            <span className="font-bold text-[#54994f]">{t("price.sale_price")}</span> 
            <del className="text-gray-500 ml-2">{t("price.old_price")}</del>
          </p>
            <Button className="mt-3">{t("buttons.gain_access")}</Button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="h-[32rem] w-[90vw] flex flex-row p-6 rounded-lg bg-[#faf5f3] border border-[#AD6049] text-gray-900 overflow-hidden gap-6">
        {/* LEFT SIDE */}
        {/* main text */}
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="font-bold pb-6 text-center text-2xl">{t("course_cards.card2.title")}</h2>
          <div className="text-left font-medium text-lg text-gray-600 space-y-3">
            {card2Items.map((item, index) => (
              <p key={index} className="flex items-top gap-2">
                <Image
                  src={flowerIcon}
                  alt="flower svg"
                  className="w-[1rem] h-[1rem] mt-2"
                />
                {item}
              </p>
            ))}
          </div>
        </div>
        {/* RIGHT SIDE */}
        {/* image */}
        <div className="w-1/2">
          <Image
            src={"/assets/img/course/mountains.jpeg"}
            width={400}
            height={300}
            alt="mountains"
            className="border-0 rounded-lg object-cover h-full w-full"
          />
        </div>
      </div>

    </section>
  );
}