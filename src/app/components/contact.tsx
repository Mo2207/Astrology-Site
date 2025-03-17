
import { Button } from "./ui/button/button";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import flower from "../../../public/assets/img/contact/flower.png";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-[4rem] bg-white text-gray-900 flex justify-center">
      <div className="max-w-7xl">

      <div className="flex flex-col md:flex-row justify-center gap-5 w-full mx-auto">

        {/* LEFT SIDE */}
        <div className="flex-[3]">
          <Image
            src={flower}
            alt="picture of a flower"
            className="border-0 rounded-lg object-cover h-[15rem] w-full"
          />
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-[2] flex flex-col justify-center">
          <h2 className="font-bold text-2xl pb-4">{t("contact.title")}</h2>
          <p className="font-semibold pb-3">{t("contact.p")}</p>
          <Button className="self-start">{t("buttons.messenger")}</Button>
        </div>

      </div>
      </div>
    </section>
  );
}