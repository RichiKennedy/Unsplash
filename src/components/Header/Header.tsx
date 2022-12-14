import React, { useEffect, useState, CSSProperties } from 'react'
import { FaUnsplash, FaAngleRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ApiError from '../../subComponents/ErrorComponents/ApiError'
import CategoryItem from '../../subComponents/CategoryItem/CategoryItem'
import Error from '../../subComponents/ErrorComponents/Error'
import SearchBar from '../../subComponents/Searchbar/SearchBar'
import { CategoryType } from '../../types/categoryTypes'
import categories from '../../pages/CategoryPage/CategoryData'

interface HeaderProps {
  homePage: boolean
}

const Header = ({ homePage }: HeaderProps) => {
  const [cssStyles, setCSSStyles] = useState<CSSProperties>({
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    color: 'white',
  })


  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setCSSStyles({
          backgroundColor: 'white',
          color: 'black',
        })
      } else {
        setCSSStyles({
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          color: 'white',
        })
      }
    }

    if (!homePage) {
      setCSSStyles({
        backgroundColor: 'white',
        color: 'black',
      })
    } else {
      window.addEventListener('scroll', changeColor)
    }
  }, [])

  return (
    <main
      data-test="header-wrapper"
      className="fixed flex justify-start w-[100vw] h-[12vh] lg:h-[18vh] duration-150 ease-in top-0 z-20 shadow-md"
      style={{
        backgroundColor: cssStyles.backgroundColor,
        color: cssStyles.color,
      }}
    >
      <Error />
      <ApiError />
      <section className="flex items-center justify-between h-full w-full">
        <div className="h-[100%] w-[100%] flex flex-col items-start justify-evenly px-5">
          <div className="gap-5 flex w-full ">
            <Link to="/">
              <FaUnsplash className="h-11 w-11 sm:h-14 sm:w-14 cursor-pointer" />
            </Link>
            <SearchBar />
          </div>
          <div className="flex w-full">
            <ul className="w-[1200px] xl:w-[90%] flex items-center justify-between overflow-auto whitespace-nowrap gap-5">
              {categories.map((category: CategoryType) => (
                <CategoryItem category={category} key={category.id} />
              ))}
            </ul>
            <ul className="flex items-center justify-between xl:justify-end px-5 gap-5 w-[400px] ">
              <FaAngleRight className="text-lg xl:hidden block" />
              <CategoryItem
                category={{
                  id: 'about',
                  name: 'About',
                }}
              />
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Header
