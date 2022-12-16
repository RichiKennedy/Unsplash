import React, { useContext, useEffect } from 'react'
import MyContext from '../../context/DataContext'
import Unsplash from '../../subComponents/Icons/Unsplash'

const NoPageFound = () => {
  const { randomImage, getSplashImage } = useContext(MyContext)
  useEffect(() => {
    getSplashImage('', true)
  }, [])
  return (
    <section className="w-[100vw] h-[100vh] fixed overflow-hidden  ">
      <img
        className="w-full h-full fixed"
        src={randomImage?.urls?.regular}
        alt={randomImage?.alt_description ? randomImage.alt_description : ''}
        key={randomImage?.id}
      />

      <div className="bg-black/25  text-white absolute w-[100vw] h-[100vh] p-5 flex items-center  flex-col">
        <div className="w-[100%]">
          <Unsplash />
        </div>
        <div className="w-[200px] h-[200px] relative" />
        <h1 className="h-[90vh] flex items-center justify-center text-4xl text-center">
          404 <br />
          PAGE NOT FOUND
        </h1>
      </div>
    </section>
  )
}

export default NoPageFound
