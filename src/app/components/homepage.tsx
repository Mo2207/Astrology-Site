
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button/button';
import Image from 'next/image';

const zodiacSigns = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19', icon: '/assets/img/aries.webp', description: '' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', icon: '/assets/img/taurus.webp', description: '' },
  { name: 'Gemini', dates: 'May 21 - Jun 20', icon: '/assets/img/gemini.webp', description: '' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22', icon: '/assets/img/cancer.webp', description: '' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22', icon: '/assets/img/leo.webp', description: '' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22', icon: '/assets/img/virgo.webp', description: '' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22', icon: '/assets/img/libra.webp', description: '' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21', icon: '/assets/img/scorpio.webp', description: '' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', icon: '/assets/img/sagattarius.webp', description: '' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19', icon: '/assets/img/capricorn.webp', description: '' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18', icon: '/assets/img/aquarius.webp', description: '' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20', icon: '/assets/img/pisces.webp', description: '' },
];

export default function HomePage() {
  const [selectedSign, setSelectedSign] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-black text-white">
      {/* Hero Section */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold mb-4">Unlock Your Cosmic Path</h1>
        <p className="text-lg text-gray-300">Discover insights from the stars and navigate your destiny.</p>
        <Button className="mt-6 bg-purple-600 hover:bg-purple-700">Get Your Horoscope</Button>
      </section>

      {/* Zodiac Signs Grid */}
      <section className="py-12 px-6">
        <h2 className="text-3xl font-semibold text-center mb-8">Choose Your Zodiac Sign</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {zodiacSigns.map((sign) => (
            <motion.div
              key={sign.name}
              className="bg-gray-800 p-4 rounded-lg shadow-md hover:bg-gray-700 cursor-pointer text-center min-h-[8rem]"
              style={{
                backgroundImage: `url(${sign.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedSign(sign.name)}
            >
              <h3 className="text-xl font-medium">{sign.name}</h3>
              <p className="text-sm text-gray-400">{sign.dates}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Horoscope Section */}
      {selectedSign && (
        <motion.section 
          className="text-center py-10 px-4 bg-gray-900 rounded-lg mx-auto w-3/4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2 className="text-2xl font-semibold">Today's Horoscope for {selectedSign}</h2>
          <p className="text-lg text-gray-300 mt-4">{selectedSign.description}</p>
        </motion.section>
      )}

      {/* Footer */}
      <footer className="text-center py-6 mt-12 bg-gray-900">
        <p className="text-gray-400">&copy; 2025 Astrology Insights. All Rights Reserved.</p>
      </footer>
    </div>
  );
}