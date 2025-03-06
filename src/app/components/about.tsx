
import Image from "next/image";
import { useTranslation } from "react-i18next";

export default function About() {
  const { t } = useTranslation();

  const description = t("about.description", { returnObjects: true }) as string[];

  return (
    <section id="about" className="flex items-center h-[100vh] pb-10 bg-white text-gray-900">
      <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* Left Side - Description */}
        <div className="w-full md:w-1/2 flex flex-col text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 flex justify-center">{t("about.h2")}</h2>
          <div>
            {description.map((item, index) => (
              <p 
                key={index}
                className="mb-3 font-semibold"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image 
            src={'/assets/img/about/empty-profile.jpg'} 
            alt="Astrology Image" 
            width={400} 
            height={400} 
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

      </div>
    </section>
  );
}