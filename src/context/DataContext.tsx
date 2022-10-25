import { createContext, useState, ReactNode, useEffect, useRef } from "react";
import { ImageType } from "../types/imageTypes";

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
  randomImage: ImageType;
  getSplashImage: () => void;
  getRandomImages: () => void;
};

export type ContextProps = {
  children: ReactNode;
};

// Look into typescript enums and switch cases

const MyContext = createContext<ContextShape>({} as ContextShape);
const REACT_APP_KEY = process.env.REACT_APP_KEY;

export const MyContextProvider = ({ children }: ContextProps) => {
  const [images, setImages] = useState<Array<string>>([]);
  const [randomImage, setRandomImage] = useState<ImageType>({} as ImageType);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const [hasInputValue, setHasInputValue] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);
  const dataFetchedRef = useRef(false);

  const apiFetch = (
    url: string,
    onSuccess: (result: Array<string>) => void
  ) => {
    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          setHasApiError(true);
          return;
        }
        const jsonData = await response.json();
        const result = jsonData.results ? jsonData.results : jsonData;

        if (result.length > 1) {
          onSuccess(result);
        } else {
          setHasError(true);
        }
      })
      .catch((error) => {
        setHasApiError(true);
      });
  };

  const fetchUnsplashImages = async (clearSearch: boolean = false) => {
    const apiPage = clearSearch ? 1 : page;
    apiFetch(
      `https://api.unsplash.com/search/photos?page=${apiPage}&per_page=10&query=${inputValue}&client_id=${REACT_APP_KEY}`,
      (result: Array<string>) => {
        setHasInputValue(true);
        setImages(clearSearch ? [...result] : [...images, ...result]);
        setPage(page + 1);
      }
    );
  };

  const getRandomImages = () => {
    apiFetch(
      `https://api.unsplash.com/photos/random?count=10&client_id=${REACT_APP_KEY}`,
      (result: Array<string>) => {
        setImages([...images, ...result]);
      }
    );
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
    getRandomImages();
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
