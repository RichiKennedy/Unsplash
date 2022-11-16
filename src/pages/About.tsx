import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <section className="flex items-center justify-center flex-col bg-gray-800 w-[100vw] h-[100vh] ">
      <Header homePage={false}/>
      <div className=" flex items-center justify-center p-10 w-[50%] flex-col text-white">
        <h1 className=" text-4xl"> About Page</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque corrupti voluptatum enim recusandae iusto voluptatibus aliquam laborum ea cumque asperiores quae labore, laboriosam libero perspiciatis. Reiciendis voluptates cupiditate, repellat aperiam quam saepe numquam, alias dolore minus aut tenetur praesentium sapiente hic quis possimus autem laborum unde natus quidem quibusdam provident?
        </p>
      </div>
    </section>
  );
};

export default About;
