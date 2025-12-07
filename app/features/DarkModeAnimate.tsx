"use client";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { useState } from "react";

export default function DarkModeAnimate() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  
  return (
    <div className="w-full h-screen relative overflow-hidden" style={{ backgroundColor: "#fafafa" }}>
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
          transformOrigin: "left"


          // method - 3: wtih scale and fade
          // scale: isDarkMode ? 1 : 0,
          // opacity: isDarkMode ? 1 : 0,

        }}
        transition={{
          duration: 0.8,
          ease: "easeIn"
        }}
      />

      <div className="relative z-10 flex justify-center h-screen items-center gap-x-2">
        <Button 
          className="px-6 py-3  transition "
          variant={isDarkMode ? "default":"outline"}
          onClick={() => setIsDarkMode(false)}
          disabled= {isDarkMode == false}
        >
          Light Theme 
        </Button>
        <span className="h-12 bg-red-500 w-0.5"/>
        <Button 
          className="px-6 py-3  transition"
          variant={isDarkMode ? "outline":"default"}
          onClick={() => setIsDarkMode(true) }
          disabled= {isDarkMode == true}
        >
          Dark Theme 
        </Button>
      </div>
    </div>
  );
}