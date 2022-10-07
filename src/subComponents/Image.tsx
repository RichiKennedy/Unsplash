import React from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsFillArrowDownSquareFill } from "react-icons/bs";



interface ImageProps {
  image: any;
}



const Image = ({ image }: ImageProps) => {
  return (
    <div className="  relative w-[100%]   ">
      <img
        className="   w-full object-cover h-full   "
        key={image.id}
        src={image.urls.small}
        alt={image.alt_description}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/30 opacity-0 hover:opacity-100 text-white flex justify-between items-end">
        <div className="flex items-center p-5 gap-2 h-[80px]">

        <img className=" rounded-full h-10 w-10 " src={image.user.profile_image.large} alt={image.alt_description} />
        <h1>{image.user.name}</h1>
        </div>
        <div className="flex items-center justify-end p-5  h-[80px]   ">
<h1> <BsFillArrowDownSquareFill className=" text-4xl cursor-pointer" /> </h1>
        </div>
      </div>
    </div>
  )
};

export default Image;
