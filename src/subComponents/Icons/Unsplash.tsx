import React from 'react'
import { FaUnsplash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Unsplash = () => (
  <Link to="/">
    <FaUnsplash className="h-11 w-11 sm:h-14 sm:w-14 cursor-pointer" />
  </Link>
)

export default Unsplash
