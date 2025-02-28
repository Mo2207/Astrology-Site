
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  items: string[];
  extraItems: string[] 
}

export default function CourseCard({ title, items, extraItems }: CardProps) {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <motion.div 
        className="relative flex flex-col justify-center w-[80%] h-[35vh] p-6 rounded-lg bg-gray-100 text-gray-900 overflow-hidden cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{ height: isExpanded ? "75vh" : "35vh" }}
      >

        {/* Main info */}
        <motion.div 
          className="absolute top-8 left-0 w-full h-[35vh] items-center w-full"
        >
          <h2 className="font-bold pb-6 text-center text-4xl">{title}</h2>
          <div className="flex flex-col items-center text-center font-semibold text-gray-600 text-lg space-y-3">
            {items.map((item, index) => (
              <p key={index}>{item}</p>
            ))}
          </div>
        </motion.div>

        {/* Extra info */}
        {isExpanded && (
          <motion.div
            className="absolute bottom-4 left-4 right-4 display flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            {/* Image */}
            <div className="w-1/2">
              <Image
                src={"/assets/img/course/person-using-laptop.jpg"}
                width={400}
                height={300}
                layout="responsive"
                alt="random image"
                className="border rounded-lg"
              />
            </div>

            {/* Extra text */}
            <div className="w-1/2 flex flex-col justify-center font-semibold text-gray-600 text-lg space-y-2">
              {extraItems.map((item, index) => (
                <p className="flex justify-center" key={index}>{item}</p>
              ))}
            </div>
          </motion.div>
        )}

    </motion.div>
  )
}