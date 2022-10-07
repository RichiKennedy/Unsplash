import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MyContext from "../context/DataContext";

const SearchBar = () => {
  const { someFunc, inputValue, setInputValue } = useContext(MyContext);

  return (
    <div className=" flex items-center border-2 rounded-lg py-2 shadow-sm w-[60vw] bg-white   ">
      <input
        className=" pl-5 bg-transparent outline-none flex-grow text-sm text-black placeholder-gray-400  "
        type="text"
        placeholder="Search photos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AiOutlineSearch
        className="h-8 w-8 md:h-10 md:w-10  bg-white text-gray-900 rounded-full p-2 cursor-pointer mx-2"
        type="submit"
        onClick={() => someFunc(true)}
      />
    </div>
  );
};

export default SearchBar;
