import React from "react";
import Header from "../components/Header";
import Images from "../components/Images";
import Hero from "../components/Hero";
import Modal from "../subComponents/Modal";
import { ImageType } from "../types/imageTypes"
interface HomeProps {
  onImageClick: (clickedImage: ImageType) => void;
  modalImage: ImageType | undefined;
  setModalImage: (arg: ImageType | undefined) => void
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const Home = ({onImageClick, modalImage, setModalImage, isOpen, setIsOpen}: HomeProps) => {
  return (
    <div>
      <Header homePage={true}/>
      <Hero categoryID={undefined}  />
      {modalImage && <Modal modalImage={modalImage} setModalImage={setModalImage} isOpen={isOpen} setIsOpen={setIsOpen} />}
      <Images onImageClick={onImageClick} />
    </div>
  );
};

export default Home;
