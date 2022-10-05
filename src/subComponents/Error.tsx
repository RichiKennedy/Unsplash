import React, { useContext } from "react";
import MyContext from "../context/DataContext";
import { GrClose } from "react-icons/gr";

// useEffect(() => {
//     const timer = setTimeout(() => console.log("Hello, World!"), 3000);
//     return () => clearTimeout(timer);
//   }, []);

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
        <div className=" w-[100vw] bg bg-red-300 ">
          <h1> Error </h1>
          <GrClose
            className=" cursor-pointer "
            onClick={() => setHasError(false)}
          />
        </div>
      ) : null}
    </>
  );
};

export default Error;
