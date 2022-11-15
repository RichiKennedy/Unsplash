import React from 'react'

import { BsImage } from 'react-icons/bs'
const Skeleton = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-900 w-full h-full">
  <div className="flex items-center justify-center gap-5 w-[90%] h-[90%]">
    <div className="relative w-[90%] h-[90%] space-y-3 overflow-hidden rounded-md bg-neutral-800 p-3 shadow before:absolute before:inset-0 before:-translate-x-full before:bg-gradient-to-r before:from-transparent before:via-white/20 hover:shadow-lg before:animate-[shimmer_1.5s_infinite]">
      <div className="h-[90%] w-[full  rounded-lg bg-neutral-600">
      </div>
      <div className="space-y-3">
   
        <div className="flex gap-2">
          <div className="h-5 w-16 rounded-full bg-neutral-600"></div>
          <div className="h-5 w-12 rounded-full bg-neutral-600"></div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Skeleton