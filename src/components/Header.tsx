import { useEffect, useState } from "react";
import { FaUnsplash } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategoryItem from "../subComponents/CategoryItem";
import SearchBar from "../subComponents/SearchBar";
import { CategoryType } from "../types/categoryTypes";

interface HeaderProps {
  isStatic: boolean;
}

const Header = ({ isStatic }: HeaderProps) => {

  const [color, setColor] = useState("rgba(0, 0, 0, 0.3)");
  const [textColor, setTextColor] = useState("white");
  let categories = [
    { name: "Architecture & Interiors", id: "Architecture & Interiors" },
    { name: "Ocean", id: "Ocean" },
    { name: "Current Events", id: "CurrentEvents" },
    { name: "Food & Drink", id: "Food&Drink" },
    { name: "Fashion & Beauty", id: "Fashion&Beauty" },
    { name: "Travel", id: "Travel" },
    { name: "Street Art", id: "StreetArt" },
    { name: "Nature", id: "Nature" },
  ];
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 145) {
        setColor("white");
        setTextColor("black");
      } else {
        setColor("rgba(0, 0, 0, 0.3)");
        setTextColor("white");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  const styleOnLocation = () => {
    const navLink = isStatic ? (
      <div
        style={{ color: `${textColor}` }}
        className="  flex items-center w-50 justify-center gap-5 pr-5"
      >
        
          <h1> | </h1>
        <Link to="/about">
          <h1 className="cursor-pointer hover:underline underline-offset-8 ">
            About
          </h1>
        </Link>
      </div>
    ) : null;
    const containerStyle = isStatic ? `${color}` : "white";
    const iconColor = isStatic ? `${textColor}` : "black";
    return (
      <main
        className="fixed flex justify-start w-[100vw] h-[12vh] lg:h-[18vh] duration-150 ease-in-out top-0 z-20 shadow-md"
        style={{ backgroundColor: containerStyle }}
      >
        <section className="flex items-center justify-between h-full w-full ">
          <div className="  h-[100%] w-[100%] flex flex-col items-start justify-evenly px-5">
            <div className="gap-5 flex w-full ">
              <Link to="/">
                <FaUnsplash
                  style={{ color: iconColor }}
                  className="h-11 w-11 sm:h-14 sm:w-14 cursor-pointer"
                />
              </Link>
              <SearchBar />
            </div>
            <div className="flex  w-full">
            <ul
              style={{ color: `${textColor}` }}
              className="w-[1600px] flex items-center justify-between overflow-auto whitespace-nowrap gap-5 "
            >
              {categories.map((category: CategoryType) => (
                <CategoryItem category={category} />
              ))}
              
            </ul>
              <ul className="flex items-center justify-end gap-5 w-[20%]"> {navLink} </ul>

            </div>
          </div>
          
        </section>
      </main>
    );
  };

  return (
    // <main
    //   className="fixed flex items-center py-10 w-full h-[10vh] duration-150 ease-in-out top-0 z-20 shadow-md"
    //   style={{ backgroundColor: `${color}` }}
    // >
    //   <div className="gap-5 pl-5 flex items-center justify-center">
    //     <Link to="/">
    //       <FaUnsplash
    //         style={{ color: `${textColor}` }}
    //         className="h-11 w-11 sm:h-14 sm:w-14 cursor-pointer"
    //       />
    //     </Link>
    //     <SearchBar />
    //   </div>

    styleOnLocation()
  );
};

export default Header;
