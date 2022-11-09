import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MyContext from '../context/DataContext';
import { CategoryType } from '../types/categoryTypes';

interface CategoryProps {
    category: CategoryType
    
}

const CategoryItem = ({category}: CategoryProps) => {
    const { hasInputValue, setHasInputValue, inputValue, setInputValue, fetchUnsplashImages } = useContext(MyContext);


    const categorySearch = () => {
   console.log('category is ' + category.name)
   setInputValue(category.name)
   fetchUnsplashImages(true)
   console.log('category search()')
    }
  

  return (
    <div>
          <Link to={`/${category.id}`} >
          <li 
          onClick={() => categorySearch() }
          className="cursor-pointer hover:underline underline-offset-8"> {category.name}
           </li>
          </Link>
         
    </div>
  )
}

export default CategoryItem;