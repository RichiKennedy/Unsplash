import { createContext, useState, ReactNode, useEffect } from "react";

interface Urls {
  full: string
}

interface User {
  name: string
}

interface Image {
  urls: Urls
  alt_description: null | string
  id: number
  user: User
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
  randomImage: Image[];
  getRandomImage: () => void;
 
};

export type ContextProps = {
  children: ReactNode;
};

const MyContext = createContext<ContextShape>({} as ContextShape);
const REACT_APP_KEY = process.env.REACT_APP_KEY;

export const MyContextProvider = ({ children }: ContextProps) => {
  const [images, setImages] = useState<Array<string>>([]);
  const [randomImage, setRandomImage] = useState<Array<Image>>([]);
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
<<<<<<< HEAD
=======
    // if true reset page and images
>>>>>>> 4db4d7f (refactor: remove comments and clg from finished code)
    const apiPage = boolean ? 1 : page;

    fetch(
      `https://api.unsplash.com/search/photos?page=${apiPage}&per_page=10&query=${inputValue}&client_id=${REACT_APP_KEY}`
    )
      .then(async (response) => {
        if (response.ok) {
          const jsonData = await response.json();
          const result = await jsonData.results;
<<<<<<< HEAD

=======
         
          // if your array is not empty, then display images,
>>>>>>> 2540b2d (feat: add random unsplash image to header background)
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
<<<<<<< HEAD
<<<<<<< HEAD
=======

    // const randomImage = async () => {
    //   fetch(`https://api.unsplash.com/photos/random?`)
    // }
>>>>>>> 4db4d7f (refactor: remove comments and clg from finished code)
=======
>>>>>>> 2540b2d (feat: add random unsplash image to header background)
  };
  
  

  const getRandomImage = () => {
   
    const REACT_APP_RANDOM_IMAGE_KEY = process.env.REACT_APP_RANDOM_IMAGE_KEY
    const randomImageUrl = `https://api.unsplash.com/photos/random?count=1&orientation=landscape&client_id=${REACT_APP_RANDOM_IMAGE_KEY}`;

    fetch(randomImageUrl).then(async (res) => {
  
      if (res.ok) {
        const data = await res.json();
        const result = await data;
        if (result.length) {
          setRandomImage(result);
          console.log(result)
        } else {
          console.log('error: image does not exist')
        }
          
      } if (!res.ok) {
        console.log("Api error");
      }
    })
    .catch((error) => {
      console.log('Catch error')
    })

  }

  useEffect(() => {
    getRandomImage()
  console.log('i fire once')
  }, [])
  // useEffect(() => {
  //   if (!randomImage.length) {
      

  //     console.log('anything')
  //   }
  // }, []);

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
