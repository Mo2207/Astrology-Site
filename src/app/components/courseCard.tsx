
"use client";

import { motion } from "framer-motion";
// import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface CardProps {
  id: string;
  title: string;
  items: string[];
  extraItems: string[];
  expandedCardId: string | null;
  setExpandedCardId: (id: string | null) => void;
}

export default function CourseCard({ id, title, items, extraItems, expandedCardId, setExpandedCardId }: CardProps) {
  const isExpanded = expandedCardId === id; // Check if this card is expanded

  return (
      <motion.div 
        id={id}
        className="course-card relative flex flex-col w-full p-6 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-900 overflow-hidden cursor-pointer gap-12"
        onClick={() => setExpandedCardId(isExpanded ? null : id)} // Toggle expansion
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
                className="border-0 rounded-lg object-cover h-full w-full"
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