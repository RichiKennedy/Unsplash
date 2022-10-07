import React, { useContext } from "react";
import MyContext from "../context/DataContext";
import { GrClose } from "react-icons/gr";




const Error = () => {
  const { hasError, setHasError } = useContext(MyContext);
  console.log(hasError);


  

  // hasError ? return () : null

  //set a timer onto hasError
  // close button
  // become false once new successful search

  return (
    <>
      {hasError ? (  
       
          <div className=" z-10 h-[20vh] absolute w-[100vw] animate-slide-in animate-slide-back  ">
            <div className="flex items-center justify-between bg-yellow-500 text-white font-bold rounded-t px-4 py-2 h-[50%]">
              <h1>Warning</h1>
              <GrClose
                className=" cursor-pointer hover:scale-150 ease-in-out duration-300 animate-pulse"
                onClick={() => setHasError(false)}
              />
            </div>
            <div className="flex items-center border border-t-0 yellow-red-400 rounded-b bg-yellow-100 px-4 py-3 text-yellow-700 h-[50%]">
                <p> Unfortunately your search was unsuccessful!!</p>
            </div>
          </div>
        
      ) : null}
 
    </>
  );
};

export default Error;
