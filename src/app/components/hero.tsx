
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button/button";


export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="pt-[15rem] pb-[15rem] bg-[#FFFFFF] text-gray-900 flex justify-center">

      <div className="relative flex flex-col items-center w-[60%]">
        <h1 className="font-light text-3xl text-center">{t("hero.h1")}</h1>
        <Button className="mt-5">{t('hero.Button')}</Button>
        <p className="absolute text-center flex items-center justify-center -bottom-20 -right-10 rotate-[-30deg] bg-[#e9e9e9] w-[7rem] h-[7rem] rounded-full transform -translate-x-1/2 -translate-y-1/2">{t("hero.p")}</p>
      </div>

    </section>
  );
}