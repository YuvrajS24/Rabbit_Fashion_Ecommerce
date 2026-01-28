import React from 'react'
import { useRef } from 'react';


const NewArrivals = () => {

    const scrollRef = useRef(null);

    const scroll = (direction)=>{

        const scrollAmount = direction === "left"? -300 : 300;
        scrollRef.current.scrollBy({left:scrollAmount , behavior:"smooth"})


    }


  return (
  
  <section>


      <div className='flex space-x-2 mt-4 '>

      <button className='p-2 bg-gray-200 rounded' onClick={()=>scroll("left")}>⬅️</button>
      <button className='p-2 bg-gray-200 rounded' onClick={()=>scroll("right")}>➡️</button>

      </div> 


       <div ref={scrollRef} className='flex overflow-x-scroll'>

           <div className='min-w-[300px]'>Item-1</div>
           <div className='min-w-[300px]'>Item-2</div>
           <div className='min-w-[300px]'>Item-3</div>

        </div>

  </section>


  )
}

export default NewArrivals
