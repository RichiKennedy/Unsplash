import { render, screen } from "@testing-library/react";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import MyContext from "../../context/DataContext";
import { ImageType } from "../../types/imageTypes";
import ImageGallery from "./ImageGallery";

const mockContext: any = {
  images: [],
  hasInputValue: false,
  getRandomImages: jest.fn(),
  fetchUnsplashImages: jest.fn(),
  getSplashImage: jest.fn(),
};
const onImageClick: any = jest.fn();

const renderImageGallery = (mockContext: any, onImageClick: any) => {
  return (
    <MyContext.Provider value={mockContext}>
      <BrowserRouter>
        <ImageGallery
          onImageClick={(clickedImage: ImageType) => onImageClick(clickedImage)}
        />
      </BrowserRouter>
    </MyContext.Provider>
  );
};

describe("image-gallery", () => {
  it("should render", () => {
    render(renderImageGallery(mockContext, onImageClick));
    expect(screen.getByTestId("image-gallery-wrapper")).toBeDefined();
  });
});
