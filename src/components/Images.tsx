import React from 'react'
import Image from '../subComponents/Image'







interface ImageProps {
  images: any;

  
  
}


const Images = ( {images}: ImageProps,  ) => {



 return (
   
       
<section className=' flex flex-col items-center justify-center'>

    <div className=' grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 my-6 gap-2 mx-3 '>
      



{images.map((image: any, i: number) => {
return (  

<Image  image={image} key={image.id} /> 
)
  
})
}

      </div>
    </section>

    
  )
}

export default Images