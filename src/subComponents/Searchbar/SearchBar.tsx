import React, { useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import MyContext from '../../context/DataContext'

interface SearchBarProps {
  classNames?: string
}

const SearchBar = ({ classNames }: SearchBarProps) => {
  const { fetchUnsplashImages, inputValue, setInputValue } =
    useContext(MyContext)
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = () => {
    fetchUnsplashImages(true)
    if (location.pathname !== '/') {
      navigate('/')
    }
  }

  const searchBarClassnames =
    classNames ||
    'flex items-center border-2 rounded-full py-2 shadow-sm w-[70vw] sm:w-[50vw] h-7 sm:h-9 bg-gray-100'

  return (
    <section>
      <form
        data-test="form-wrapper"
        className={searchBarClassnames}
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
      >
        <input
          data-test="input"
          className="pl-5 bg-transparent outline-none flex-grow text-sm text-black placeholder-gray-400"
          type="text"
          placeholder="Search high-resolution photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AiOutlineSearch
          data-test="button"
          className="h-6 w-6 md:h-8 md:w-8 bg-gray-100 hover:bg-gray-200 hover:scale-105 duration-75 ease-in-out text-gray-900 rounded-full p-1 cursor-pointer mx-2"
          type="submit"
          onClick={() => handleSearch()}
        />
      </form>
    </section>
  )
}

export default SearchBar
