
"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

interface CardProps {
  title: string;
  items: string[];
  extraItems:string[] 
}

export default function CourseCard({ title, items, extraItems }: CardProps) {

  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <motion.div 
        className="relative flex flex-col w-full p-6 rounded-lg bg-gray-100 text-gray-900 overflow-hidden cursor-pointer gap-12"
        onClick={() => setIsExpanded(!isExpanded)}
        animate={{ minHeight: isExpanded ? "auto" : "35vh" }}
      >

        {/* Main info */}
        <motion.div 
          className="flex flex-col items-center w-full"
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
            className="flex gap-6 items-stretch w-full"
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
                alt="random image"
                className="border rounded-lg object-cover h-full w-full"
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