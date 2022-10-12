import { createContext, useState, ReactNode, useEffect } from "react";

interface Urls {
  full: string;
}

interface User {
  name: string;
}

interface Image {
  urls: Urls;
  alt_description: null | string;
  id: number;
  user: User;
}

export type ContextShape = {
  fetchUnsplashImages: (arg?: boolean) => void;
  inputValue: string;
  setInputValue: (arg: string) => void;
  images: Array<string>;
  hasError: boolean;
  setHasError: (arg: boolean) => void;
  hasApiError: boolean;
  setHasApiError: (arg: boolean) => void;
  randomImage: Image;
  getRandomImage: () => void;
};

export type ContextProps = {
  children: ReactNode;
};

const MyContext = createContext<ContextShape>({} as ContextShape);
const REACT_APP_KEY = process.env.REACT_APP_KEY;

export const MyContextProvider = ({ children }: ContextProps) => {
  const [images, setImages] = useState<Array<string>>([]);
  const [randomImage, setRandomImage] = useState<Image>({} as Image);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);

  useEffect(() => {
    if (hasError === true) {
      setTimeout(() => {
        setHasError(false);
      }, 5000);
    }
    if (hasApiError === true) {
      setTimeout(() => {
        setHasApiError(false);
      }, 5000);
    }
  }, [hasError, hasApiError]);

  const fetchUnsplashImages = async (boolean: boolean = false) => {
    const apiPage = boolean ? 1 : page;

    fetch(
      `https://api.unsplash.com/search/photos?page=${apiPage}&per_page=10&query=${inputValue}&client_id=${REACT_APP_KEY}`
    )
      .then(async (response) => {
        if (response.ok) {
          const jsonData = await response.json();
          const result = await jsonData.results;

          if (result.length > 1) {
            setImages(boolean ? [...result] : [...images, ...result]);
            setPage(page + 1);
            if (page > 1) {
            }
          } else {
            setHasError(true);
          }
        }

        if (!response.ok) {
          setHasApiError(true);
        }
      })
      .catch((error) => {
        setHasApiError(true);
      });
  };

  const getRandomImage = () => {
    const REACT_APP_RANDOM_IMAGE_KEY = process.env.REACT_APP_RANDOM_IMAGE_KEY;
    const randomImageUrl = `https://api.unsplash.com/photos/random?count=1&orientation=landscape&client_id=${REACT_APP_RANDOM_IMAGE_KEY}`;

    fetch(randomImageUrl)
      .then(async (res) => {
        if (res.ok) {
          const data = await res.json();
          const result = await data;
          if (result.length) {
            setRandomImage(result[0]);
          } else {
            setHasError(true);
          }
        }
        if (!res.ok) {
          setHasApiError(true);
        }
      })
      .catch((error) => {
        setHasApiError(true);
      });
  };

  useEffect(() => {
    getRandomImage();
  }, []);

  return (
    <MyContext.Provider
      value={{
        fetchUnsplashImages,
        inputValue,
        setInputValue,
        images,
        hasError,
        setHasError,
        hasApiError,
        setHasApiError,
        randomImage,
        getRandomImage,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyContext;
