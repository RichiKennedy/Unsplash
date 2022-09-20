import { useState } from 'react'
import { AiOutlineSearch } from "react-icons/ai"

interface SearchBarProps {
  fetchRequest: (inputValue: string) => void
}




const SearchBar = ({fetchRequest}: SearchBarProps) => {
  
 const [ inputValue, setInputValue] = useState('');


  const Submit = () => {
   console.log(inputValue)
    fetchRequest(inputValue)
  }
  
  return (
    <div className=' flex items-center border-2 rounded-full py-2 shadow-sm w-[300px] md:w-[400px] '>
        <input className=' pl-5 bg-transparent outline-none flex-grow text-sm text-white placeholder-white  '
        type="text"
        placeholder='Start Your Search...'
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <AiOutlineSearch className=' h-8 w-8 md:h-10 md:w-10  bg-white text-gray-900 rounded-full p-2 cursor-pointer mx-2'
        type='submit'
        onClick={Submit}
        />
    </div>
  )
}




export default SearchBar