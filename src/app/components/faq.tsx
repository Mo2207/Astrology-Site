
"use client";

import { useTranslation } from "react-i18next";
import Image from "next/image";
import chevron from "../../../public/assets/img/faq/icons/chevron.svg";
import { useState } from "react";

export default function Faq() {
  const { t } = useTranslation();

  const questions = t("faq.list", { returnObjects: true }) as Array<{ question: string; answer: string, answer2?: string, answer3?: string }>;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleAnswer = (index: number) => {
    setOpenIndex(openIndex === index? null : index);
  }

  return (
    <section id="faq" className="pt-20 bg-white text-gray-900 flex justify-center">
      <div className="max-w-7xl flex justify-center">

      <div className="flex flex-col w-[80vw]">
      <h2 className="self-center font-bold text-3xl pb-12">{t("faq.title")}</h2>

      <div className="flex justify-center flex-col gap-6 cursor-pointer">
        {questions.map((item, index) => (
          <div
            key={index}
            className="flex flex-col border border-[#C58C6D] rounded-xl p-4 hover:bg-[#FAF5F3]"
            onClick={() => {
              toggleAnswer(index);
            }}
          >
            {/* question and chevron */}
            <div className=" flex flex-row justify-between">
              <h2 className="py-2 font-semibold text-xl">{item.question}</h2>
              <Image
                src={chevron}
                alt="flower svg"
                className={`w-[2rem] h-[2rem] mt-2 transition-transform duration-500 ease-in-out ${openIndex === index ? "rotate-90" : ""}`}
              />
            </div>

            {/* dropdown with answer */}
            <div className="overflow-hidden text-wrap w-full">
              {openIndex === index && (
                <>
                  <p 
                    className="mt-3 transition-opacity duration-600 break-words max-w-[90%]"
                    dangerouslySetInnerHTML={{ __html: item.answer.replace(/<strong>/g, "<b>").replace(/<\/strong>/g, "</b>") }}
                  />
                  {/* {item.answer} */}
                  {index === 0 && (
                    <>
                    <p className="mt-3 transition-opacity duration-600 break-words max-w-[90%]"
                      dangerouslySetInnerHTML={{ __html: item.answer2!.replace(/<strong>/g, "<b>").replace(/<\/strong>/g, "</b>") }}
                    />
                    <p className="mt-3 transition-opacity duration-600 break-words max-w-[90%]"
                      dangerouslySetInnerHTML={{ __html: item.answer3!.replace(/<strong>/g, "<b>").replace(/<\/strong>/g, "</b>") }}
                    />
                    </>
                  )}
                </>
              )}
              {/* {index === 0 && (
                <>
                <p 
                  className="mt-3 transition-opacity duration-600 break-words max-w-[90%]"
                >
                  {item.answer}
                </p>
                  <p className="mt-3 transition-opacity duration-600 break-words max-w-[90%]">
                    {item.answer2}
                  </p>
                  <p className="mt-3 transition-opacity duration-600 break-words max-w-[90%]">
                    {item.answer3}
                  </p>
                </>
              )} */}
            </div>
            
          </div>
        ))}
      </div>

      </div>
      </div>
    </section>
  )
}