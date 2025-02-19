
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
          <div className="w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center p-6"

          >
            <p className="text-gray-400">Astrology Readings</p>
          </div>
          <div className="w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center p-6"
          
          >
            <p className="text-gray-400">Zodiac Insights</p>
          </div>
          <div className="w-64 h-64 bg-gray-800 rounded-lg flex items-center justify-center p-6"
          
          >
            <p className="text-gray-400">Horoscope Predictions</p>
          </div>
        </div>
      </div>
    </section>
  );
}