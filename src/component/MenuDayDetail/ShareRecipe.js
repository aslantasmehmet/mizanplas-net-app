import React, { useState } from 'react'
import { FaStar, FaBook } from "react-icons/fa";

export default function ShareRecipe({menuDay}) {
    const [rating, setRating] = useState(0);
    const handleClick = (index) => {
        setRating(index + 1);
      };
    
      const stars = Array.from({ length: 5 }, (_, index) => (
        <FaStar
          key={index}
          className={`h-8 w-8 cursor-pointer ${
            index < rating ? "text-yellow-500" : "text-stone-500"
          }`}
          onClick={() => handleClick(index)}
        />
      ));
    
  return (
    <div>
        <div className="flex justify-between mb-4 border ml-12 w-[750px] h-auto rounded shadow ">
            <div className="flex flex-col mt-2">
              <div className="font-semibold font-display2 text-orange-500 text-lg text-left ml-4">
                Tarif Paylaşan
              </div>{" "}
              <div className="flex flex-row my-4 ml-4 border w-auto h-auto py-2 px-2 shadow">
                <div className="border-2 w-24 h-24 border-orange-500 rounded-full shadow-xl">
                  <img
                    className="w-full h-full rounded-full"
                    src={menuDay.pp}
                  />
                </div>
                <div className="flex flex-col ml-4">
                  <div className="text-green-900 font-bold text-xl font-display2 text-left">
                    {menuDay.adSoyad}
                  </div>
                  <div className="text-stone-500 font-bold text-md font-display2 text-left">
                    {menuDay.role}
                  </div>
                  <div className="text-stone-500 font-bold text-md font-display2  pt-5">
                    {menuDay.email}
                  </div>
                </div>
              </div>
            </div>

            <div></div>

            <div className="flex flex-col mt-4 mr-4">
              <div className="flex flex-col items-center mb-2 border w-auto h-auto shadow py-2 px-2">
                <div className="text-center mb-2 font-display2 text-xl text-green-900 font-semibold ">
                  Tarifi Beğendiniz mi?
                </div>
                <div className="flex">{stars}</div>
                <div className="flex flex-row border w-auto h-auto rouneded shadow px-2 py-2 ml-2 mr-2 mb-2 mt-4 transition duration-500 ease-in-out transform hover:scale-110">
                  <FaBook size={25} className="mt-4 text-left text-green-900" />
                  <div className="text-center mb-2 font-display2 text-xl text-green-900 font-semibold mt-3 ml-1">
                    Tarif Defterine Kaydet
                  </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  )
}
