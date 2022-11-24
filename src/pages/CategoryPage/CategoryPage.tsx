import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Hero from "../../components/hero/Hero";
import ImageGallery from "../../components/ImageGallery/ImageGallery";
import MyContext from "../../context/DataContext";
import Modal from "../../subComponents/Modal";
import { ImageType } from "../../types/imageTypes";

export interface CategoryPageProps {
  onImageClick: (clickedImage: ImageType) => void;
  modalImage: ImageType | undefined;
  setModalImage: (arg: ImageType | undefined) => void;
  isOpen: boolean;
  setIsOpen: (arg: boolean) => void;
}

const CategoryPage = ({
  onImageClick,
  modalImage,
  setModalImage,
  isOpen,
  setIsOpen,
}: CategoryPageProps) => {
  const { setTopic, setInputValue, fetchUnsplashImages, getSplashImage } = useContext(MyContext);
  const { categoryID } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
    setInputValue(categoryID || "");
    setTopic(categoryID || "");
    fetchUnsplashImages(true, 1, categoryID);
    getSplashImage(categoryID);
  }, [categoryID]);

  return (
    <div data-test="category-page-wrapper">
      <Header homePage={true} />
      <Hero categoryID={categoryID} />
      {modalImage && (
        <Modal
          modalImage={modalImage}
          setModalImage={setModalImage}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <ImageGallery onImageClick={onImageClick} />
    </div>
  );
};

export default CategoryPage;
