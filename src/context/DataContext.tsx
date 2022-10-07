import { createContext, useState, ReactNode } from "react";

export type ContextShape = {
  someFunc: (arg?: boolean) => void;
  inputValue: string;
  setInputValue: (arg: string) => void;
  images: Array<string>;
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

  const someFunc = async (boolean: boolean = false) => {
    // if true reset page and images
    const apiPage = boolean ? 1 : page;

    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=${apiPage}&per_page=10&query=${inputValue}&client_id=${REACT_APP_KEY}`
    );

    const jsonData = await data.json();
    const result = await jsonData.results;
    setImages(boolean ? [...result] : [...images, ...result]);

    setPage(page + 1);
    if (page > 1) {
    }
  };

  return (
    <MyContext.Provider
      value={{
        someFunc,
        inputValue,
        setInputValue,
        images,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyContext;
