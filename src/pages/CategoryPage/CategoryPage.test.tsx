import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyContext from "../../context/DataContext";
import { ImageType } from "../../types/imageTypes";
import CategoryPage from "./CategoryPage";

const mockContext = {
  setTopic: jest.fn(),
  getRandomImages: jest.fn(),
  fetchUnsplashImages: jest.fn(),
  getSplashImage: jest.fn(),
  setInputValue: jest.fn(),
};

const renderCategoryPage = (
  mockContext: any,
  onImageClick: (clickedImage: ImageType) => void,
  modalImage: ImageType | undefined,
  setModalImage: (arg: ImageType | undefined) => void,
  isOpen: boolean,
  setIsOpen: (arg: boolean) => void
) => {
  return (
    <MyContext.Provider value={mockContext}>
      <BrowserRouter>
        <CategoryPage
          onImageClick={onImageClick}
          modalImage={modalImage}
          setModalImage={setModalImage}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </BrowserRouter>
    </MyContext.Provider>
  );
};

it("category-page should render", () => {
  render(
    renderCategoryPage(
      mockContext,
      jest.fn(),
      undefined,
      jest.fn(),
      false,
      jest.fn()
    )
  );
  expect(screen.getByTestId("category-page-wrapper")).toBeDefined();
});
