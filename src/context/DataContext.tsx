import { createContext, useState, ReactNode, useEffect, useRef } from "react";
import { imageType } from "../types/imageTypes";

export type ContextShape = {
  fetchUnsplashImages: (arg?: boolean) => void;
  inputValue: string;
  setInputValue: (arg: string) => void;
  hasInputValue: boolean;
  images: Array<string>;
  hasError: boolean;
  setHasError: (arg: boolean) => void;
  hasApiError: boolean;
  setHasApiError: (arg: boolean) => void;
  randomImage: imageType;
  getSplashImage: () => void;
  getRandomImages: (arg?: boolean) => void;
};

export type ContextProps = {
  children: ReactNode;
};

const MyContext = createContext<ContextShape>({} as ContextShape);
const REACT_APP_KEY = process.env.REACT_APP_KEY;

export const MyContextProvider = ({ children }: ContextProps) => {
  const [images, setImages] = useState<Array<string>>([]);
  const [randomImage, setRandomImage] = useState<imageType>({} as imageType);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [hasInputValue, setHasInputValue] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);
  const [theCount, setTheCount] = useState(10);
  const dataFetchedRef = useRef(false);

  const fetchUnsplashImages = async (clearSearch: boolean = false) => {
    const apiPage = clearSearch ? 1 : page;

    fetch(
      `https://api.unsplash.com/search/photos?page=${apiPage}&per_page=10&query=${inputValue}&client_id=${REACT_APP_KEY}`
    )
      .then(async (response) => {
        if (!response.ok) {
          setHasApiError(true);
          return;
        }
        const jsonData = await response.json();
        const result = await jsonData.results;
        if (result.length > 1) {
          setHasInputValue(true);

          setImages(clearSearch ? [...result] : [...images, ...result]);
          setPage(page + 1);
        } else {
          setHasError(true);
        }
      })
      .catch((error) => {
        setHasApiError(true);
      });
  };

  const getSplashImage = () => {
    const splashImageUrl = `https://api.unsplash.com/photos/random?count=1&orientation=landscape&client_id=${REACT_APP_KEY}`;

    fetch(splashImageUrl)
      .then(async (res) => {
        if (!res.ok) {
          setHasApiError(true);
          return;
        }
        const data = await res.json();
        const result = await data;
        if (result.length) {
          setRandomImage(result[0]);
        } else {
          setHasError(true);
        }
      })
      .catch((error) => {
        setHasApiError(true);
      });
  };

  useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    getSplashImage();
    getRandomImages(true);
  }, []);

  const getRandomImages = (newImages: boolean = false) => {
    const REACT_APP_RANDOM_IMAGE_KEY = process.env.REACT_APP_RANDOM_IMAGE_KEY;
    const nextImages = newImages ? 10 : theCount;
    const getRandomImagesUrl = `https://api.unsplash.com/photos/random?count=${nextImages}&client_id=${REACT_APP_RANDOM_IMAGE_KEY}`;

    fetch(getRandomImagesUrl)
      .then(async (res) => {
        if (!res.ok) {
          setHasApiError(true);
          return;
        }
        const data = await res.json();
        const result = await data;
        if (result.length && inputValue === "") {
          setImages(newImages ? [...result] : [...images, ...result]);
          setTheCount(theCount + 10);
        } else {
          setHasError(true);
        }
      })
      .catch((error) => {
        setHasApiError(true);
      });
  };

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
        getSplashImage,
        getRandomImages,
        hasInputValue,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyContext;
