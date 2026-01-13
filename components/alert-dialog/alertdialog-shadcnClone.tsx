"use client";
import React, { useState } from "react";
import GlowCard from "../cards/glow-card";

const AlertDialogShadCnClone = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal && (
        <div className="absolute inset-0 bg-neutral-950/50 w-full min-h-screen">
          <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-xl border border-neutral-700 px-4 py-3 rounded-md bg-black">
              <h1 className="text-xl tracking-tight font-semibold text-neutral-200">
                Are your sure?
              </h1>
              <p className="text-sm px-2 text-neutral-600">
                Real Madrid Club de Fútbol, commonly referred to as Real Madrid,
                is a Spanish professional association football club based in
                Madrid. The club competes in La Liga, the top tier of Spanish
                football. Founded in 1902 as Madrid Football Club, the club has
                traditionally worn a white home kit.
              </p>
              <div className="flex justify-end items-end gap-x-2 mt-4">
                <button className="border border-neutral-800 bg-neutral-900 hover:cursor-pointer text-neutral-100 px-6 py-2 text-sm rounded-md" onClick={()=>setOpenModal((prev)=>!prev)}>
                  No
                </button>
                <button className="px-6 py-1.5 bg-neutral-50 rounded-md text-sm  hover:cursor-pointer  border-neutral-100 border"
                onClick = {()=>setOpenModal((prev)=>!prev)}
                >
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="space-y-2 mt-10">
        <h1 className="text-2xl tracking-tight font-semibold text-neutral-50">
          Alert Dialog
        </h1>
        <div className="flex justify-center ">
          <button
            className="border border-neutral-800 bg-neutral-900 hover:cursor-pointer text-neutral-100 px-4 py-2 text-sm rounded-md"
            onClick={() => {
              setOpenModal((prev) => !prev);
            }}
          >
            Show dialog
          </button>
        </div>
      </div>
    </>
  );
};

export default AlertDialogShadCnClone;
