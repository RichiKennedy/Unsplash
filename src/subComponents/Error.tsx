import React, { useContext, useEffect } from "react";
import MyContext from "../context/DataContext";
import { GrClose } from "react-icons/gr";
import "../styles/animations.css";

const Error = () => {
  const { hasError, setHasError } = useContext(MyContext);
  useEffect(() => {
    if (hasError === true) {
      setTimeout(() => {
        setHasError(false);
      }, 5000);
    }
  }, [hasError, setHasError]);

  return (
    <>
      {hasError ? (
        <div
          id="slide"
          className=" z-50 h-[5vh] absolute w-[100vw]  sm:w-[20vw] animate-slide-in"
        >
          <div className="flex items-center justify-between bg-yellow-500 text-white font-bold  px-4 py-2 h-[50%]">
            <h1 className=" md:text-xs">Warning</h1>
            <GrClose
              className=" cursor-pointer hover:scale-150 ease-in-out duration-300 animate-pulse"
              onClick={() => setHasError(false)}
            />
          </div>
          <div className="flex items-center border border-t-0 yellow-red-400 rounded-b bg-yellow-100 px-4 py-3 text-yellow-700 h-[50%]">
            <p className=" md:text-xs  "> Search Result Not Found!!</p>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Error;