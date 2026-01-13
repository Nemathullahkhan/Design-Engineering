"use client";
import { MoveRight } from "lucide-react";
import { motion, useMotionTemplate } from "motion/react";
import { useMotionValue } from "motion/react";
import Link from "next/link";
import React from "react";

const GlowCard = ({ item, isFirst, isLast }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0.9 }}
      whileHover={{ opacity: 1 }}
      className={`group relative w-[250px] h-[400px] bg-zinc-100 overflow-hidden
        ${isFirst && "rounded-l-4xl"}
        ${isLast && "rounded-r-4xl"}`}
    >
      {/* Animated border glow layer */}
      <motion.div
        className="pointer-events-none absolute inset-[1.5px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-inherit p-[2px]"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(139, 92, 246, 0.8),
              rgba(139, 92, 246, 0.4),
              transparent 70%
            )
          `,
        }}
      >
        {/* Inner mask to create border effect */}
        <div
          className={`w-full h-full bg-zinc-100 border
            ${isFirst && "rounded-l-4xl"}
            ${isLast && "rounded-r-4xl"}
          `}
        />
      </motion.div>
      {/* Static border */}
      <div
        className={`absolute inset-0 border border-zinc-200 pointer-events-none
          ${isFirst && "rounded-l-4xl"}
          ${isLast && "rounded-r-4xl"}
        `}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col">
        <Link href={item.href}>
          <div className="flex justify-between p-4 items-center border-b-zinc-400 border-b ">
            <p className="text-zinc-800 text-xl font-[450]">{item.title}</p>
            <motion.span
              className="bg-white p-2 rounded-3xl shadow-sm "
              whileHover={{ scale: 1.2 }}
            >
              <MoveRight size={16} className="text-zinc-900" />
            </motion.span>
          </div>
        </Link>
      </div>
    </motion.div>
  );
};

export default GlowCard;
