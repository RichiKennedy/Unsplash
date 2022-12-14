import React, { useContext, useEffect, useRef } from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/hero/Hero'
import { ImageType } from '../../types/imageTypes'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import MyContext from '../../context/DataContext'

interface HomeProps {
  onImageClick: (clickedImage: ImageType) => void
}

const Home = ({ onImageClick }: HomeProps) => {
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
      <ImageGallery onImageClick={onImageClick} />
    </div>
  )
}

export default Home
