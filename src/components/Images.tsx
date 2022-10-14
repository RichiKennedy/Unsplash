import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../subComponents/Loader";
import { useContext } from "react";
import MyContext from "../context/DataContext";
import Image from "../subComponents/Image";

const Images = () => {
  const { images, fetchUnsplashImages, hasInputValue } = useContext(MyContext);

  return (
    <>
      {hasInputValue ? (
        <section className="flex items-center justify-center p-5  w-[100vw] ">
          <InfiniteScroll
            dataLength={images.length}
            next={() => fetchUnsplashImages()}
            hasMore={true}
            loader={<Loader />}
            hasChildren={true}
            className="grid grid-cols-1 w-[100vw]  sm:grid-cols-2 md:p-5 lg:grid-cols-3 xl:p-20 gap-5 "
          >
            {images.map((image: any) => (
              <Image image={image} key={image.id} />
            ))}
          </InfiniteScroll>
        </section>
      ) : null}
    </>
  );
};

export default Images;
