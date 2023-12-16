import React from 'react'
import reactLogo from '/bg/images.jpg'


function Titulo() {
  return (
    <section className='bg-[#4E84A6] flex flex-col items-center py-[5%] px-[15%]'>
    <h1 className='text-center font-bold text-4xl  mb-8'>
        Titulo 
    </h1>
    <div className='w-full justify-center items-center gap-4 flex flex-wrap'>
      <p className='text-2xl  md:w-3/5 text-justify'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, voluptates ipsam alias, facilis reprehenderit incidunt fugiat omnis maxime debitis repellendus illo, veritatis nam laudantium? Inventore ipsum enim blanditiis deleniti esse.
          </p>
      <img src={reactLogo} alt="" className='w-96 h-96 rounded-full'/>
    </div>
      
    
</section>
  )
}

export default Titulo