import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ImageProps {
  image: any;
}

const Image = ({ image }: ImageProps) => {
  return (
   
      <LazyLoadImage
        className="  object-cover w-full "
       
        key={image.id}
        src={image.urls.small}
        alt={image.alt_description}
        effect="blur"
        threshold={2}
      />
   
  );
};

export default Image;
