
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/app/components/ui/button/button';
import Image from 'next/image';

type ZodiacSign = {
  name: string;
  dates: string;
  icon: string;
  description: string;
};

const zodiacSigns: ZodiacSign[] = [
  { name: 'Aries', dates: 'Mar 21 - Apr 19', icon: '/assets/img/zodiacs/aries.webp', description: '🔥 The Bold Trailblazer Aries is a dynamic and passionate leader, always ready to take on new challenges. Ruled by Mars, they are full of energy, ambition, and confidence. They thrive on competition and love taking initiative. Their fiery spirit makes them courageous, but sometimes impulsive.' },
  { name: 'Taurus', dates: 'Apr 20 - May 20', icon: '/assets/img/zodiacs/taurus.webp', description: '🌿 The Grounded Protector Taurus is known for its stability, patience, and love for life’s comforts. Ruled by Venus, they appreciate beauty, luxury, and nature. They are fiercely loyal and dependable but can be stubborn when pushed. Their determination ensures they always see things through.' },
  { name: 'Gemini', dates: 'May 21 - Jun 20', icon: '/assets/img/zodiacs/gemini.webp', description: '🌬️ The Curious Communicator Gemini is quick-witted, adaptable, and endlessly curious. Ruled by Mercury, they love learning, socializing, and engaging in deep conversations. Their dual nature makes them versatile and energetic, but they can sometimes be indecisive or restless.' },
  { name: 'Cancer', dates: 'Jun 21 - Jul 22', icon: '/assets/img/zodiacs/cancer.webp', description: '🌊 The Nurturing Soul Cancer is deeply intuitive, sensitive, and protective of loved ones. Ruled by the Moon, they are emotionally deep and value family and close relationships. They are empathetic and compassionate but can retreat into their shell when feeling overwhelmed.' },
  { name: 'Leo', dates: 'Jul 23 - Aug 22', icon: '/assets/img/zodiacs/leo.webp', description: '🌞 The Charismatic Leader Leo is bold, creative, and full of life. Ruled by the Sun, they naturally draw attention and love to inspire others. Their warm heart and generous nature make them natural-born leaders. However, they may sometimes crave admiration and validation.' },
  { name: 'Virgo', dates: 'Aug 23 - Sep 22', icon: '/assets/img/zodiacs/virgo.webp', description: '🌾 The Perfectionist Healer Virgo is detail-oriented, analytical, and dedicated to self-improvement. Ruled by Mercury, they thrive on organization and logic. They have a strong desire to help others but can be overly critical of themselves and those around them.' },
  { name: 'Libra', dates: 'Sep 23 - Oct 22', icon: '/assets/img/zodiacs/libra.webp', description: '⚖️ The Harmonious Diplomat Libra is charming, fair-minded, and deeply values balance. Ruled by Venus, they have a strong sense of beauty, art, and relationships. They seek peace and harmony but can sometimes struggle with indecisiveness.' },
  { name: 'Scorpio', dates: 'Oct 23 - Nov 21', icon: '/assets/img/zodiacs/scorpio.webp', description: '🦂 The Mysterious Transformer Scorpio is intense, passionate, and deeply emotional. Ruled by Pluto and Mars, they crave depth and transformation in life. They are fiercely loyal but can be secretive and sometimes possessive. Their intuition and strength make them powerful individuals.' },
  { name: 'Sagittarius', dates: 'Nov 22 - Dec 21', icon: '/assets/img/zodiacs/sagattarius.webp', description: '🏹 The Adventurous Philosopher Sagittarius is free-spirited, optimistic, and always seeking new experiences. Ruled by Jupiter, they have a deep love for travel, knowledge, and philosophy. Their adventurous spirit makes them exciting, but they can sometimes be blunt or restless.' },
  { name: 'Capricorn', dates: 'Dec 22 - Jan 19', icon: '/assets/img/zodiacs/capricorn.webp', description: '⛰️ The Ambitious Achiever Capricorn is disciplined, hardworking, and focused on success. Ruled by Saturn, they are determined to reach their goals and build a solid foundation in life. Their perseverance is unmatched, though they may sometimes struggle with work-life balance.' },
  { name: 'Aquarius', dates: 'Jan 20 - Feb 18', icon: '/assets/img/zodiacs/aquarius.webp', description: '🌊 The Visionary Rebel Aquarius is innovative, independent, and forward-thinking. Ruled by Uranus and Saturn, they challenge norms and embrace new ideas. They are deeply humanitarian and value freedom, but their unconventional ways can make them seem detached.' },
  { name: 'Pisces', dates: 'Feb 19 - Mar 20', icon: '/assets/img/zodiacs/pisces.webp', description: '🌌 The Dreamy Mystic Pisces is compassionate, artistic, and deeply intuitive. Ruled by Neptune, they live in a world of imagination and emotions. Their empathy makes them excellent healers, but they can sometimes be escapist or overly idealistic. put these 12 descriptions into string form for me, dont bother with the dates' },
];

export default function Zodiac() {
  const [selectedSign, setSelectedSign] = useState<ZodiacSign | null>(null);

  return (
    <section id='zodiac'>
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
        <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-center">
          {zodiacSigns.map((sign) => (
            <motion.div
              key={sign.name}
              className="rounded-lg shadow-md cursor-pointer text-center min-h-[10rem] flex flex-col justify-center items-center"
              style={{
                backgroundImage: `url(${sign.icon})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              whileHover={{ scale: 1.1 }}
              onClick={() => setSelectedSign(sign)}
            > 
            <div className="relative w-full h-[10rem]">
              <div className="absolute inset-0 w-full h-full bg-black bg-opacity-50 hover:bg-opacity-0 border-0 rounded-lg flex justify-center items-center flex-col justify-center items-center">
                <h3 className="text-2xl font-bold">{sign.name}</h3>
                <p className="text-xl text-gray-300 font-medium">{sign.dates}</p>
              </div>
            </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Horoscope Section */}
      {selectedSign && (
        <motion.section 
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-md p-4 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="bg-gray-900 rounded-lg p-6 w-3/4 max-w-lg text-center relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-white"
              onClick={() => setSelectedSign(null)}
            >
              ✖
            </button>
            <div className='flex items-center justify-center pb-3'>
              <Image 
              src={selectedSign.icon} 
              alt="Astrology Image" 
              width={200} 
              height={200} 
              className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h2 className="text-2xl font-semibold">Today's Horoscope for {selectedSign.name}</h2>
            <p className="text-lg text-gray-300 mt-4">{selectedSign.description}</p>
          </div>
        </motion.section>
      )}
    </div>
    </section>
  );
}