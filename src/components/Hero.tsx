import React, { useContext, useEffect, useState } from "react";
import MyContext from "../context/DataContext";
import HeroSearchBar from "../subComponents/HeroSearchBar";

const Hero = () => {
  const { randomImage } = useContext(MyContext);
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative  h-[600px] md:h-[650px] lg:h-[700px] xl:h-[800px] bg-fixed z-10  ">
      <img
        height={600}
        width={1000}
        className=" object-cover w-full h-full"
        src={randomImage[0]?.urls?.full}
        alt={
          randomImage[0]?.alt_description ? randomImage[0].alt_description : ""
        }
        key={randomImage[0]?.id}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40 text-white flex items-center justify-between flex-col">
        <div
          style={{ transform: `translateY(${offSetY * 0.35}px)` }}
          className=" h-full w-full p-10 md:max-w-2xl md:p-0 flex items-center justify-center flex-col text-left"
        >
          <h1 className=" w-full text-5xl mb-5 font-bold"> Unsplash </h1>
          <p className=" w-full">
            The internet’s source for visuals. <br />
            Powered by creators everywhere.
          </p>
          <HeroSearchBar />
        </div>
        <div className="flex items-center p-5 gap-2 h-[80px]  w-full">
          <h1 className=" text-gray-200">
            <strong>Photo</strong> by{" "}
            <strong> {randomImage[0]?.user.name} </strong>{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Hero;
