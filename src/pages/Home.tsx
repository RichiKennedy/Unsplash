import React, { useState } from "react";
import Header from "../components/Header";
import Images from "../components/Images";
import Error from "../subComponents/Error";
import ApiError from "../subComponents/ApiError";
import Hero from "../components/Hero";
import Modal from "../subComponents/Modal";
import { ImageType } from "../types/imageTypes";

const Home = () => {
  const [modalImage, setModalImage] = useState<ImageType | undefined> (undefined);
  const onImageClick = (clickedImage: ImageType) => {
    setModalImage(clickedImage);
  };
  return (
    <div className=" w-[100vw]">
      <Error />
      <ApiError />
      <Header isStatic = {true}/>
      <Hero />
      {modalImage && <Modal modalImage={modalImage} setModalImage={setModalImage} />}
      <Images onImageClick={onImageClick} isStatic={true} />
    </div>
  );
};

export default Home;
