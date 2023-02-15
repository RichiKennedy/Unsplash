import React, { useContext, useEffect } from 'react'
import { GrClose } from 'react-icons/gr'
import MyContext from '../../context/DataContext'
import '../../styles/animations.css'

const ApiError = () => {
  const { hasApiError, setHasApiError } = useContext(MyContext)
  useEffect(() => {
    if (hasApiError === true) {
      setTimeout(() => {
        setHasApiError(false)
      }, 5000)
    }
  }, [hasApiError, setHasApiError])
  return (
    <section>
      {hasApiError ? (
        <div
          data-test="api-error-wrapper"
          className="absolute z-50 h-[100px] md:h-[120px] w-[100vw] sm:w-[400px] animate-slide-in"
        >
          <div className="h-[30%] flex items-center justify-between bg-red-500 text-white font-bold  px-4 py-2 ">
            <h1>Warning</h1>
            <GrClose
              data-test="button"
              className=" cursor-pointer hover:scale-150 ease-in-out duration-300 animate-pulse"
              onClick={() => setHasApiError(false)}
            />
          </div>
          <div className="h-[70%]  flex items-center border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-1 text-red-700 ">
            <p className=" text-sm">
              Holy smokes!! <br />
              The Unsplash API rate limit has exceeded.
              <br />
              Try again soon!
            </p>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ApiError
