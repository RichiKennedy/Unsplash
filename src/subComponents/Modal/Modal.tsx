import React, { useEffect, useState } from 'react'
import { FcApproval } from 'react-icons/fc'
import { BsArrowsAngleExpand, BsArrowsAngleContract } from 'react-icons/bs'
import { CgUnavailable } from 'react-icons/cg'
import { MdOutlineClose } from 'react-icons/md'
import { ImageType } from '../../types/imageTypes'
import Skeleton from '../PlaceHolder/Skeleton'

interface ModalProps {
  modalImage: ImageType
  setModalImage: (arg: ImageType | undefined) => void
  isOpen: boolean
  setIsOpen: (arg: boolean) => void
}
const Modal = ({
  modalImage,
  setModalImage,
  isOpen,
  setIsOpen,
}: ModalProps) => {
  const [zoomedIn, setZoomedIn] = useState(false)
  const [loaded, setLoaded] = useState(false)

  const toggleZoom = () => {
    setZoomedIn(!zoomedIn)
  }

  useEffect(() => {
    if (!modalImage) {
      return
    }
    setIsOpen(true)
  }, [modalImage])

  const closeModal = () => {
    setIsOpen(false)
    setZoomedIn(false)
    setModalImage(undefined)
  }

  const renderZoomContent = () => {
    const classes = zoomedIn
      ? 'flex items-center justify-center min-h-[80%] min-w-[100%]'
      : 'w-[100%] h-[65%] sm:h-[80%] md:w-[90%] md:h-[80%] lg:w-[900px] lg:h-[80%] flex items-center justify-center'
    const src = zoomedIn ? modalImage.urls.raw : modalImage.urls.regular
    const zoomCursor = zoomedIn
      ? 'hover: cursor-zoom-out opacity-0 hover:opacity-100 absolute top-0 right-0 bottom-0 left-0 flex justify-end'
      : 'hover: cursor-zoom-in opacity-0 hover:opacity-100 absolute top-0 right-0 bottom-0 left-0 flex justify-end'
    const zoomIcon = zoomedIn ? (
      <BsArrowsAngleContract className="h-7 w-7 m-3 text-white" />
    ) : (
      <BsArrowsAngleExpand className="h-7 w-7 m-3 text-white" />
    )
    return (
      <section data-test="image-wrapper" className={classes}>
        <div className="relative w-full h-full flex items-center justify-center">
          {!loaded ? <Skeleton /> : null}
          <img
            data-test="image"
            className="object-cover w-full h-full"
            src={src}
            alt={modalImage.alt_description}
            onLoad={() => setLoaded(true)}
          />
          <div
            data-test="zoom-button"
            onClick={() => toggleZoom()}
            className={zoomCursor}
            role="button"
            tabIndex={0}
          >
            {zoomIcon}
          </div>
        </div>
      </section>
    )
  }

  return (
    <section>
      {isOpen && (
        <div
          data-test="modal-wrapper"
          className="fixed top-0 left-0 z-50 w-screen h-[100vh] bg-black/70 flex flex-col justify-center items-center"
        >
          <div className="w-full">
            <MdOutlineClose
              data-test="close-modal-button"
              className="w-8 h-8 cursor-pointer fill-current lg:translate-y-10  text-white m-5 hover:scale-125 duration-150 ease-out -translate-y-10"
              onClick={() => closeModal()}
            />
          </div>
          <div className="bg-white w-full md:w-[90%] h-[80%] lg:h-[90%] xl:h-full flex items-center justify-between flex-col -translate-y-10 overflow-scroll">
            <nav className="flex items-center justify-between p-3 w-full">
              <div className="flex items-center gap-2 h-[70px] w-[65%]">
                <a
                  data-test="anchor-tag"
                  href={modalImage.user.links.html}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    data-test="profile-image"
                    className="rounded-full h-7 w-7 sm:h-12 sm:w-12 "
                    src={modalImage.user.profile_image.large}
                    alt={modalImage.alt_description}
                  />
                </a>
                <section className=" text-sm sm:text-lg w-[90%] flex flex-col">
                  <a
                    href={modalImage.user.links.html}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <h1 className=" hover:underline">{modalImage.user.name}</h1>
                  </a>
                  {modalImage.user.for_hire ? (
                    <a
                      href={modalImage.user.links.html}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <h1 className=" flex items-center text-xs sm:text-base gap-1 hover:cursor-pointer">
                        Available for hire
                        <FcApproval />
                      </h1>
                    </a>
                  ) : (
                    <h1>
                      {modalImage.description ? modalImage.description : ''}
                    </h1>
                  )}
                </section>
              </div>
            </nav>
            {renderZoomContent()}
            <footer className="w-full flex items-center justify-between">
              <ul className="flex justify-between w-[100%] sm:w-[60%] md:w-[50%] lg:w-[35%] p-5 text-sm sm:text-lg">
                <li>
                  <p className=" text-gray-400 "> Views </p>
                  <h1>
                    {' '}
                    {modalImage.views ? (
                      modalImage.views
                    ) : (
                      <CgUnavailable className="mt-1" />
                    )}{' '}
                  </h1>
                </li>
                <li>
                  <p className="text-gray-400 "> Downloads </p>
                  <h1>
                    {' '}
                    {modalImage.downloads ? (
                      modalImage.downloads
                    ) : (
                      <CgUnavailable className="mt-1" />
                    )}{' '}
                  </h1>
                </li>
                <li>
                  <p className="text-gray-400 "> Likes </p>
                  <h1>
                    {' '}
                    {modalImage.likes ? (
                      modalImage.likes
                    ) : (
                      <CgUnavailable className="mt-1" />
                    )}{' '}
                  </h1>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      )}
    </section>
  )
}

export default Modal
