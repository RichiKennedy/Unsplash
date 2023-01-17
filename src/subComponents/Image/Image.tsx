import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { ImageType } from '../../types/imageTypes'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Skeleton from '../PlaceHolder/Skeleton'

interface ImageProps {
  image: ImageType
  onImageClick: (clickedImage: ImageType) => void
}

const Image = ({ image, onImageClick }: ImageProps) => {
  const [imageLoaded, setImageLoaded] = useState(false)

  const handleClick = (clickedImage: ImageType) => {
    onImageClick(clickedImage)
  }

  return (
    <div data-test="image-wrapper" className="relative w-[100%]">
      {!imageLoaded ? <Skeleton data-test="place-holder" /> : null}
      <LazyLoadImage
        data-test="image"
        className="w-full object-cover h-full"
        key={image.id}
        src={image.urls.small}
        alt={image.alt_description}
        afterLoad={() => setImageLoaded(true)}
      />
      <div
        className="absolute top-0 right-0 bottom-0 left-0 bg-black/30 opacity-0 hover:opacity-100 text-white flex justify-between items-end cursor-zoom-in"
        onClick={() => handleClick(image)}
        role="button"
        tabIndex={0}
      >
        <div className="flex items-center p-5 gap-2 h-[80px]">
          <img
            className="rounded-full h-10 w-10"
            src={image.user.profile_image.large}
            alt={image.alt_description}
          />
          <h1>{image.user.name}</h1>
        </div>
      </div>
    </div>
  )
}

export default Image
