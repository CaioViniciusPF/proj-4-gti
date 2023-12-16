import React from 'react'
import { Carrousel } from '../Components/Carrousel'
import { Carousel } from "@material-tailwind/react";
import { Nav } from '../Components/Nav'
import {
    Card,
    CardBody,
    Typography
  } from "@material-tailwind/react";
import database from "../depoimentos.json";
import Numeros from '../Components/Numeros';
import Titulo from '../Components/Titulo';
function App(){
    return(
        <main className="text-blue-gray-900">
        <Nav tema={"claro"} absoluto={"0"}/>    
        <Carrousel/>
        <section className='bg-[#4E84A6]  py-[5%] '>
            <h1 className='text-center font-bold text-4xl  mb-8'>
                    Depoimentos
            </h1>
            <Carousel
                className=" "
                navigation=""
                >
                
                {database.Depoimentos.map(dados=>(
                
                    <Card key={dados.id} className=" mx-auto my-0 max-w-xs bg-[#1D4B73] bg-opacity-20">

                        <CardBody>
                            <Typography variant="h3"  className="text-blue-gray-50">
                            {dados.titulo}
                            </Typography>
                            <Typography className="text-sm text-blue-gray-50">
                            {dados.text}
                            </Typography>
                        </CardBody>
                    </Card>

                ))}
                </Carousel>
        </section>
        <Numeros/>
        <Titulo/>
        
        </main>
    )
}
export default App