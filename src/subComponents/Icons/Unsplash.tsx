import React from 'react'
import { FaUnsplash } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Unsplash = () => (
  <Link to="/">
    <FaUnsplash className="h-7 w-7 sm:h-9 sm:w-9 cursor-pointer" />
  </Link>
)

export default Unsplash
