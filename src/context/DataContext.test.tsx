import { renderHook } from "@testing-library/react"
import { ReactElement, useContext } from "react"
import MyContext from "./DataContext"
import { mockImage } from "../subComponents/Image/Image.test"
const valueMock = {
  fetchUnsplashImages: jest.fn,
  inputValue: "",
  setInputValue: jest.fn,
  images: mockImage,
  hasError: false,
  setHasError: jest.fn,
  hasApiError: false,
  setHasApiError: jest.fn,
  randomImage: mockImage,
  getSplashImage: jest.fn,
  getRandomImages: jest.fn,
  hasInputValue: false,
  setHasInputValue: jest.fn,
  topic: "",
  setTopic: jest.fn,
  heroLoaded: false,
  setHeroLoaded: jest.fn,
  imageLoaded: false,
  setImageLoaded: jest.fn,
}

describe('fetch unsplash images', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should run the function', () => {

    const {result} = renderHook(
      () => useContext(MyContext), {wrapper: ({children} : {children: ReactElement}) => 
    <MyContext.Provider value={valueMock}>
      {children}
    </MyContext.Provider>
    })
  })
})