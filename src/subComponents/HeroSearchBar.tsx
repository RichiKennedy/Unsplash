import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import MyContext from "../context/DataContext";

const HeroSearchBar = () => {
  const { fetchUnsplashImages, inputValue, setInputValue } = useContext(MyContext);

  return (
    <div className=" flex items-center  rounded-sm py-2 shadow-sm w-full mt-5 bg-white   ">
      <form 
      className="flex w-[100%]"
      onSubmit={(e) => { 
        e.preventDefault()
        fetchUnsplashImages(true)
      }}>
      <input
        className=" pl-5 bg-transparent outline-none flex-grow text-sm text-black placeholder-gray-400  "
        type="text"
        placeholder="Search photos"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <AiOutlineSearch
        className="h-6  w-6 sm:h-8 sm:w-8 bg-gray-300 hover:bg-gray-400 hover:scale-105 duration-75 ease-in-out text-gray-900 rounded-full p-1 cursor-pointer mx-2"
        type="submit"
        onClick={() => fetchUnsplashImages(true)}
      />
      </form>
    </div>
  );
};

export default HeroSearchBar;
