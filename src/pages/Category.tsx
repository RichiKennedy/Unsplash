import React, { useContext, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header';
import Hero from '../components/Hero';
import Images from '../components/Images';
import MyContext from '../context/DataContext';
import { ImageType } from '../types/imageTypes';


const Category = () => {
  const { setInputValue, fetchUnsplashImages } = useContext(MyContext);
  const {categoryID} = useParams()

useEffect(() => {
    setInputValue(categoryID || "")
    fetchUnsplashImages(true)
    console.log('category useEffect')
},[categoryID])

  return (
    <div>
      <h1> {categoryID} </h1>
        <Header isStatic={true} />
        {/* <Hero /> */}
        <Images onImageClick={function (clickedImage: ImageType): void {
         
      } } isStatic={false} />
      </div>
  )
}

export default Category