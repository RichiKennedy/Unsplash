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
          className=" z-50 h-[5vh] absolute w-[100vw]  sm:w-[20vw] animate-slide-in"
        >
          <div className="flex items-center justify-between bg-red-500 text-white font-bold rounded-t px-4 py-2 h-[50%]">
            <h1>Warning</h1>
            <GrClose
              data-test="button"
              role="button"
              className=" cursor-pointer hover:scale-150 ease-in-out duration-300 animate-pulse"
              onClick={() => setHasApiError(false)}
            />
          </div>
          <div className="flex items-center border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700 h-[50%]">
            <p className=" sm:text-xs">
              Holy smokes!! something has gone wrong with the server.
            </p>
          </div>
        </div>
      ) : null}
    </section>
  )
}

export default ApiError
