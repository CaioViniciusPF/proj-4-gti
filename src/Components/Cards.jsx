import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    Typography
  } from "@material-tailwind/react";

import dataBaseServicos from "../servicos.json";
import database from "../sedes.json";

function Cards({baseDados}) {
    let cards;

    if (baseDados=="sedes") {
        cards=( 
            database.Sedes.map(dados=>(

                <Card key={dados.id} className="mt-5 max-w-xs bg-[#6FA8BF] ">
                    <CardHeader className=" ">
                        <img
                        className=''
                        src={dados.img}
                        alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="">
                        {dados.titulo}
                        </Typography>
                        <Typography>
                        {dados.text}
                        </Typography>
                    </CardBody>
                </Card>
            
            ))
        ); 
    }
    if (baseDados=="dep") {
        cards=( 
            dataBaseServicos.Servicos.map(dados=>(

                <Card key={dados.id} className="mt-5 max-w-xs bg-[#C9F2E3] ">
                    <CardHeader className=" ">
                        <img
                        className=''
                        src={dados.img}
                        alt="card-image"
                        />
                    </CardHeader>
                    <CardBody>
                        <Typography variant="h5" color="blue-gray" className="">
                        {dados.titulo}
                        </Typography>
                        <Typography>
                        {dados.text}
                        </Typography>
                    </CardBody>
                </Card>
            
            ))
        ); 
    }
  return (
    <>
    
    {cards}

       
    </>
  )
}

export default Cards