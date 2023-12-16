import React from 'react'
import HeaderImg from '../Components/HeaderImg'
import { Nav } from '../Components/Nav'
import Cards from '../Components/Cards'
import Redes from '../Components/Redes'
function Contato() {
  return (
    <>
    <Nav tema={"claro"} absoluto={"1"}/>
    <HeaderImg typeHeader={"contato"} />
    <section className='px-[15%] py-[5%] flex flex-wrap justify-around gap-5 bg-[#1D4B73]'>
      <Cards baseDados={"sedes"}/>
    </section>
    <Redes/>
    </>
  )
}

export default Contato