import React from "react";

import { BsImage } from "react-icons/bs";
const Skeleton = () => {
  return (
    <main className="flex items-center justify-center bg-neutral-900 w-full h-full absolute">
      <section className="flex items-center justify-center gap-5 w-[100%] h-[100%]">
        <div className="relative w-[90%] h-[90%] space-y-3 overflow-hidden rounded-md bg-neutral-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
          <div className="h-[90%] w-[full  rounded-lg">
            <BsImage className="w-full h-full text-neutral-600" />
          </div>
          <div className="space-y-3">
            <ul className="flex gap-2">
              <li className="h-5 w-16 rounded-full bg-neutral-600"></li>
              <li className="h-5 w-24 rounded-full bg-neutral-600"></li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Skeleton;
