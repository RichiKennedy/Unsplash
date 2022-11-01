import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../subComponents/Loader";
import React, { useContext } from "react";
import MyContext from "../context/DataContext";
import Image from "../subComponents/Image";
import { ImageType } from "../types/imageTypes";
import Masonry from "react-smart-masonry";

interface ImagesProps {
  onImageClick: (clickedImage: ImageType) => void;
}

const Images = ({ onImageClick }: ImagesProps) => {
  const { images, hasInputValue, getRandomImages, fetchUnsplashImages } = useContext(MyContext);
  const breakpoints = { mobile: 0, tablet: 600, laptop: 1000, desktop: 1600 };
  return (
    <>
      <section className="flex items-center justify-center pt-10 w-[100vw]">
        <InfiniteScroll
          dataLength={images.length}
          next={ () => !hasInputValue ? getRandomImages() : fetchUnsplashImages() }
          hasMore={true}
          loader={<Loader />}
          hasChildren={true}
          className="max-w-[1200px]"
        >
          <Masonry
            breakpoints={breakpoints}
            columns={{ mobile: 1, tablet: 2, laptop: 3, desktop: 3 }}
            gap={{ mobile: 20, tablet: 30, laptop: 30, desktop: 40 }}
          >
            {images.map((image: any) => (
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
    </>
  );
};

export default Images;
