
// import { Button } from "./ui/button/button";
import { useTranslation } from "react-i18next";


export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="pt-[15rem] pb-[10rem] bg-[#FFFFFF] text-gray-900 flex justify-center">

      <div className="flex flex-col items-center w-[60%]">
        <p className="font-light text-3xl text-center">{t("hero.p")}</p>
      </div>

    </section>
  );
}