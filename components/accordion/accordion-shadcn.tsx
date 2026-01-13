"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { degrees, easeInOut, motion } from "motion/react";
/**
 * TODOS: Next think of this how to modularize this component or how to convert this into shared components
 */

const AccordianShadCNClone = () => {
  const items = [
    {
      title: "Product Information",
      desc: "Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional association football club based in Madrid. The club competes in La Liga, the top tier of Spanish football. Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit.",
      open: false,
    },
    {
      title: "Shipping Details",
      desc: "Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional association football club based in Madrid. The club competes in La Liga, the top tier of Spanish football. Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit.",
      open: false,
    },
    {
      title: "Return Policy",
      desc: "Real Madrid Club de Fútbol, commonly referred to as Real Madrid, is a Spanish professional association football club based in Madrid. The club competes in La Liga, the top tier of Spanish football. Founded in 1902 as Madrid Football Club, the club has traditionally worn a white home kit.",
      open: false,
    },
  ];
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  return (
    <div className="text-neutral-50 space-y-2 ">
      <h1 className="text-2xl tracking-tight font-semibold">Accordion</h1>
      <div className="">
        {items.map((item, idx) => (
          <button
            onClick={() => {
              setOpenIndex((prev) => (prev === idx ? null : idx));
            }}
            className="text-neutral-50 w-full group"
            key={idx}
          >
            <div
              className="text-neutral-200  border-b border-b-neutral-800 "
              key={idx}
            >
              <div className="flex justify-between items-center py-2 px-4 group-hover:underline">
                <p>{item.title}</p>
                <motion.div
                  initial={{ opacity: 0.98 }}
                  animate={{ opacity: 1, rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={12} />
                </motion.div>
              </div>
              <div className="px-10">
                <motion.p
                  className={`overflow-hidden text-sm transition-all duration-300 ease-in-out
    ${openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"}
  `}
                  initial={{ opacity: 0.5 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    type: "spring",
                    ease: easeInOut,
                    duration: 1.5,
                  }}
                >
                  {item.desc}
                </motion.p>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default AccordianShadCNClone;
