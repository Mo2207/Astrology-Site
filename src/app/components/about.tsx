
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 pt-[8rem] bg-[#dddddd] text-black">
      <div className="max-w-4xl mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-4">About Us</h2>
        <p className="text-lg text-black mb-6">
          Welcome to Astrology Insights, your guide to the celestial universe. Our mission is to help you
          discover the deeper meaning of the stars and how they influence your daily life. Whether you’re
          looking for daily horoscopes, zodiac sign compatibility, or astrological insights, we are here to illuminate your path.
        </p>

        <div className="flex justify-center gap-6 mt-6">

          {/* Astrology Readings */}
          <div className="w-64">
            <div className="w-64 h-64 relative rounded-lg overflow-hidden hover:scale-110 cursor-pointer duration-300">
              <Image
                src="/assets/img/about/astrology-readings.webp"
                alt="Astrology Readings"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-black text-center pt-[1.5rem]">Astrology Readings</p>
          </div>

          {/* Zodiac Insights */}
          <div className="w-64">
            <div className="w-64 h-64 relative rounded-lg overflow-hidden hover:scale-110 cursor-pointer duration-300">
              <Image
                src="/assets/img/about/zodiac-insights.webp"
                alt="Astrology Readings"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-black text-center pt-[1.5rem]">Zodiac Insights</p>
          </div>

          {/* Horoscope Predictions */}
          <div className="w-64">
            <div className="w-64 h-64 relative rounded-lg overflow-hidden hover:scale-110 cursor-pointer duration-300">
              <Image
                src="/assets/img/about/horoscope-readings.webp"
                alt="Astrology Readings"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <p className="text-black text-center pt-[1.5rem]">Horoscope Predictions</p>
          </div>

        </div>
      </div>
    </section>
  );
}