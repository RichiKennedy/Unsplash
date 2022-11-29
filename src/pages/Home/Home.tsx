import React, { useContext, useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/hero/Hero'
import Modal from '../../subComponents/Modal'
import { ImageType } from '../../types/imageTypes'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import MyContext from '../../context/DataContext'

interface HomeProps {
  onImageClick: (clickedImage: ImageType) => void
  modalImage: ImageType | undefined
  setModalImage: (arg: ImageType | undefined) => void
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
}

const Home = ({
  onImageClick,
  modalImage,
  setModalImage,
  isOpen,
  setIsOpen,
}: HomeProps) => {
  const { getRandomImages, getSplashImage } = useContext(MyContext)
  const dataFetchedRef = useRef(false)
  useEffect(() => {
    if (dataFetchedRef.current) return
    dataFetchedRef.current = true
    getSplashImage()
    getRandomImages()
  }, [])

  return (
    <div data-test="home-wrapper">
      <Header homePage />
      <Hero categoryID={undefined} />
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
  )
}

export default Home
