import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { MyContextProvider } from './context/DataContext'
import About from './pages/About/About'
import Home from './pages/Home/Home'
import NoPage from './pages/404ErrorPage/NoPage'
import CategoryPage from './pages/CategoryPage/CategoryPage'
import { ImageType } from './types/imageTypes'
import Modal from './subComponents/Modal/Modal'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [modalImage, setModalImage] = useState<ImageType | undefined>(undefined)
  const [scrollPosition, setScrollPosition] = useState(0)

  const onImageClick = (clickedImage: ImageType) => {
    setModalImage(clickedImage)
  }

  useEffect(() => {
    if (isOpen) {
      const { scrollY } = window
      document.body.style.top = `-${scrollY}px`
      document.body.style.position = 'fixed'
      setScrollPosition(scrollY)
    } else {
      document.body.style.top = ''
      document.body.style.position = ''
      window.scrollTo(0, scrollPosition)
    }
  }, [isOpen])

  return (
    <MyContextProvider>
      <Routes>
        <Route path="/" element={<Home onImageClick={onImageClick} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoPage />} />
        <Route
          path="/:theCategoryID"
          element={<CategoryPage onImageClick={onImageClick} />}
        />
      </Routes>
      {modalImage && (
        <Modal
          modalImage={modalImage}
          setModalImage={setModalImage}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
    </MyContextProvider>
  )
}

export default App
