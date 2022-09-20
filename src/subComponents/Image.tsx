import React from "react";



interface ImageProps {
  image: any;


}

const Image = ({ image}: ImageProps) => {

console.log(image)
  return (
    // <div className=" relative  bg-red-300 max-h-[300px] overflow-hidden  ">
<div className=" relative bg-gray-300 max-h-[300px] overflow-hidden">

    <img
     className="  object-cover w-full h-full hover:scale-105 ease-out duration-150  "  
     src={image.urls.small} 
     alt={image.alt_description} 
   
    />
</div>


  );
};

export default Image;
