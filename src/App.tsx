import React, { useState } from "react";

import Header from "./components/Header";
import Images from "./components/Images";



// notes from meeting 
// Add more images than the default 10 and create a way to either implement pages or lazy-load  
// Make code more readable and if not possible, use comments explaining.
// Create a Trello board listing tasks with names of branches.
// Read up on FED guidelines

const REACT_APP_KEY = process.env.REACT_APP_KEY;

function App() {
  const [images, setImages] = useState([]);

  const fetchRequest = async (input_value: string) => {
   

    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&per_page=30&query=${input_value}&client_id=${REACT_APP_KEY}`
    );
    const jsonData = await data.json();
    const result = await jsonData.results;
    console.log(result);
    setImages(result);

    
};

  return (
    <div className=" w-full ">
      <Header fetchRequest={fetchRequest} />
      <Images images={images}   />
    </div>
  );
}

export default App;
