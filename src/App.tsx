import { MyContextProvider } from "./context/DataContext";
import Header from "./components/Header";
import Images from "./components/Images";
import Error from "./subComponents/Error";
import ApiError from "./subComponents/ApiError";
import Hero from "./components/Hero";
import Modal from "./subComponents/Modal";
import { ImageType } from "./types/imageTypes";
import { useState } from "react";

function App() {
  const [modalImage, setModalImage] = useState<ImageType | undefined>(undefined)
  const onImageClick = (clickedImage: ImageType) => {
    setModalImage(clickedImage)
  }

  return (
    <MyContextProvider>
      <div className=" w-[100vw]">
        <Error />
        <ApiError />
        <Header />
        <Hero />
        {modalImage && <Modal modalImage={modalImage} /> }
        <Images onImageClick={onImageClick} />
      </div>
    </MyContextProvider>
  );
}

export default App;
