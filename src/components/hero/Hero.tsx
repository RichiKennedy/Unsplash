import React, { useContext, useEffect, useState } from 'react'
import MyContext from '../../context/DataContext'
import SearchBar from '../../subComponents/Searchbar/SearchBar'
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
      className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-screen bg-fixed z-10"
    >
      {!heroLoaded ? <Skeleton /> : null}
      <img
        className={!heroLoaded ? 'hidden' : 'object-cover w-full h-full'}
        src={randomImage?.urls?.regular}
        onLoad={() => setHeroLoaded(true)}
        alt={randomImage?.alt_description ? randomImage.alt_description : ''}
        key={randomImage?.id}
      />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-black/40 text-white flex flex-col ">
        <div
          style={{ transform: `translateY(${offSetY * 0.25}px)` }}
          className={
            !categoryID
              ? 'h-[90%] sm:h-[100%] w-full p-16 sm:p-0 flex items-center justify-end flex-col '
              : 'h-[70%] sm:h-[70%] sm:p-16 flex items-center justify-end flex-col text-left '
          }
        >
          <section className="w-[100vw] p-2 h-[80%] flex flex-col justify-end sm:justify-center min-w-[250px] sm:w-[70vw] max-w-[800px] text-left gap-2 sm:pb-9">
            <h1 className="w-full text-3xl sm:text-4xl lg:text-5xl font-bold">
              {!categoryID ? 'Unsplash' : categoryID}
            </h1>
            <p className="w-full text-sm sm:text-lg">
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

        <div className="flex items-end p-2 sm:p-5 gap-2 h-[30%] w-full text-xs sm:text-lg ">
          <h1 className="text-gray-200 flex gap-2">
            Photo By
            <a href={randomImage?.links?.html} target="_blank" rel="noreferrer">
              <h1 className="text-gray-300 hover:text-white">
                {randomImage?.user?.name}
              </h1>
            </a>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Hero
