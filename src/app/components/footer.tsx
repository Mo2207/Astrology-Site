
import { useTranslation } from "react-i18next";
import { handleScroll } from "@/lib/utils";
import Image from "next/image";
import logo from "../../../public/assets/img/navigation/icons/main-logo.svg";
import instagram from "../../../public/assets/img/navigation/icons/instagram.svg";
import facebook from "../../../public/assets/img/navigation/icons/facebook.svg";

export default function Footer() {
  const { t } = useTranslation();

  const list = t("footer.list", { returnObjects: true }) as string[];

  // defined custom navs here since contact isnt need it is already at the bottom of page
  const navs = [
    { id: 1, name: "About", href: "about" },
    { id: 2, name: "Course", href: "course" },
    { id: 3, name: "Reviews", href: "reviews" },
  ];

  return (
    <section id="footer" className="bg-[#faf5f3] text-gray-900">
      <div className="flex justify-center flex-col py-10">

        {/* logo & social links */}
        <div className="flex flex-row justify-between px-4">
          {/* LEFT SIDE */}
          <Image
            src={logo}
            alt="flower svg"
            width={200}
            height={200}
          />
          {/* RIGHT SIDE */}
          <div className="flex flex-row gap-3 pb-4">
          <Image
            src={instagram}
            alt="flower svg"
            width={50}
            height={50}
          />
          <Image
            src={facebook}
            alt="flower svg"
            width={50}
            height={50}
          />
          </div>
        </div>

        {/* navigation */}
        <nav className="flex gap-12 justify-center text-2xl font-semibold border-t border-b border-[#DDBEA9] mb-10 py-2">
            {navs.map((nav) => (
              <a key={nav.id} onClick={() => handleScroll(nav.href)} className="hover:text-gray-400 hover:cursor-pointer transition">
                {t(`navs.${nav.id}.name`)}
              </a>
            ))}
          </nav>

        {/* links */}
        <div className="flex justify-center gap-20">
          {list.map((item, index) => (
            <div
              key={index}
              className=""
            >
              {item}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}