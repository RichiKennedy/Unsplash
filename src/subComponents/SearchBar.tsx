import React, { useContext } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'
import MyContext from '../context/DataContext'

const SearchBar = () => {
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

  return (
    <div>
      <form
        className="flex items-center border-2 rounded-full py-2 shadow-sm w-[70vw] sm:w-[50vw] bg-white"
        onSubmit={(e) => {
          e.preventDefault()
          handleSearch()
        }}
      >
        <input
          className=" pl-5 bg-transparent outline-none flex-grow text-sm text-black placeholder-gray-400  "
          type="text"
          placeholder="Search high-resolution photos"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <AiOutlineSearch
          className="h-6  w-6 sm:h-8 sm:w-8 bg-gray-300 hover:bg-gray-400 hover:scale-105 duration-75 ease-in-out text-gray-900 rounded-full p-1 cursor-pointer mx-2"
          type="submit"
          onClick={() => handleSearch()}
        />
      </form>
    </div>
  )
}

export default SearchBar
