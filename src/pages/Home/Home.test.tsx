import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MyContext from "../../context/DataContext";
import { ImageType } from "../../types/imageTypes";
import Home from "./Home";

const mockContext: any = {
  getSplashImage: jest.fn(),
  getRandomImages: jest.fn(),
};

const renderHomePage = (
  mockContext: any,
  onImageClick: (clickedImage: ImageType) => void,
) => {
  return (
    <MyContext.Provider value={mockContext}>
      <BrowserRouter>
        <Home
          onImageClick={onImageClick}
        />
      </BrowserRouter>
    </MyContext.Provider>
  );
};

it("should render home page", () => {
  render(
    renderHomePage(
      mockContext,
      jest.fn(),
    )
  );
  expect(screen.getByTestId("home-wrapper")).toBeDefined();
});
