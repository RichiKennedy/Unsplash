import { createContext, useState, ReactNode, useEffect, useRef } from "react";
import { ImageType } from "../types/imageTypes";

export type ContextShape = {
  fetchUnsplashImages: (
    clearSearch?: boolean,
    apiPage?: number,
    value?: string
  ) => void;
  inputValue: string | "";
  setInputValue: (arg: string) => void;
  hasInputValue: boolean;
  setHasInputValue: (arg: boolean) => void;
  images: Array<string>;
  hasError: boolean;
  setHasError: (arg: boolean) => void;
  hasApiError: boolean;
  setHasApiError: (arg: boolean) => void;
  randomImage: ImageType;
  getSplashImage: (topic?: string) => void;
  getRandomImages: (topic?: string | null) => void;
  topic: string | "";
  setTopic: (arg: string) => void;
  heroLoaded: boolean;
  setHeroLoaded: (arg: boolean) => void;
  imageLoaded: boolean;
  setImageLoaded: (arg: boolean) => void;
};

export type ContextProps = {
  children: ReactNode;
};

const MyContext = createContext<ContextShape>({} as ContextShape);
const REACT_APP_KEY = process.env.REACT_APP_KEY;
const REACT_APP_RANDOM_IMAGE_KEY = process.env.REACT_APP_RANDOM_IMAGE_KEY;

export const MyContextProvider = ({ children }: ContextProps) => {
  const [images, setImages] = useState<Array<string>>([]);
  const [randomImage, setRandomImage] = useState<ImageType>({} as ImageType);
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState<string | "">("");
  const [hasInputValue, setHasInputValue] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [hasApiError, setHasApiError] = useState(false);
  const [topic, setTopic] = useState("");
  const [heroLoaded, setHeroLoaded] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const dataFetchedRef = useRef(false);

  const apiFetch = (
    url: string,
    onSuccess: (result: Array<string>) => void
  ) => {
    setImageLoaded(false);
    fetch(url)
      .then(async (response) => {
        if (!response.ok) {
          setImageLoaded(false);
          setHasApiError(true);
          return;
        }
        const jsonData = await response.json();
        const result = jsonData.results ? jsonData.results : jsonData;
        if (result.length > 1) {
          setImageLoaded(false);
          onSuccess(result);
        } else {
          setImageLoaded(false);
          setHasError(true);
        }
      })
      .catch((error) => {
        setImageLoaded(false);
        setHasApiError(true);
      });
  };

  const fetchUnsplashImages = async (
    clearSearch?: boolean,
    apiPage?: number,
    value?: string
  ) => {
    let pagToUse = !apiPage ? page : apiPage;
    const valueToUse = !value ? inputValue : value;

    if (clearSearch) {
      pagToUse = 1;
    }

    apiFetch(
      `https://api.unsplash.com/search/photos?page=${pagToUse}&per_page=10&query=${valueToUse}&client_id=${REACT_APP_KEY}`,
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

  const getSplashImage = (topic?: string) => {
    const splashImageUrl = `https://api.unsplash.com/photos/random?count=1&orientation=landscape&client_id=${REACT_APP_KEY}`;
    const dynamicHero = `https://api.unsplash.com/photos/random?count=1&orientation=landscape&query=${topic}&client_id=${REACT_APP_KEY}`;
    setHeroLoaded(false);
    fetch(!topic ? splashImageUrl : dynamicHero)
      .then(async (res) => {
        if (!res.ok) {
          setHasApiError(true);
          setHeroLoaded(false);
          return;
        }
        const data = await res.json();
        const result = await data;
        if (result.length) {
          setRandomImage(result[0]);
          setHeroLoaded(false);
        } else {
          setHasError(true);
          setHeroLoaded(false);
        }
      })
      .catch((error) => {
        setHasApiError(true);
        setHeroLoaded(false);
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
        setHasInputValue,
        topic,
        setTopic,
        heroLoaded,
        setHeroLoaded,
        imageLoaded,
        setImageLoaded,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyContext;
