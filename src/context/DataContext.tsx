import { createContext, useState, ReactNode } from 'react';

export type ContextShape = {
  someFunc: (someArg: string) => void;
  images: Array<string>;
};

export type ContextProps = {
  children: ReactNode;
};

const MyContext = createContext<ContextShape>({} as ContextShape);

export const MyContextProvider = ({
  children,
}: ContextProps) => {
  const [images, setImages] = useState<Array<string>>([]);
  
  const someFunc = (someArg: string) =>
    console.log(someArg);
  
  return (
    <MyContext.Provider
      value={{
        someFunc,
        images,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
export default MyContext;


