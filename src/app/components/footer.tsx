
import { useTranslation } from "react-i18next";
import { handleScroll, navs } from "@/lib/utils";


export default function Footer() {
  const { t } = useTranslation();

  const list = t("footer.list", { returnObjects: true }) as string[];

  return (
    <section id="footer" className="py-10 bg-white text-gray-900">
      <div className="flex justify-center flex-col">

        {/* logo & social links */}
        <div className="">

        </div>

        {/* navigation */}
        <nav className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex gap-6">
            {navs.map((nav) => (
              <a key={nav.id} onClick={() => handleScroll(nav.href)} className="hover:text-gray-400 hover:cursor-pointer transition">
                {t(`navs.${nav.id}.name`)}
              </a>
            ))}
          </nav>

        {/* links */}
        <div className="flex justify-center gap-10">
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