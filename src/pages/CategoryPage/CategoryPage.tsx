import React, { useContext, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Header from '../../components/Header/Header'
import Hero from '../../components/hero/Hero'
import ImageGallery from '../../components/ImageGallery/ImageGallery'
import MyContext from '../../context/DataContext'
import { ImageType } from '../../types/imageTypes'
import categories from './CategoryData'

export interface CategoryPageProps {
  onImageClick: (clickedImage: ImageType) => void
}

const CategoryPage = ({ onImageClick }: CategoryPageProps) => {
  const { setTopic, setInputValue, fetchUnsplashImages, getSplashImage } =
    useContext(MyContext)
  const { theCategoryID } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (!categories.find((element) => element.id === theCategoryID)) {
      navigate('*')
    }

    window.scrollTo(0, 0)
    setInputValue(theCategoryID || '')
    setTopic(theCategoryID || '')
    fetchUnsplashImages(true, 1, theCategoryID)
    getSplashImage(theCategoryID)
  }, [theCategoryID])

  return (
    <div data-test="category-page-wrapper">
      <Header homePage />
      <Hero categoryID={theCategoryID} />
      <ImageGallery onImageClick={onImageClick} />
    </div>
  )
}

export default CategoryPage
