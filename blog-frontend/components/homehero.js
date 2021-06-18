import React from "react";
import rodrun4 from "../public/rodrun4.jpg";

export default function Homehero() {
  return (
      <div class="relative">
          <div class="absolute inset-0 z-10 flex justify-center items-end p-10 text-6xl text-white font-semibold">
            <p> Welcome to Northeast Rod Run</p>
          </div>
        <img class="md:w-full lg:w-full" src={rodrun4} />
      </div>
  );
}
