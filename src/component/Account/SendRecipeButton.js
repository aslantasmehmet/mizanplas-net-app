import React from 'react'
import  { FaDirections } from "react-icons/fa";

export default function SendRecipeButton() {
  return (
    <div className='border md:w-72 w-96 h-24 hover:shadow-xl shadow  rounded-lg  pt-7 font-display font-semibold flex flex-row justify-center text-green-900 bg-gray-200 hover:bg-white duration-500'>
        < FaDirections size={35}/>
        <div className='ml-2 text-2xl'>Tarif Gönder</div>
    </div>
  )
}
