import { Routes, Route } from "react-router-dom";
import { MyContextProvider } from "./context/DataContext";
import About from "./pages/About";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import CategoryPage from "./pages/CategoryPage";
import { ImageType } from "./types/imageTypes";
import { useState } from "react";

function App() {
  const [modalImage, setModalImage] = useState<ImageType | undefined> (undefined);
  const onImageClick = (clickedImage: ImageType) => {
    setModalImage(clickedImage);
  };
  return (
    <MyContextProvider>
    <Routes>
      <Route path="/" element={<Home modalImage={modalImage} setModalImage={setModalImage} onImageClick={onImageClick}/>} />
      <Route path="/about" element={<About/>} />
      <Route path="*" element={<NoPage />} />
      <Route path="/:categoryID" element={<CategoryPage onImageClick={onImageClick} modalImage={modalImage} setModalImage={setModalImage} />} />
    </Routes>
    </MyContextProvider>
  );
};

export default App;
