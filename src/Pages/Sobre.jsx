import React from 'react'
import { Nav } from '../Components/Nav'
import HeaderImg from '../Components/HeaderImg'
import Cards from '../Components/Cards'
function Sobre() {
  return (
    <>
    <Nav tema={"escuro"} absoluto={"1"} type={"sobre"}/>
    <HeaderImg typeHeader={"sobre"} />  
    <section className='px-[15%] py-[5%] flex flex-wrap justify-around gap-5 bg-[#4E84A6]'>
      <Cards baseDados={"dep"}/>
    </section>
    </>
  )
}

export default Sobre