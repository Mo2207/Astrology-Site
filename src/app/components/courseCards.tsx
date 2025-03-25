
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
  const card2Spoilers= t("course_cards.card2.spoilers", { returnObjects: true }) as string[];
  // const card3Items= t("course_cards.card3.items", { returnObjects: true }) as string[];
  
  return (
    <section id="course" className="flex flex-col justify-center items-center gap-10 bg-[#FFFFFF] text-gray-900">
      <div className="max-w-7xl flex flex-col gap-5">
      
      {/* Card 1 */}
      <div className="hidden h-auto w-[90%] self-center flex-col md:flex-row rounded-lg bg-[#faf5f3] border border-[#AD6049] text-gray-900 overflow-hidden">
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
            <del className="text-gray-500 ml-2 font-bold">{t("price.old_price")}</del>
          </p>
            <CheckoutButton className="mt-3" text={t("buttons.gain_access")}></CheckoutButton>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="h-auto w-[90%] self-center flex flex-col md:flex-row rounded-lg bg-[#faf5f3] border border-[#AD6049] text-gray-900 overflow-hidden">
        {/* LEFT SIDE */}
        {/* main text */}
        <div className="h-1/2 w-full md:h-auto flex flex-col justify-center items-center p-5">
          <h2 className="font-bold pb-6 text-center text-xl sm:text-2xl md:text-xl lg:text-2xl">{t("course_cards.card2.title")}</h2>
          <div className="text-left font-medium text-md sm:text-lg md:text-lg lg:text-xl text-gray-600 space-y-3 pb-10">
            {card2Items.map((item, index) => (
              <p key={index} className="flex items-top gap-2">
                <Image
                  src={flowerIcon}
                  alt="flower svg"
                  className="w-[1rem] h-[1rem] mt-1"
                />
                {item}
              </p>
            ))}
          </div>
          <div className="text-left font-medium text-md sm:text-lg md:text-lg lg:text-xl text-gray-600 space-y-3 bg-white rounded-[16px] p-4">
            {card2Spoilers.map((item, index) => (
              <p key={index} className="items-top gap-2" dangerouslySetInnerHTML={{ __html: t(item).replace(/<strong>/g, "<b>").replace(/<\/strong>/g, "</b>") }} />
              // <p key={index} className="flex items-top gap-2">
              //   {item}
              // </p>
            ))}
          </div>
          {/* pricing section */}
          <div className="flex-col items-start hidden md:block">
            <p className="mt-4 text-md sm:text-lg md:text-lg lg:text-xl">
              <span className="font-bold text-[#54994f]">{t("price.sale_price")}</span> 
              <del className="text-gray-500 ml-2 font-bold">{t("price.old_price")}</del>
            </p>
            <CheckoutButton className="mt-3" text={t("buttons.gain_access")}></CheckoutButton>
          </div>
        </div>
        {/* RIGHT SIDE */}
        {/* image */}
        <div className="h-1/2 w-full md:h-auto relative">
          <Image
            src={"/assets/img/course/beach-sitting.png"}
            width={500}
            height={500}
            alt="woman sitting on the beach"
            className="border-0 object-cover h-full min-h-[15rem] w-full z-0"
            />

            {/* spoiler 1 */}
            {/* <div className="absolute flex top-4 left-4 z-10 bg-white bg-opacity-80 border-0 rounded-md p-3 font-md text-md md:font-semibold md:text-lg">
              <div>
                <p className="text-center">{t("spoilers.1.p1")}</p>
                <p className="text-center">{t("spoilers.1.p2")}</p>
              </div>
            </div> */}

            {/* spoiler 2 */}
            {/* <div className="absolute flex bottom-4 right-4 z-10 bg-white bg-opacity-80 border-0 rounded-md p-3 font-md text-md md:font-semibold md:text-lg">
              <div>
                <p className="text-center">{t("spoilers.2.p1")}</p>
                <p className="text-center">{t("spoilers.2.p2")}</p>
              </div>
            </div> */}

        </div>
      </div>

    </div>
    </section>
  );
}