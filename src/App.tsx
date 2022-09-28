import React, { useState } from "react";
import { MyContextProvider } from "./context/DataContext";
import Header from "./components/Header";
import Images from "./components/Images";

// notes from meeting
// Add more images than the default 10 and create a way to either implement pages or lazy-load
// Make code more readable and if not possible, use comments explaining.
// Create a Trello board listing tasks with names of branches.
// Read up on FED guidelines

const REACT_APP_KEY = process.env.REACT_APP_KEY;

function App() {
  const [images, setImages] = React.useState<any[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [page, setPage] = useState(1);
  


  const fetchRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=${page}&per_page=10&query=${inputValue}&client_id=${REACT_APP_KEY}`
    );
    //console.log(`https://api.unsplash.com/search/photos?page=${page}&per_page=10&query=${inputValue}&client_id=${REACT_APP_KEY}`)
    const jsonData = await data.json();
    const result = await jsonData.results;

    setImages([...images, ...result]);
    setPage(page + 1);
   
  };

  return (
    <MyContextProvider>
      <div className=" w-full ">
        <Header
          fetchRequest={fetchRequest}
          inputValue={inputValue}
          setInputValue={setInputValue}
        />
        <Images images={images} fetchRequest={fetchRequest} />
      </div>
    </MyContextProvider>
  );
}

export default App;
