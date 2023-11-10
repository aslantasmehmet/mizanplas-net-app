import React from 'react'
import  { SlNotebook } from "react-icons/sl";

export default function MyRecipesButton() {
  return (
    <div className='border md:w-72 w-96 h-24 hover:shadow-xl shadow  rounded-lg  pt-7 font-display font-semibold flex flex-row justify-center text-green-900 bg-gray-200 hover:bg-white duration-500'>
        < SlNotebook size={35}/>
        <div className='ml-2 text-2xl'>Tariflerim</div>
    </div>
  )
}
