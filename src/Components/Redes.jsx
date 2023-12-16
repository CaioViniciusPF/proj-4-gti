import React from 'react'
import { FaFacebook, FaLinkedin, FaYoutube, FaInstagram  } from "react-icons/fa";
import database from "../social.json";
function Redes() {
    const iconMap = {
        'facebook': <FaFacebook className='text-4xl text-blue-gray-900 hover:text-blue-gray-50' />,
        'linkedin': <FaLinkedin className='text-4xl text-blue-gray-900 hover:text-blue-gray-50' />,
        'youtube': <FaYoutube className='text-4xl text-blue-gray-900 hover:text-blue-gray-50' />,
        'instagram': <FaInstagram className='text-4xl text-blue-gray-900 hover:text-blue-gray-50' />,
      };
  return (


    <section className='px-[15%] py-8 flex justify-around bg-[#4E84A6]'>
        {database.RedesSocias.map(dados=>(
            <a href={dados.link} target="_blank" >
                {iconMap[dados.icon]}
            </a>
        ))}
    </section>
  )
}

export default Redes