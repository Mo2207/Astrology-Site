
"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import CheckoutButton from "./ui/button/checkoutButton";

export default function CourseWorks() {
  const { t } = useTranslation();

  const cards = t("works.list", { returnObjects: true }) as { title: string; p: string; image: string; }[];

  return (
    <section id="course_works" className="pt-12 pb-20 bg-[#FFFFFF] text-gray-900">
      <div className="flex justify-center text-center text-3xl font-bold pb-16 px-5">
        <h2>{t("works.title")}</h2>
      </div>

      <div className="flex flex-col md:flex-row justify-center px-10 gap-5 items-stretch">

        {/* LEFT SIDE */}
        <div className="flex bg-[#FAF5F3] w-full md:w-2/5">
          <Image
            src={"/assets/img/works/flower-girl.jpeg"}
            width={500}
            height={500}
            alt="girl with flowers"
            className="border-0 rounded-lg object-cover w-full max-h-[60vh] md:max-h-full"
            style={{ objectPosition: "center top" }}
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col w-full md:w-3/5">

          {/* cards */}
          <div className="flex flex-col justify-between flex-grow">
            {cards.map((item, index) => (
              <div
                className="flex flex-row border-0 rounded-xl p-5 bg-[#faf5f3] mb-2"
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
            <div className="">
              <div className="flex flex-row items-start gap-5">
                <CheckoutButton className="" text={t("buttons.gain_access")}></CheckoutButton>
                <p className="mt-2 text-lg">
                  <span className="font-bold text-[#54994f]">{t("price.sale_price")}</span>
                  <del className="text-gray-500 ml-2">{t("price.old_price")}</del>
                </p>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </section>
  )
}