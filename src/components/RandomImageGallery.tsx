import React, { useContext } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../subComponents/Loader";
import Image from "../subComponents/Image";
import MyContext from '../context/DataContext';

const RandomImageGallery = () => {
    const {images, getRandomImages, hasInputValue} = useContext(MyContext);
 
  return (
    <>
    {!hasInputValue ? (

    <section className="flex items-center justify-center p-5  w-[100vw] ">
    <InfiniteScroll
      dataLength={images.length}
      next={() => getRandomImages()}
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
    ) : null }
    </>
  )
}

export default RandomImageGallery; 