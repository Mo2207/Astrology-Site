
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button/button";
import Image from "next/image";
import sitting from "../../../public/assets/img/hero/woman-sitting.jpeg";
import teaching from "../../../public/assets/img/hero/teaching.jpeg";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="hero" className="pb-[6rem] bg-[#FFFFFF] text-gray-900 flex justify-center flex-col">

      <div className="flex justify-center flex-col w-[50%] mx-auto py-[4rem] md:py-[8rem]">
        <h1 className="pb-8 font-bold text-center text-xl sm:text-3xl md:text-4xl">{t("hero.title")}</h1>
        <Button className="self-start self-center">{t("buttons.start_course")}</Button>
      </div>


      <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-2 gap-2 w-[90%] h-auto max-h-[40rem] md:min-h-[20rem] mx-auto text-[#444444]">

        <div className="col-span-2 row-span-2 md:col-span-2 md:row-span-2">
          <Image
            src={sitting}
            width={500}
            height={500}
            alt="woman sitting on chair"
            className="border-0 rounded-lg object-cover w-full h-full"
          />
        </div>

        <div className="row-span-2">
          <Image
            src={teaching}
            width={500}
            height={500}
            alt="woman teaching"
            className="border-0 rounded-lg object-cover w-full h-full"
          />
        </div>

        <div 
          className="bg-cover bg-center bg-no-repeat border-0 rounded-xl flex justify-center flex-col items-center"
          style={{ backgroundImage: "url('/assets/img/hero/sand-background.jpeg')" }}
        >
          <div className="text-center p-4 text-sm sm:text-lg lg:text-xl">
            <h2 className="font-bold pb-6">{t("hero.start.title")}</h2>
            <p className="font-semibold">{t("hero.start.p")}</p>
          </div>
        </div>

        <div className="bg-[#faf5f3] flex justify-center items-center flex-col px-6 border-0 rounded-xl">
          <div className="text-center p-4 text-sm sm:text-lg lg:text-xl">
            <h2 className="font-bold pb-6">{t("hero.access.title")}</h2>
            <p className="font-semibold">{t("hero.access.p")}</p>
          </div>
        </div>

      </div>
    </section>
  );
}