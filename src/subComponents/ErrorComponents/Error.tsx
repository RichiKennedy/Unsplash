import React, { useContext, useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import MyContext from '../../context/DataContext'
import '../../styles/animations.css'

const Error = () => {
  const { hasError, setHasError } = useContext(MyContext)
  useEffect(() => {
    if (hasError === true) {
      setTimeout(() => {
        setHasError(false)
      }, 5000)
    }
  }, [hasError, setHasError])
  return (
    <section>
      {hasError ? (
        <div
          data-test="error-wrapper"
          id="slide"
          className="absolute z-50 h-[100px] md:h-[120px] w-[100vw] sm:w-[400px] animate-slide-in"
        >
          <div className="h-[50%] flex items-center justify-between bg-yellow-500 text-white font-bold  px-4 py-2">
            <h1>Warning</h1>
            <GrClose
              data-test="button"
              className=" cursor-pointer hover:scale-150 ease-in-out duration-300 animate-pulse"
              onClick={() => setHasError(false)}
            />
          </div>
          <div className="h-[50%] flex items-center border border-t-0 yellow-red-400 rounded-b bg-yellow-100 px-4 py-1 text-yellow-700">
            <p className="text-sm"> Search Result Not Found!!</p>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default Error
