import React from 'react'
import  { MdSwitchAccount } from "react-icons/md";

export default function MyRecipesButton() {
  return (
    <div className='border md:w-72 w-96 h-24 hover:shadow-xl shadow  rounded-lg  pt-7 font-display font-semibold flex flex-row justify-center text-green-900 bg-gray-200 hover:bg-white duration-500'>
        < MdSwitchAccount size={35}/>
        <div className='ml-2 text-2xl'>Hesabım</div>
    </div>
  )
}
