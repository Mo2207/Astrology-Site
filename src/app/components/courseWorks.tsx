
"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import CheckoutButton from "./ui/button/checkoutButton";

export default function CourseWorks() {
  const { t } = useTranslation();

  const cards = t("works.list", { returnObjects: true }) as { title: string; p: string; image: string; }[];

  return (
    <section id="course_works" className="flex justify-center pt-[4rem] pb-[3rem] bg-[#FFFFFF] text-gray-900">
      <div className="max-w-7xl self-center w-[90%]">
      <div className="flex justify-center text-center text-3xl font-bold pb-[2rem] px-5">
        <h2>{t("works.title")}</h2>
      </div>

      <div className="flex flex-col lg:flex-row justify-center  gap-5 items-stretch">

        {/* LEFT SIDE */}
        <div className="flex flex-1 w-full max-h-[500px] lg:max-h-none justify-center">
          <Image
            src={"/assets/img/works/flower-girl.jpeg"}
            width={518}
            height={778}
            alt="girl with flowers"
            className="border-0 rounded-lg object-cover object-top max-h-full h-auto w-full"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-full lg:w-[65%]">

          {/* cards */}
          <div className="flex flex-col gap-3">
            {cards.map((item, index) => (
              <div
                className="flex flex-row border-0 rounded-xl p-5 bg-[#faf5f3]"
                key={index}
              >
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt="flower svg"
                  className="w-[1.5rem] h-[1.5rem] mr-2"
                />
                <div>
                  <p className="font-bold pb-2 flex flex-col text-lg md:text-xl">{item.title}</p>
                  <p className="font-semibold text-md md:text-lg">{item.p}</p>
                </div>
              </div>
            ))}

            {/* pricing */}
            <div className="hidden md:block">
              <div className="flex flex-row justify-center items-center lg:justify-start gap-3">
                <CheckoutButton className="text-md md:text-lg" text={t("buttons.gain_access")}></CheckoutButton>
                <p className="text-md md:text-lg">
                  <span className="font-bold text-[#54994f]">{t("price.sale_price")}</span>
                  <del className="text-gray-500 ml-2 font-bold">{t("price.old_price")}</del>
                </p>
              </div>
            </div>

          </div>
        </div>
        
      </div>
      </div>
    </section>
  )
}