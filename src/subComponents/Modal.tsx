import React, { useContext } from "react";
import MyContext from "../context/DataContext";
import { ImageType } from "../types/imageTypes";
import { BsFillArrowDownSquareFill, BsArrowsAngleExpand } from "react-icons/bs";
import { MdOutlineClose } from "react-icons/md";


interface ModalProps {
  modalImage: ImageType;
}
const Modal = ({ modalImage }: ModalProps) => {
    const {setModalOpen, modalOpen} = useContext(MyContext)

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen ? (
        <div className="fixed top-0 left-0 z-50 w-screen h-[100vh] bg-black/70 flex flex-col justify-center items-center">
          <div className=" w-full">
            <MdOutlineClose
              color="white"
              className="w-8 h-8 cursor-pointer fill-current lg:translate-y-10  text-white m-5 hover:scale-125 duration-150 ease-out -translate-y-10"
              onClick={() => closeModal()}
            />
          </div>
          <div className="bg-white w-full md:w-[90%] h-[75%] lg:h-[90%] xl:h-full  flex items-center justify-between flex-col -translate-y-10">
            <nav className="flex items-center justify-between  w-full ">
              <div className="flex items-center p-5 gap-2 h-[80px]">
                <img
                  className=" rounded-full h-10 w-10 "
                  src={modalImage.user.profile_image.large}
                  alt={modalImage.alt_description}
                />
                <a
                  href={modalImage.user.links.html}
                  target="_blank"
                  rel="noreferrer"
                >
                  
                  <h1 className=" hover:underline">
                    {modalImage.user.name}
                  </h1>
                </a>
              </div>
              <button className="flex items-center justify-between gap-3 border px-2 py-1 rounded-md text-lg border-gray-400 hover:border-gray-900 text-gray-600 hover:text-gray-900 duration-150 ease-in-out m-5">
                Download
                <BsFillArrowDownSquareFill className=" w-5 h-5 rounded-md cursor-pointer " />
              </button>
            </nav>
            {/* IMAGE SECTION */}
            <section className="  w-[100%] h-[85%] sm:h-[80%] md:w-[90%] md:h-[80%] lg:w-[900px] lg:h-[900px] flex items-center justify-center">
                <div className=" relative w-full h-full flex items-center justify-center ">
                  <img
                    className="  object-cover w-full h-full"
                    src={modalImage.urls.small}
                    alt={modalImage.alt_description}
                  />
                  <div className="hover: cursor-zoom-in opacity-0 hover:opacity-100 absolute  top-0 right-0 bottom-0 left-0 flex  justify-end">
                    <BsArrowsAngleExpand className=" h-7 w-7 m-3 text-white" />
                  </div>
                </div>
            </section>
            {/* IMAGE SECTION ENDED */}
            <footer className=" w-full flex ">
              <ul className="flex items-center justify-between w-[70%] sm:w-[60%] md:w-[50%] lg:w-[35%] xl:[] p-5">
                <li className=" ">
                  <p className=" text-gray-400"> Views </p>
                  <h1> {modalImage.views}</h1>
                </li>
                <li className=" ">
                  <p className=" text-gray-400"> Downloads </p>
                  <h1> {modalImage.downloads}</h1>
                </li>
                <li className=" ">
                  <p className=" text-gray-400"> Likes </p>
                  <h1> {modalImage.likes}</h1>
                </li>
              </ul>
              <ul className=" bg-black">
                <li></li>
              </ul>
            </footer>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
