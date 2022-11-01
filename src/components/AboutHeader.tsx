import React from "react";
import { FaUnsplash } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchBar from "../subComponents/SearchBar";

const AboutHeader = () => {
  return (
    <div className="fixed flex items-center py-10 w-full h-[10vh] duration-150 ease-in-out top-0 z-20 shadow-md ">
      <div className="gap-5 pl-5 flex items-center justify-center">
        <Link to="/">
          <FaUnsplash className="h-11 w-11 sm:h-14 sm:w-14 cursor-pointer" />
        </Link>
        <SearchBar />
      </div>
    </div>
  );
};

export default AboutHeader;
