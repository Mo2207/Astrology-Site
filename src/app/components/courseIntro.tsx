
"use client";

import { useTranslation } from "react-i18next";
import flowerIcon from "../../../public/assets/img/course/icons/flower.svg";
import Image from "next/image";

export default function CourseIntro() {
  const { t } = useTranslation();

  const list = t("intro.list", { returnObjects: true }) as string[];
  const list2 = t("intro.list2", { returnObjects: true }) as string[];

  return (
    <section id="course_intro" className="pt-[3rem] pb-[1rem] bg-[#FFFFFF] text-gray-900 flex justify-center">
      <div className="max-w-7xl">
      
      <div className="flex justify-center">
        <div className="flex flex-col p-8 bg-[#FAF5F3] border border-[#AD6049] rounded-xl justify-center w-[90%] md:w-[70%] font-md md:font-semibold text-md md:text-lg">

        <h2 className="font-bold pb-6 text-center text-xl md:text-2xl">{t("intro.title")}</h2>

        <div className="pb-6">
          {list.map((item, index) => (
            <p 
              key={index}
              className="pb-2 flex flex-row"
            >
              <Image
                  src={flowerIcon}
                  alt="flower svg"
                  className="w-[1rem] h-[1rem] mt-1 mr-2 md:mt-2"
                />
              <span className="font-bold pb-3" dangerouslySetInnerHTML={{ __html: t(item).replace(/<strong>/g, "<b>").replace(/<\/strong>/g, "</b>") }} />
              {/* {item} */}
            </p>
          ))}
        </div>
        <h2 className="font-bold pb-6 text-center text-xl md:text-2xl">{t("intro.title2")}</h2>

        <div className="">
          {list2.map((item, index) => (
            <p 
              key={index}
              className="pb-2 flex flex-row"
            >
              <Image
                  src={flowerIcon}
                  alt="flower svg"
                  className="w-[1rem] h-[1rem] mt-1 mr-2 md:mt-2"
                />
                
              {item}
            </p>
          ))}
        </div>

        </div>
      </div>

    </div>
    </section>
  )
}