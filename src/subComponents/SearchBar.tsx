import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MyContext from "../context/DataContext";

const SearchBar = () => {
  const { fetchUnsplashImages, inputValue, setInputValue } = useContext(MyContext);

  return (
    <div className=" flex items-center border-2 rounded-lg py-2 shadow-sm w-[60vw] bg-white   ">
      <input
        className=" pl-5 bg-transparent outline-none flex-grow text-lg text-black placeholder-gray-400  "
        type="text"
        placeholder="Search photos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AiOutlineSearch
        className="h-12 w-12 bg-white text-gray-900 rounded-full p-2 cursor-pointer mx-2"
        type="submit"
        onClick={() => fetchUnsplashImages(true)}
      />
    </div>
  );
};

export default SearchBar;
