
"use client";

import Image from "next/image";
import { Button } from "./ui/button/button";
import { useTranslation } from "react-i18next";
import flowerIcon from "../../../public/assets/img/course/icons/flower.svg";

export default function Course() {
  const { t } = useTranslation();

  // translations for all card items
  const card1Items= t("course_cards.card1.items", { returnObjects: true }) as string[];
  const card2Items= t("course_cards.card2.items", { returnObjects: true }) as string[];
  const card3Items= t("course_cards.card3.items", { returnObjects: true }) as string[];
  const card3ItemsCheckList = t("course_cards.card3.bonus.checklist", { returnObjects: true }) as string[];
  
  return (
    <section id="course" className="flex flex-col items-center gap-12 bg-[#FFFFFF] text-gray-900 py-12">
      
      {/* Card 1 */}
      <div className="h-[32rem] max-w-5xl flex flex-row p-6 rounded-lg border border-black bg-gray-100 hover:bg-gray-200 text-gray-900 overflow-hidden cursor-pointer gap-6">
        {/* LEFT SIDE */}
        {/* image */}
        <div className="w-1/2">
          <Image
            src={"/assets/img/course/person-using-laptop.jpg"}
            width={400}
            height={300}
            alt="random image"
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
          <p className="mt-4">
            <span className="font-bold">{t("course_cards.card1.sale_price")}</span> 
            <del className="text-gray-500 ml-2">{t("course_cards.card1.old_price")}</del>
          </p>
            <Button className="mt-3">{t("buttons.gain_access")}</Button>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="h-[32rem] max-w-5xl flex flex-row p-6 rounded-lg border border-black bg-gray-100 hover:bg-gray-200 text-gray-900 overflow-hidden cursor-pointer gap-6">
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
            src={"/assets/img/course/person-using-laptop.jpg"}
            width={400}
            height={300}
            alt="random image"
            className="border-0 rounded-lg object-cover h-full w-full"
          />
        </div>
      </div>

      {/* card 3 */}
      <div className="h-[32rem] max-w-5xl flex flex-row p-6 rounded-lg border border-black bg-gray-100 hover:bg-gray-200 text-gray-900 overflow-hidden cursor-pointer gap-6">
        {/* LEFT SIDE */}
        {/* image */}
        <div className="w-1/2">
          <Image
            src={"/assets/img/course/person-using-laptop.jpg"}
            width={400}
            height={300}
            alt="random image"
            className="border-0 rounded-lg object-cover h-full w-full"
          />
        </div>
        {/* RIGHT SIDE */}
        {/* main text */}
        <div className="w-1/2 flex flex-col justify-center">
          <h2 className="font-bold pb-6 text-center text-2xl">{t("course_cards.card3.title")}</h2>
          <div className="text-left font-medium text-lg text-gray-600 space-y-3">
            {card3Items.map((item, index) => (
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
          {/* bonus section */}
          <div className="flex flex-col items-start mt-4">
            <h2 className="font-bold">{t("course_cards.card3.bonus.title")}</h2>
            <div className="text-left font-medium text-md text-gray-600">
              {card3ItemsCheckList.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
          {/* pricing section */}
          <div className="flex flex-col items-start">
          <p className="mt-4">
            <span className="font-bold">{t("course_cards.card1.sale_price")}</span> 
            <del className="text-gray-500 ml-2">{t("course_cards.card1.old_price")}</del>
          </p>
            <Button className="mt-3">{t("buttons.gain_access")}</Button>
          </div>
        </div>
      </div>

    </section>
  );
}