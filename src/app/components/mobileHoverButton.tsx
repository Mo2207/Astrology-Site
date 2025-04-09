
"use client";

import { useTranslation } from "react-i18next";
import CheckoutButton from "./ui/button/checkoutButton";

export default function MobileHoverButton() {
  const { t } = useTranslation();

  return (
    <section id="MobileHoverButton" className="text-gray-900 md:hidden ">
      <header className="fixed bottom-0 left-0 w-[100vw] text-gray-900 shadow-md z-50 p-2 bg-opacity-95 bg-[#faf5f3]">
        <div className="flex flex-col xs:flex-row justify-center items-center">
          <p className="text-xl xs:text-2xl sm:text-3xl pr-0 pb-2 xs:pr-4 xs:pb-0">
            <span className="font-bold text-[#54994f]">{t("price.sale_price")}</span>
            <br />
            <del className="text-gray-500 font-bold">{t("price.old_price")}</del>
          </p>

          <CheckoutButton className="text-3xl xs:text-4xl sm:text-5xl" text={t("buttons.buy_course")}></CheckoutButton>
        </div>
      </header>
    </section>
  );
}