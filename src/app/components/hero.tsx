
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button/button";


export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="pt-[15rem] pb-[15rem] bg-[#FFFFFF] text-gray-900 flex justify-center">

      <div className="relative flex flex-col items-center w-[50%]">
        <h1 className="font-light text-3xl text-center whitespace-pre-line">{t("hero.h1")}</h1>
        <Button className="mt-5 self-center">{t('hero.Button')}</Button>
        <p 
          className="whitespace-pre-line absolute text-center flex items-center justify-center  
          rotate-[-30deg] bg-[#e9e9e9] 
          w-[6rem] h-[6rem] sm:w-[7rem] sm:h-[7rem] md:w-[7rem] md:h-[7rem] 
          rounded-full transform -bottom-5 -right-20 sm:-bottom-[2rem] sm:-right-[2rem] md:-bottom-[4rem] md:-right-[1rem] lg:-bottom-[4rem] lg:right-[3rem] xl:-bottom-[4rem] xl:right-[8rem] 2xl:-bottom-[4rem] 2xl:right-[10rem]">
            {t("hero.p")}
        </p>
      </div>

    </section>
  );
}