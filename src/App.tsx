import { Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./context/DataContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import CategoryPage from "./pages/CategoryPage";
import { ImageType } from "./types/imageTypes";
import { useEffect, useState } from "react";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalImage, setModalImage] = useState<ImageType | undefined> (undefined);
  const [scrollPosition, setScrollPosition] = useState(0)
  
  const onImageClick = (clickedImage: ImageType) => {
    setModalImage(clickedImage)
  };
  
  useEffect(() => {
    if (isOpen) {
      setScrollPosition(window.scrollY)
      document.body.style.position = "fixed"
    } else {
      document.body.style.position = ""
      window.scrollTo(0, scrollPosition)
    }
  }, [isOpen])

  return (
    <MyContextProvider>
    <Routes>
      <Route path="/" element={<Home modalImage={modalImage} setModalImage={setModalImage} onImageClick={onImageClick} isOpen={isOpen} setIsOpen={setIsOpen}/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NoPage />} />
      <Route path="/:categoryID" element={<CategoryPage onImageClick={onImageClick} modalImage={modalImage} setModalImage={setModalImage} isOpen={isOpen} setIsOpen={setIsOpen} />} />
    </Routes>
    </MyContextProvider>
  );
};

export default App;
