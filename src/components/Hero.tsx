import React, { useContext, useEffect, useState } from "react";
import MyContext from "../context/DataContext";

const Hero = () => {
  const { randomImage } = useContext(MyContext);
  const [offSetY, setOffSetY] = useState(0);
  const handleScroll = () => setOffSetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  // console.log(randomImage[0]?.urls?.small)

  return (
    <div 
    
    className="relative  h-[800px] bg-fixed z-10  ">
      <img
        height={600}
        width={1000}
        className=" object-cover w-full h-full"
        src={randomImage[0]?.urls?.full}
        alt={randomImage[0]?.alt_description ? randomImage[0].alt_description : ""}
        key={randomImage[0]?.id}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/70 text-white flex justify-between items-end">
        <div className="">
          <h1> Unsplash </h1>
          <p>The internet’s source for visuals.
Powered by creators everywhere.</p>
        </div>
<div className="flex items-center p-5 gap-2 h-[80px]">
<h1 className=" text-gray-200"><strong>Photo</strong> by <strong> {randomImage[0]?.user.name} </strong> </h1>
</div>
      </div>
    </div>
  );
};

export default Hero;
