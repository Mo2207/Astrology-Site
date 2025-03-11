
"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import { Button } from "./ui/button/button";


export default function CourseWorks() {
  const { t } = useTranslation();

  const cards = t("works.list", { returnObjects: true }) as { title: string; p: string; image: string; }[];

  return (
    <section id="course_works" className="pt-12 pb-20 bg-[#FFFFFF] text-gray-900">
      <div className="flex justify-center text-3xl font-bold pb-16">
        <h2>{t("works.title")}</h2>
      </div>
      <div className="flex flex-row justify-center px-20">
        
        {/* LEFT SIDE */}
        <div className="flex flex-col bg-[#FAF5F3] w-1/3">
          <Image
            src={"/assets/img/works/flower-girl.jpeg"}
            width={300}
            height={300}
            alt="girl with flowers"
            className="border-0 rounded-lg object-cover h-full w-full"
          />   
        </div>
      
        {/* RIGHT SIDE */}
        <div className="flex flex-col px-8 w-2/3">

        {/* cards */}
          <div className="flex flex-col gap-4">
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
                  <p className="font-bold text-xl pb-2 flex flex-col">{item.title}</p>
                  <p className="font-semibold">{item.p}</p>
                </div>
              </div>
            ))}
          </div>

          {/* pricing */}
          <div className="pt-5">
            <div className="flex flex-row items-start">
              <Button className="mt-3 mr-10">{t("buttons.gain_access")}</Button>
              <p className="mt-4 text-lg">
                <span className="font-bold text-[#54994f]">{t("price.sale_price")}</span> 
                <del className="text-gray-500 ml-2">{t("price.old_price")}</del>
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}