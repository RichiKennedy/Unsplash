import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Images from "../components/Images";
import MyContext from "../context/DataContext";
import Modal from "../subComponents/Modal";
import { ImageType } from "../types/imageTypes";

interface CategoryPageProps {
  onImageClick: (clickedImage: ImageType) => void;
  modalImage: ImageType | undefined;
  setModalImage: (arg: ImageType | undefined) => void;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const CategoryPage = ({ onImageClick, modalImage, setModalImage, isOpen, setIsOpen }: CategoryPageProps) => {
  const { setTopic, setInputValue, fetchUnsplashImages, getSplashImage } = useContext(MyContext);
  const { categoryID } = useParams();

  useEffect(() => {
    setInputValue(categoryID || "");
    setTopic(categoryID || "");
    fetchUnsplashImages(true, 1, categoryID);
    getSplashImage(categoryID);
  }, [categoryID]);

  return (
    <div>
      <Header homePage={true} />
      <Hero categoryID={categoryID} />
      {modalImage && (
        <Modal modalImage={modalImage} setModalImage={setModalImage} isOpen={isOpen} setIsOpen={setIsOpen} />
      )}
      <Images onImageClick={onImageClick} />
    </div>
  );
};

export default CategoryPage;
