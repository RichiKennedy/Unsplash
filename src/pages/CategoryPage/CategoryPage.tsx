import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Hero from '../../components/hero/Hero'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import MyContext from '../../context/DataContext'
import Modal from '../../subComponents/Modal/Modal'
import { ImageType } from '../../types/imageTypes'

export interface CategoryPageProps {
  onImageClick: (clickedImage: ImageType) => void
}

const CategoryPage = ({
  onImageClick,
}: CategoryPageProps) => {
  const { setTopic, setInputValue, fetchUnsplashImages, getSplashImage } =
    useContext(MyContext)
  const { categoryID } = useParams()

  useEffect(() => {
    window.scrollTo(0, 0)
    setInputValue(categoryID || '')
    setTopic(categoryID || '')
    fetchUnsplashImages(true, 1, categoryID)
    getSplashImage(categoryID)
    // only want a re-render when categoryID has updated
  }, [categoryID])

  return (
    <div data-test="category-page-wrapper">
      <Header homePage />
      <Hero categoryID={categoryID} />
      <ImageGallery onImageClick={onImageClick} />
    </div>
  )
}

export default CategoryPage
