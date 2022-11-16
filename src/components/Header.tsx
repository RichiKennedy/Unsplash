import { useEffect, useState, CSSProperties } from "react";
import { FaUnsplash, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import CategoryItem from "../subComponents/CategoryItem";
import SearchBar from "../subComponents/SearchBar";
import { CategoryType } from "../types/categoryTypes";

interface HeaderProps {
  homePage: boolean;
}

const Header = ({ homePage }: HeaderProps) => {
  const [cssStyles, setCSSStyles] = useState<CSSProperties>({
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    color: "white",
  });

  const categories = [
    { name: "Architecture & Interiors", id: "Architecture & Interiors" },
    { name: "Ocean", id: "Ocean" },
    { name: "Current Events", id: "Current Events" },
    { name: "Food & Drink", id: "Food & Drink" },
    { name: "Fashion & Beauty", id: "Fashion & Beauty" },
    { name: "Interior Design", id: "Interior Design" },
    { name: "Street Art", id: "Street Art" },
    { name: "Nature", id: "Nature" },
  ];
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 100) {
        setCSSStyles({
          backgroundColor: "white",
          color: "black",
        });
      } else {
        setCSSStyles({
          backgroundColor: "rgba(0, 0, 0, 0.3)",
          color: "white",
        });
      }
    };

    if (!homePage) {
      setCSSStyles({
        backgroundColor: "white",
        color: "black",
      });
    } else {
      window.addEventListener("scroll", changeColor);
    }
  }, []);

  return (
    <main
      className="fixed flex justify-start w-[100vw] h-[12vh] lg:h-[18vh] duration-150 ease-in top-0 z-20 shadow-md"
      style={{
        backgroundColor: cssStyles.backgroundColor,
        color: cssStyles.color,
      }}
    >
      <section className="flex items-center justify-between h-full w-full">
        <div className="h-[100%] w-[100%] flex flex-col items-start justify-evenly px-5">
          <div className="gap-5 flex w-full ">
            <Link to="/">
              <FaUnsplash className="h-11 w-11 sm:h-14 sm:w-14 cursor-pointer" />
            </Link>
            <SearchBar />
          </div>
          <div className="flex w-full">
            <ul className="w-[1200px] xl:w-[90%] flex items-center justify-between overflow-auto whitespace-nowrap gap-5">
              {categories.map((category: CategoryType) => (
                <CategoryItem category={category} />
              ))}
            </ul>
            <ul className="flex items-center justify-between xl:justify-end px-5 gap-5 w-[400px] ">
              <FaAngleRight className="text-lg xl:hidden block" />
              <CategoryItem
                category={{
                  id: "about",
                  name: "About",
                }}
              />
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Header;
