import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../context/DataContext'
import SearchBar from '../../subComponents/SearchBar/SearchBar'
import Skeleton from '../../subComponents/PlaceHolder/Skeleton'

interface HeroType {
  categoryID: string | undefined
}

const Hero = ({ categoryID }: HeroType) => {
  const { heroLoaded, setHeroLoaded } = useContext(MyContext)
  const { randomImage } = useContext(MyContext)
  const [offSetY, setOffSetY] = useState(0)
  const handleScroll = () => setOffSetY(window.pageYOffset)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      data-test="hero-wrapper"
      className="relative h-[50vh] lg:h-[70vh] bg-fixed z-10"
    >
      {!heroLoaded ? <Skeleton /> : null}
      <img
        className={!heroLoaded ? 'hidden' : 'object-cover w-full h-full'}
        src={randomImage?.urls?.regular}
        onLoad={() => setHeroLoaded(true)}
        alt={randomImage?.alt_description ? randomImage.alt_description : ''}
        key={randomImage?.id}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40 text-white flex items-center justify-between flex-col">
        <div
          style={{ transform: `translateY(${offSetY * 0.35}px)` }}
          className={
            !categoryID
              ? 'h-[76%] sm:h-[70%] w-full p-10 md:max-w-2xl md:p-0 flex items-center justify-end flex-col text-left'
              : 'h-[80%] sm:h-[70%] p-10 md:p-0 flex items-center justify-end flex-col text-left'
          }
        >
          <section className="w-[90vw] min-w-[250px] sm:w-[70vw] max-w-[800px]  text-left -translate-y-10 sm:translate-y-10 md:-translate-y-10">
            <h1 className="w-full text-3xl lg:text-5xl mb-5 font-bold">
              {!categoryID ? 'Unsplash' : categoryID}
            </h1>
            <p className="w-full">
              The internet’s source for visuals. <br />
              Powered by creators everywhere. <br />
              {categoryID
                ? `Bringing you stunning photography highlighting ${categoryID}`
                : null}
            </p>
            {!categoryID ? (
              <SearchBar classNames="hidden sm:flex items-center rounded-md py-2 shadow-sm w-full mt-5 bg-white h-12" />
            ) : null}
          </section>
        </div>
        <div className="flex items-center p-5 gap-2 h-[80px] w-full">
          <h1 className="text-gray-200">
            <strong>Photo</strong> by
            <strong> {randomImage?.user?.name} </strong>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
