import { createContext, useState, ReactNode } from "react";

export type ContextShape = {
  someFunc: (arg?: boolean) => void;
  inputValue: string;
  setInputValue: (arg: string) => void;
  images: Array<string>;
  hasError: boolean;
  setHasError: (arg: boolean) => void;
};

export type ContextProps = {
  children: ReactNode;
};

const MyContext = createContext<ContextShape>({} as ContextShape);
const REACT_APP_KEY = process.env.REACT_APP_KEY;

export const MyContextProvider = ({ children }: ContextProps) => {
  const [images, setImages] = useState<Array<string>>([]);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);

  if (hasError === true) {
    setTimeout(() => {
      setHasError(false);
    }, 5000);
  }

  const someFunc = async (boolean: boolean = false) => {
    // if true reset page and images
    const apiPage = boolean ? 1 : page;

    fetch(
      `https://api.unsplash.com/search/photos?page=${apiPage}&per_page=10&query=${inputValue}&client_id=${REACT_APP_KEY}`
    )
      .then(async (response) => {
        if (response.ok) {
          // you did get a response, api is happy

          const jsonData = await response.json();
          const result = await jsonData.results;
          console.log(result);
          // if your array is not empty, then display images,
          if (result.length > 1) {
            setImages(boolean ? [...result] : [...images, ...result]);
            setPage(page + 1);
            if (page > 1) {
            }

            // if it is empty, then call the toast to say nothing found
          } else {
            setHasError(true);

            console.log("should be true");
          }
        }

        if (!response.ok) {
          // get error message from body or default to response status
          // Do something with the response toast
          console.log("!response");
        }
      })
      .catch((error) => {
        console.log(error);
        // Do something with the response toast
      });

    //old code below
    // const jsonData = await data.json();
    // const result = await jsonData.results;
    // console.log(result);
    // if (result.length === 0) {
    //   console.log("error");
    // } else {
    //   console.log("this works");
    // }

    // setImages(boolean ? [...result] : [...images, ...result]);

    // setPage(page + 1);
    // if (page > 1) {
    // }
  };

  return (
    <MyContext.Provider
      value={{
        someFunc,
        inputValue,
        setInputValue,
        images,
        hasError,
        setHasError,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyContext;
