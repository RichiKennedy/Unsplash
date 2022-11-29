import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/hero/Hero'
import Modal from '../../subComponents/Modal'
import { ImageType } from '../../types/imageTypes'
import ImageGallery from '../../components/ImageGallery/ImageGallery'

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
}: HomeProps) => (
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

export default Home
