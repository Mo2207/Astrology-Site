
"use client";

import Image from "next/image";
import CheckoutButton from "./ui/button/checkoutButton";
import { useTranslation } from "react-i18next";
import flowerIcon from "../../../public/assets/img/course/icons/flower.svg";

export default function CourseCards() {
  const { t } = useTranslation();

  // translations for all card items
  const card1Items= t("course_cards.card1.items", { returnObjects: true }) as string[];
  const card2Items= t("course_cards.card2.items", { returnObjects: true }) as string[];
  // const card3Items= t("course_cards.card3.items", { returnObjects: true }) as string[];
  
  return (
    <section id="course" className="flex flex-col items-center gap-10 bg-[#FFFFFF] text-gray-900">
      
      {/* Card 1 */}
      <div className="h-auto w-[90%] flex flex-col md:flex-row rounded-lg bg-[#faf5f3] border border-[#AD6049] text-gray-900 overflow-hidden">
        {/* LEFT SIDE */}
        {/* image */}
        <div className="h-1/2 w-full md:h-auto ">
          <Image
            src={"/assets/img/course/beach.png"}
            width={500}
            height={500}
            alt="woman standing on beach"
            className="border-0 object-cover min-h-[15rem] h-full w-full"
          />
        </div>
        {/* RIGHT SIDE */}
        {/* main text */}
        <div className="h-1/2 w-full md:h-auto flex flex-col justify-center items-center p-5">
          <h2 className="font-bold pb-6 text-center text-xl sm:text-2xl md:text-xl lg:text-2xl">{t("course_cards.card1.title")}</h2>
          <div className="text-left font-medium text-gray-600 space-y-3 text-md sm:text-lg md:text-lg lg:text-xl">
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
          <p className="mt-4 text-md sm:text-lg md:text-lg lg:text-xl">
            <span className="font-bold text-[#54994f]">{t("price.sale_price")}</span> 
            <del className="text-gray-500 ml-2">{t("price.old_price")}</del>
          </p>
            <CheckoutButton className="mt-3" text={t("buttons.gain_access")}></CheckoutButton>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="h-auto w-[90%] flex flex-col md:flex-row rounded-lg bg-[#faf5f3] border border-[#AD6049] text-gray-900 overflow-hidden">
        {/* LEFT SIDE */}
        {/* main text */}
        <div className="h-1/2 w-full md:h-auto flex flex-col justify-center items-center p-5">
          <h2 className="font-bold pb-6 text-center text-xl sm:text-2xl md:text-xl lg:text-2xl">{t("course_cards.card2.title")}</h2>
          <div className="text-left font-medium text-md sm:text-lg md:text-lg lg:text-xl text-gray-600 space-y-3">
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
          {/* pricing section */}
          <div className="flex flex-col items-start">
          <p className="mt-4 text-md sm:text-lg md:text-lg lg:text-xl">
            <span className="font-bold text-[#54994f]">{t("price.sale_price")}</span> 
            <del className="text-gray-500 ml-2">{t("price.old_price")}</del>
          </p>
            <CheckoutButton className="mt-3" text={t("buttons.gain_access")}></CheckoutButton>
          </div>
        </div>
        {/* RIGHT SIDE */}
        {/* image */}
        <div className="h-1/2 w-full md:h-auto">
          <Image
            src={"/assets/img/course/beach-sitting.png"}
            width={500}
            height={500}
            alt="woman sitting on the beach"
            className="border-0 object-cover h-full min-h-[15rem] w-full"
          />
        </div>
      </div>

    </section>
  );
}