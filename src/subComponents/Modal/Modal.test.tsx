import { fireEvent, render, screen } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom"
import { ImageType } from "../../types/imageTypes"
import Modal from "./Modal"
const modalImageMock: any = {
  urls: {
    raw: "raw",
    regular: "regular",
  },
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

const renderModal = (
  modalImage: ImageType,
  setModalImage: (arg: ImageType | undefined) => void,
  isOpen: boolean,
  setIsOpen: (arg: boolean) => void
) => {
render (
  <BrowserRouter>
  <Modal modalImage={modalImage} setModalImage={setModalImage} isOpen={isOpen} setIsOpen={setIsOpen}/>
  </BrowserRouter>
)
}

describe('modal component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })
  it('should render modal', () => {
    const setIsOpenMock = jest.fn()
    renderModal(modalImageMock, jest.fn, true, setIsOpenMock)

    const modal = screen.getByTestId('modal-wrapper')
    const zoomButton = screen.getByTestId('zoom-button')
    const closeModalIcon = screen.getByTestId('close-modal-button')
    const imageWrapper = screen.getByTestId('image-wrapper')
    const downloadButton = screen.getByTestId('download-button')
    expect(modal).toBeDefined()
    expect(modal).toBeInTheDocument()
    expect(zoomButton).toBeDefined()
    expect(closeModalIcon).toBeDefined()
    expect(imageWrapper).toBeInTheDocument()
    expect(downloadButton).toBeDefined()
    expect(setIsOpenMock).toHaveBeenCalledWith(true)
  })

  it('should expand image when zoom icon is clicked', () => {
    const setZoomedInMock = jest.fn()
    renderModal(modalImageMock, jest.fn, true, jest.fn)
    const zoomButton = screen.getByTestId('zoom-button')
    const image = screen.getByTestId('image')
    expect(image).toHaveAttribute('src', 'regular');
    fireEvent.click(zoomButton)
    expect(image).toHaveAttribute('src', 'raw');
  })

  it('should call setIsOpen with false when clicking close button', () => {
    const setIsOpenMock = jest.fn()
    const setModalImageMock = jest.fn()
    renderModal(modalImageMock, setModalImageMock, true, setIsOpenMock)
    jest.clearAllMocks()
    const closeModalIcon = screen.getByTestId('close-modal-button')
    fireEvent.click(closeModalIcon)
    const modal = screen.queryByTestId('modal-wrapper')
    expect(setIsOpenMock).toHaveBeenCalledWith(false)
  })

  it('should not render if setIsOpen is false', () => {
    renderModal(modalImageMock, jest.fn, false, jest.fn)
    const modal = screen.queryByTestId('modal-wrapper')
    expect(modal).not.toBeInTheDocument()
  })

  it('should follow file path of anchor tag once download button is clicked', () => {
    renderModal(modalImageMock, jest.fn, true, jest.fn)
    const downloadButton = screen.getByTestId('download-button')
    fireEvent.click(downloadButton)
    // expect(downloadButton).closest('a').toHaveAttribute('href', )
  })
})