"use client";

import GlowCard from "@/components/cards/glow-card";

export default function Home() {
  const heroSectionItems = [
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Design",
      href: "/design",
    },
    {
      title: "Blogs",
      href: "/blogs",
    },
  ];

  return (
    <div className="flex  items-center justify-center min-h-screen tracking-tight px-4">
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <div className="flex-1">
          <h1 className="text-3xl">
            Hi, I&apos;m <span className="font-semibold">Nemath Khan</span>
          </h1>
          <h2 className="text-2xl">a Full Stack Developer</h2>
          <h3 className="text-xl">
            and This is
            <span className="text-3xl font-bold px-1.5">my Creative Space</span>
          </h3>
        </div>
        <div className="flex-1 flex items-center justify-center ">
          <div className="flex  justify-center items-center h-full rounded-4xl shadow-2xl">
            {heroSectionItems.map((item, idx) => (
              // <div
              //   className={`w-[250px] h-[400px]  border border-zinc-50 bg-zinc-100
              //      ${idx == 0 && "rounded-l-4xl"}
              //     ${idx === heroSectionItems.length - 1 && "rounded-r-4xl"}`}
              //   key={idx}
              // >
              //   <div
              //     className={`relative border border-zinc-400 h-full
              //       ${idx == 0 && "rounded-l-4xl"}
              //       ${idx === heroSectionItems.length - 1 && "rounded-r-4xl"}`}
              //   >
              //     <Link className=" " href={item.href}>
              //       <div className="flex justify-between p-4 items-center">
              //         <p className="text-zinc-800 text-2xl font-[450]">
              //           {item.title}
              //         </p>
              //         <span className="bg-white p-2 rounded-3xl">
              //           <MoveRight size={16} className="text-zinc-900" />
              //         </span>
              //       </div>
              //     </Link>
              //   </div>
              // </div>
              <GlowCard
                key={idx}
                item={item}
                isFirst={idx === 0}
                isLast={idx === heroSectionItems.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
