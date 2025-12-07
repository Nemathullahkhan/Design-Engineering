"use client";
import React, { useRef, useState } from "react";
import { Inter, Poppins } from "next/font/google";
import { BadgeSwissFranc } from "lucide-react";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const Page = () => {
  const scrollRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const maxScroll = scrollHeight - clientHeight;
      const progress = (scrollTop / maxScroll) * 100;
      setScrollProgress(Math.min(progress, 100));
    }
  };

  const features = [
    {
      icon: <BadgeSwissFranc />,
      title: "Schedule kickoff",
      description:
        "Align on scope, structure, and timeline. Whether it’s a brand refresh or a full migration, we’ll take it from there.",
    },
    {
      icon: <BadgeSwissFranc />,
      title: "Real-time collaboration",
      description:
        "Build your site with a vetted Framer Expert. Every step follows best practices and thorough QA to ensure a polished site.",
    },
    {
      icon: <BadgeSwissFranc />,
      title: "Review, edit, and publish",
      description:
        "Collaborate in real-time, share feedback, and request edits. Go live with a site that’s fast, optimized, and reliable.",
    },

    {
      icon: <BadgeSwissFranc />,
      title: "Handover and scale",
      description:
        "Your team takes over with a simple workflow for updates, on a site built to scale and grow with Framer.",
    },
  ];

  return (
    <div className="h-screen bg-black w-full">
      <div className="mx-auto max-w-6xl border border-black h-full bg-neutral-950 flex">
        <div className="flex justify-between items-center h-full gap-x-2">
          {/* How it works section  */}
          <div className=" max-w-md h-full ">
            <div className=" flex flex-col items-center justify-center h-full ">
              <h1
                className={`text-neutral-50 px-8 text-[62px] tracking-tighter font-semibold ${poppins.className}`}
              >
                How it works
              </h1>
              <p
                className={`text-neutral-400 text-[21px] font-medium ${inter.className} px-12  `}
              >
                Your site, built by a Framer Expert and launched on a Scale
                plan, ready to grow with you
              </p>
            </div>
          </div>
          {/* Features section */}
          {/* <div className="p-10 flex-1 h-full overflow-y-auto space-y-10 [scrollbar-width:none] ">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-x-4 justify-center p-4 ">
                <span className="text-white pt-1 ">{feature.icon}</span>
                <div className="flex-1 mb-2">
                  <h2 className="text-white text-[24px] font-semibold ">
                    {feature.title}
                    <p
                      className={`text-neutral-400 text-[18px] max-w-sm ${inter.className}`}
                    >
                      {feature.description}
                    </p>
                  </h2>
                </div>
              </div>
            ))}
          </div> */}

          {/* Features section */}
          <div className="relative flex-1 h-full flex gap-x-6">
            {/* Vertical Progress Bar */}
            <div className="relative w-1 bg-neutral-800 rounded-full my-10">
              <div
                className="absolute top-0 left-0 w-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full transition-all duration-150"
                style={{ height: `${scrollProgress}%` }}
              />
            </div>

            {/* Scrollable Content */}
            <div
              ref={scrollRef}
              onScroll={handleScroll}
              className="p-10 flex-1 h-full overflow-y-auto  space-y-40 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {features.map((feature, index) => (
                <div key={index} className="flex gap-x-4 justify-center p-20">
                  <span className="text-white pt-1">{feature.icon}</span>
                  <div className="flex-1 mb-2">
                    <h2 className="text-white text-[24px] font-semibold">
                      {feature.title}
                      <p
                        className={`text-neutral-400 text-[18px] max-w-sm ${inter.className}`}
                      >
                        {feature.description}
                      </p>
                    </h2>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
