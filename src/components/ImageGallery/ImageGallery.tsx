import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../../subComponents/Loader";
import React, { useContext, useEffect, useRef } from "react";
import MyContext from "../../context/DataContext";
import Image from "../../subComponents/Image";
import { ImageType } from "../../types/imageTypes";
import Masonry from "react-smart-masonry";
export interface ImageGalleryProps {
  onImageClick: (clickedImage: ImageType) => void;
}

const ImageGallery = ({ onImageClick }: ImageGalleryProps) => {
  const {images, hasInputValue, getRandomImages, fetchUnsplashImages, getSplashImage,} = useContext(MyContext);
  const breakpoints = { mobile: 0, tablet: 600, laptop: 1000, desktop: 1600 };
  const dataFetchedRef = useRef(false);

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getSplashImage();
    getRandomImages();
  }, []);

  return (
    <>
      {images ? (
        <section
          data-test="image-gallery-wrapper"
          className="flex items-center justify-center pt-10 w-[100vw]"
        >
          <InfiniteScroll
            dataLength={images.length}
            next={() =>
              !hasInputValue ? getRandomImages() : fetchUnsplashImages()
            }
            hasMore={true}
            loader={<Loader />}
            hasChildren={true}
            className="max-w-[1200px]"
          >
            <Masonry
              breakpoints={breakpoints}
              columns={{ mobile: 1, tablet: 2, laptop: 3, desktop: 3 }}
              gap={{ mobile: 20, tablet: 25, laptop: 25, desktop: 25 }}
            >
              {images.map((image) => (
                <Image
                  image={image}
                  key={image.id}
                  onImageClick={(clickedImage: ImageType) =>
                    onImageClick(clickedImage)
                  }
                />
              ))}
            </Masonry>
          </InfiniteScroll>
        </section>
      ) : null}
    </>
  );
};

export default ImageGallery;
