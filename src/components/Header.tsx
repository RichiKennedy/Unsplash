import {  useEffect, useState } from "react";
import {FaUnsplash} from "react-icons/fa";
import SearchBar from "../subComponents/SearchBar";

const Header = () => {
  const [color, setColor] = useState("rgba(0, 0, 0, 0.3)");
  const [textColor, setTextColor] = useState("white");
 
  //const [navBarHeight, setNavBarHeight] = useState("90vh")
  

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 675) {
        setColor("white");
        setTextColor("black");
      
        //setNavBarHeight("100px")
      } else {
        setColor("rgba(0, 0, 0, 0.3)");
        setTextColor("white");
       
       // setNavBarHeight("150px")
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      className=" fixed flex items-center py-10 w-full h-[10vh] duration-150 ease-in-out top-0 z-20 shadow-md"
      style={{ backgroundColor: `${color}`}}
    >
      <div className="  gap-5 pl-5 flex items-center justify-center  ">
        <h1
          style={{ color: `${textColor}` }}
          className=" text-white font-bold "
        >
         
       <FaUnsplash className=" h-14 w-14"/>
        </h1>
       
          <SearchBar />
       
      </div>
    </div>
  );
};

export default Header;
