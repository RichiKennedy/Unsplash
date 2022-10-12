import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MyContext from "../context/DataContext";

const SearchBar = () => {
  const { fetchUnsplashImages, inputValue, setInputValue } = useContext(MyContext);

  return (
    <div className=" flex items-center border-2 rounded-full py-2 shadow-sm w-[50vw] bg-white   ">
      <input
        className=" pl-5 bg-transparent outline-none flex-grow text-sm text-black placeholder-gray-400  "
        type="text"
        placeholder="Search photos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AiOutlineSearch
        className="h-8 w-8 bg-gray-300 hover:bg-gray-400 hover:scale-105 duration-75 ease-in-out text-gray-900 rounded-full p-1 cursor-pointer mx-2"
        type="submit"
        onClick={() => fetchUnsplashImages(true)}
      />
    </div>
  );
};

export default SearchBar;
