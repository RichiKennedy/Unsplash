import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProps {
  image: any;
}

const Image = ({ image }: ImageProps) => {
  return (
    <div className=" relative bg-gray-300 max-h-[300px] overflow-hidden">
      <LazyLoadImage
        className="  object-cover w-full h-full hover:scale-105 ease-out duration-150  "
        height={300}
        width={300}
        key={image.id}
        src={image.urls.small}
        alt={image.alt_description}
        effect="blur"
        threshold={2}
      />
    </div>
  );
};

export default Image;
