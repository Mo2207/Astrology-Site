
import Image from "next/image";
import { useTranslation } from "react-i18next";
import flowerIcon from "../../../public/assets/img/course/icons/flower.svg";


export default function About() {
  const { t } = useTranslation();

  const description = t("about.description", { returnObjects: true }) as string[];

  return (
    <section id="about" className="flex items-center justify-center py-[2rem] bg-white text-gray-900">
      <div className="max-w-7xl">
      
      <div className="w-[90%] h-[50rem] md:h-[35rem] mx-auto flex flex-col md:flex-row items-center gap-12">

        {/* LEFT SIDE */}
        <div className="w-full h-full md:w-1/2 flex justify-center items-center overflow-hidden">
          <Image 
            src={'/assets/img/about/Maria.jpeg'} 
            alt="Astrology Image" 
            width={400} 
            height={400} 
            className="w-[90%] h-[80%] object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full h-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-semibold mb-4 flex justify-center">{t("about.h2")}</h2>
          <div>
            {description.map((item, index) => (
              <p 
                key={index}
                className="mb-3 font-semibold flex flex-row text-start"
              >
                <Image
                  src={flowerIcon}
                  alt="flower svg"
                  className="w-[1rem] h-[1rem] mt-1 mr-1"
                />
                {item}
              </p>
            ))}
          </div>
        </div>

      </div>
      </div>
    </section>
  );
}