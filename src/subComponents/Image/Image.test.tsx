import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom"
import { ImageType } from "../../types/imageTypes"
import Image from "./Image"

const mockImage: any = {
  urls: "",
  alt_description: "",
  id: "",
  user: {
    name: null || "",
    profile_image: {
      large: "",
      medium: "",
      small: ""
    },
    links: {
      html: "",
      download_location: ""
    },
    for_hire: true
  },
  views: 0,
  downloads: 0,
  likes: 0,
  location: {
    city: "",
    country: ""
  },
  links: {
    html: "",
    download_location: ""
  },
  description: ""
}
const mockOnImageClick: any = jest.fn()

const renderImage = (
  image: ImageType,
  onImageClick: (clickedImage: ImageType) => void,
) => {
  render (
    <BrowserRouter>
    <Image image={image} onImageClick={onImageClick} />
    </BrowserRouter>
  )
};
describe('image component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('should render image component', () => {
    renderImage( mockImage, mockOnImageClick )
    expect(screen.getByTestId("image-wrapper")).toBeDefined()
    expect(screen.getByTestId("image")).toBeDefined()
    expect(screen.getByRole("button")).toBeDefined()
  
  })

  it('should display placeholder if not fully loaded', () => {

  })
})