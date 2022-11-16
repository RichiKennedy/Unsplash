import React from "react";

const Loader = () => {
  return (
    <main className=" flex items-center justify-center w-[100vw]">
    <section className=" relative w-24 h-24 animate-spin rounded-full bg-gradient-to-r from-gray-400 via-gray-500 to-gray-800">
      <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-20 w-20 bg-white rounded-full"></div>
    </section>
  </main>
  );
};

export default Loader;
