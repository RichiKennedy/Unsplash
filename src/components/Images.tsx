
import Image from "../subComponents/Image";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../subComponents/Loader";

interface ImageProps {
  images: any;
  fetchRequest: any;

}

const Images = ({ images, fetchRequest}: ImageProps) => {
  return (
    <section className=" ">
      <InfiniteScroll
        dataLength={images.length}
        next={fetchRequest}
        hasMore={true}
        loader={<Loader/>}
      >
        <div className="  columns-1 md:columns-3 bg-red-300 ">
       {

            images.map((image: any, i: number) => (
              <Image image={image} key={image.id} />
            ))
       }
        
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default Images;
