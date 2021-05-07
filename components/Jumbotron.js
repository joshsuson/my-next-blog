import React from "react";
import Image from "next/image";

export default function Jumbotron() {
  return (
    <div className="grid grid-cols-2 gap-14 mt-14">
      <div>
        <div className="bg-green-400">
          <div className="relative w-auto h-96 transform -translate-x-3 -translate-y-2">
            <Image
              priority
              src="/images/075A6510.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="w-7/12">
          <h1 className="text-4xl py-1 px-1 text-white relative z-10">
            Hi. Nice to meet you!
          </h1>
          <div className="bg-green-400 w-auto h-12 relative transform -translate-y-12 -translate-x-2 -skew-x-6 "></div>
        </div>
        <p className="text-lg leading-relaxed -mt-4">
          My name is Josh Suson (in case you missed the title). I'm a Front End
          Web Developer that's learning to develop applications as well. I spend
          most of my time in Javascript. The most important thing to know about
          me is that I'm on a mission to create products that help the world be
          a better place through the internet.
        </p>
        <button className="bg-gradient-to-br from-green-300 to-green-400 uppercase text-white py-3 px-6 mt-10 green-button-shadow custom-button-hover">
          More About Me
        </button>
      </div>
    </div>
  );
}
