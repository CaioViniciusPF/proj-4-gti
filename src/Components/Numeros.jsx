import React from 'react'
import database from "../numeros.json";
function Numeros() {
  return (
    <section className='numbers divide-x-2 px-[15%] py-[5%] flex flex-wrap justify-center gap-10 bg-[#1D4B73]'>
        
        {database.Num.map(dados=>(
                
            <div  key={dados.id} className='flex flex-col text-blue-gray-50 items-center justify-center w-64 p-4'>
                <h3 className='text-5xl  font-bold mb-3'>
                {dados.text}
                </h3>
                <span className='text-center text-2xl font-semibold'>
                {dados.titulo}
                </span>
            </div> 

        ))}
        
    </section>
  )
}

export default Numeros