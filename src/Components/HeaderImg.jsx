import React from 'react'
import fundoSobre from '/bg/fundo_sobre.jpg'
import contato from '/bg/contato.png'
function HeaderImg({typeHeader}) {
 
  
 {fundoSobre}
  const sobHeader=(
    <section 
      className={`flex flex-col text-blue-gray-50  items-center px-[15%] pt-[76px] pb-5 bg-[url('https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80')] bg-cover bg-no-repeat bg-center`} >
          <h1 className=' text-4xl font-bold mt-[20%] mb-2'>Nome da empresa</h1>
          <h2 className='mb-[20%]'>Conheca nossos serviços</h2>
    </section>);
  
  
  const contHeader=(
  <section 
    className={`text-blue-gray-900 flex justify-center items-center px-[15%] pt-[76px] pb-5  md:bg-none bg-[#4E84A6] bg-contain bg-no-repeat bg-bottom`}>
        <img src="bg/contato.png" className='hidden md:block md:w-1/2 ' alt="" />
        <div className=" flex flex-col rounded-2xl backdrop-blur-[1px] md:rounded-none md:bg-transparent bg-blue-gray-50 bg-opacity-50 px-3 py-2  md:border-l-2 md:border-blue-gray-50 md:w-1/2">
            <h1 className=' font-bold text-2xl  pb-2 pl-2 '>
                Nossos Contatos 
            </h1>
            <dl class="max-w-md pl-4 divide-y divide-blue-gray-50 dark:text-white dark:divide-gray-700">
              <div class="flex flex-col pb-3">
                  <dt class="mb-1 md:text-sm">Email </dt>
                  <dd class="text-sm font-semibold">yourname@flowbite.com</dd>
              </div>
              <div class="flex flex-col py-3">
                  <dt class="mb-1 md:text-sm ">Endereço</dt>
                  <dd class="text-sm font-semibold">92 Miles Drive, Newark, NJ 07103, California, USA</dd>
              </div>
              <div class="flex flex-col pt-3">
                  <dt class="mb-1 md:text-sm ">Telefone</dt>
                  <dd class="text-sm font-semibold">+85 98783 0938</dd>
              </div>
            </dl>
        </div>
        
    </section>);
  
  
    

  return (
    <>
      {typeHeader === "contato"?  contHeader:sobHeader }
      
    </>
  )
}

export default HeaderImg