import React, { useContext } from "react";
import MyContext from "../context/DataContext";

const Error = () => {
  const { hasError } = useContext(MyContext);
  console.log(hasError);
  // hasError ? return () : null

  //set a timer onto hasError
  // close button
  // become false once new successful search
  return (
    <>
      {hasError ? <div className=" w-[100vw] bg bg-red-300 ">Error</div> : null}
    </>
  );
};

export default Error;
