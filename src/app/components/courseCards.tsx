
"use client";

import Image from "next/image";
import CheckoutButton from "./ui/button/checkoutButton";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "next/navigation";
import flowerIcon from "../../../public/assets/img/course/icons/flower.svg";

export default function CourseCards() {
  const { t } = useTranslation();
  const searchParams = useSearchParams();
  const audience = searchParams.get("audience");

  const salePrice = audience === '2' ? '$9USD/370' : '$15CAD/580';
  const oldPrice = audience === '2' ? '$95USD/3700' : '$95CAD/2700';

  // translations for all card items
  const card2Items= t("course_cards.card2.items", { returnObjects: true }) as string[];
  const card2Spoilers= t("course_cards.card2.spoilers", { returnObjects: true }) as string[];
  
  return (
    <section id="course" className="flex flex-col justify-center items-center gap-10 bg-[#FFFFFF] text-gray-900">
      <div className="max-w-7xl flex flex-col gap-5">

        {/* Card 1 */}
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
              ))}
            </div>

            {/* pricing section */}
            <div className="flex-col items-start hidden md:block">
              <p className="mt-4 text-md sm:text-lg md:text-lg lg:text-xl">
                <span className="font-bold text-[#54994f]">{salePrice}{t("price.sign")}</span>
                <del className="text-gray-500 ml-2 font-bold">{oldPrice}{t("price.sign")}</del>
              </p>
              <div className="flex justify-center">
                <CheckoutButton className="mt-3" text={t("buttons.gain_access")}></CheckoutButton>
              </div>
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
          </div>

        </div>

      </div>
    </section>
  );
}