
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button/button";
import Image from "next/image";


export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="pt-[20rem] pb-[15rem] bg-[#FFFFFF] text-gray-900">

      <div className="flex flex-row justify-center">

        {/* LEFT SIDE */}
        <div className="flex flex-col">
        <p className="mb-[2rem] font-light">
          {t("hero.p2")}
        </p>
        <h1 className="font-light text-3xl text-left whitespace-pre-line">{t("hero.h1")}</h1>
        <p className="mt-[1rem] font-light">
          {t("hero.p")}
        </p>
        <Button className="mt-5 w-auto self-start">{t('hero.Button')}</Button>
        {/* <p 
          className="whitespace-pre-line absolute text-center flex items-center justify-center  
          rotate-[-30deg] bg-[#e9e9e9] 
          w-[6rem] h-[6rem] sm:w-[7rem] sm:h-[7rem] md:w-[7rem] md:h-[7rem] 
          rounded-full transform -bottom-5 -right-20 sm:-bottom-[2rem] sm:-right-[2rem] md:-bottom-[4rem] md:-right-[1rem] lg:-bottom-[4rem] lg:right-[3rem] xl:-bottom-[4rem] xl:right-[8rem] 2xl:-bottom-[4rem] 2xl:right-[10rem]">
            {t("hero.p")}
        </p> */}
        </div>

        {/* RIGHT SIDE */}
        {/* <div className="">
          <Image
            src={"/assets/img/hero/hero-star.svg"}
            width={400}
            height={300}
            alt="random image"
            className="border-0 rounded-lg object-cover h-full w-full"
          />
        </div> */}
        
      </div>

    </section>
  );
}