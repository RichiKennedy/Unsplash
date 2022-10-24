import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../subComponents/Loader";
import { useContext } from "react";
import MyContext from "../context/DataContext";
import Image from "../subComponents/Image";
import { ImageType } from "../types/imageTypes";

interface ImagesProps {
  onImageClick: (clickedImage: ImageType) => void;
 }

const Images = ({onImageClick}: ImagesProps) => {
  const { images, hasInputValue, getRandomImages, fetchUnsplashImages } = useContext(MyContext);
 
 return (
    <>
      <section className="flex items-center justify-center p-5  w-[100vw] ">
        <InfiniteScroll
          dataLength={images.length}
          next={() =>
            !hasInputValue ? getRandomImages() : fetchUnsplashImages()
          }
          hasMore={true}
          loader={<Loader />}
          hasChildren={true}
          className="grid grid-cols-1 w-[100vw]  sm:grid-cols-2 md:p-5 lg:grid-cols-3 xl:p-20 gap-5 "
        >
          {images.map((image: any) => (
            <Image  image={image} key={image.id} onImageClick={(clickedImage: ImageType) => onImageClick(clickedImage)}/>
          ))}
        </InfiniteScroll>
      </section>
    </>
  );
};

export default Images;
