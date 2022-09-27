import {useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MyContext from "../context/DataContext"

interface SearchBarProps {
  fetchRequest: (inputValue: string) => void;
  
  inputValue: any;
  setInputValue: any;

}

const SearchBar = ({
  fetchRequest,
  inputValue,
  setInputValue,

}: SearchBarProps) => {

  const { someFunc, images } = useContext(MyContext);
  //someFunc('Hello World');

  const Submit = () => {
    fetchRequest(inputValue);
   
  };

  return (
    <div className=" flex items-center border-2 rounded-full py-2 shadow-sm w-[300px] md:w-[400px] ">
      <input
        className=" pl-5 bg-transparent outline-none flex-grow text-sm text-white placeholder-white  "
        type="text"
    
        placeholder="Search photos"
      
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AiOutlineSearch
        className="h-8 w-8 md:h-10 md:w-10  bg-white text-gray-900 rounded-full p-2 cursor-pointer mx-2"
        type="submit"
        onClick={Submit}
      />
      <div className=" bg"></div>
      <div></div>
    </div>
  );
};

export default SearchBar;
