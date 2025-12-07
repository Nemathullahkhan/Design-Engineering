"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { useState } from "react";

export default function DarkModeAnimate() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div
      className="w-full h-screen relative overflow-hidden"
      style={{ backgroundColor: "#fafafa" }}
    >
      {/* Background Color with circle theem */}
      <motion.div
        className="absolute inset-0 origin-left"
        style={{ backgroundColor: "#0a0a0a" }}
        // initial={{ clipPath: "circle(0% at 0% 100%)" }}
        animate={{
          // method - 1: with clipPath
          // clipPath: isDarkMode
          //   ? "circle(150% at 0% 100%)"
          //   : "circle(0% at 0% 100%)"

          // method - 2: with scaleX Direction wise

          scaleX: isDarkMode ? 1 : 0,
          // scaleY: isDarkMode ? 1 : 0,
          transformOrigin: "left",

          // method - 3: wtih scale and fade
          // scale: isDarkMode ? 1 : 0,
          // opacity: isDarkMode ? 1 : 0,
        }}
        transition={{
          duration: 0.8,
          ease: "easeIn",
        }}
      />

      <div className="relative z-10 flex justify-center items-center h-screen">
        <div className="flex flex-col justify-center space-y-2">
          <div className="flex gap-x-2 justify-center">
            <Button
              className="px-6 py-3 transition"
              variant={isDarkMode ? "default" : "outline"}
              onClick={() => setIsDarkMode(false)}
              disabled={!isDarkMode}
            >
              Light Theme
            </Button>
            <span className="h-12 w-0.5 bg-red-500" />
            <Button
              className="px-6 py-3 transition"
              variant={isDarkMode ? "outline" : "default"}
              onClick={() => setIsDarkMode(true)}
              disabled={isDarkMode}
            >
              Dark Theme
            </Button>
          </div>

          <motion.p
            className="flex justify-center w-full items-center mt-4 font-light text-lg"
            animate={{
              color: isDarkMode ? "#ffffff" : "#000000",
            }}
            transition={{
              duration: 0.8,
              ease: "easeIn",
            }}
          >
            This component is inspired by the{" "}
            <motion.a
              href="https://x.com/raunofreiberg"
              className="underline font-semibold mx-2 text-xl"
              animate={{
                color: isDarkMode ? "#ffffff" : "#000000",
              }}
              transition={{
                duration: 0.8,
                ease: "easeIn",
              }}
            >
              Rauno Freiberg
            </motion.a>
          </motion.p>
        </div>
      </div>
    </div>
  );
}
