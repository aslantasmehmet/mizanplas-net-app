import React, { useState } from 'react'
import { FaStar, FaBook } from "react-icons/fa";

export default function ResponsiveDesing({menuDay}) {
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
        <div className="grid grid-cols-1  md:hidden">
        {/* Image */}
        <div>
          <img
            className=" mt-8 w-[305px] h-auto  mx-auto rounded "
            src={menuDay.image}
          />
        </div>
        {/* Title */}
        <div>
          <div className="font-bold font-display2 text-green-900 text-4xl pt-7 mb-4 ">
            {menuDay.title}
          </div>
        </div>
      </div>

      {/* preparation time */}
      <div className="flex flex-col  border rounded shadow mb-4 mx-auto w-[305px] h-auto md:hidden ">
        <div className="flex flex-col transition duration-500 ease-in-out transform hover:scale-110 mb-2">
          <div className="text-2xl font-semibold text-display2 text-green-900 ml-2 mt-4 ">
            Kaç Kişilik
          </div>
          <div className="mt-2 font-bold font-display2 text-stone-500 ">
            {" "}
            {menuDay.manyPerson} kişilik
          </div>
          <div className=" mx-auto mt-2 divide-y w-48 h-1 bg-green-900" />
        </div>
        <div className="flex flex-col transition duration-500 ease-in-out transform hover:scale-110 mb-2">
          <div className="text-2xl font-semibold text-display2 text-green-900 mt-4">
            Hazırlanma Süresi
          </div>
          <div className="mt-2 font-bold font-display2 text-stone-500">
            {" "}
            {menuDay.preparaTiontime}  Dakika
          </div>
          <div className="mx-auto  mt-2 divide-y w-48 h-1 bg-green-900" />
        </div>
        <div className="flex flex-col transition duration-500 ease-in-out transform hover:scale-110 mb-2">
          <div className="text-2xl font-semibold text-display2 text-green-900 mt-4 mr-4 ml-6">
            Pişirme Süresi
          </div>
          <div className=" mt-2 font-bold font-display2 text-stone-500 ml-3">
            {" "}
            {menuDay.cookingTime} Dakika
          </div>
          <div className="mx-auto mt-2 mb-4 divide-y w-48 h-1 bg-green-900" />
        </div>
      </div>

      <div className="md:hidden">
        {/* materials */}
        <div className="flex flex-col  mt-16 mb-4 mx-auto ">
          <div className="text-green-900 font-display2 text-4xl  font-bold  ">
            {" "}
            Malzemeler{" "}
          </div>
        </div>
        <div className="border rounded shadow w-[305px] h-auto text-left mx-auto mb-4 relative pl-4 pt-4 pb-4">
          {menuDay.ingredients.map((ingredient, index) => (
            <div
              key={index}
              className="flex items-center font-semibold text-lg font-display2 text-stone-500 mb-2"
            >
              <div className="w-3 h-3 rounded-full bg-green-900 mr-2"></div>
              {ingredient}
            </div>
          ))}
          <div className="absolute bottom-0 left-0 w-full border-t"></div>
        </div>

        {/* Preparation  */}
        <div className="flex flex-col  mt-16 mb-4 mx-auto ">
          <div className=" mb-2 font-semibold text-xl font-display2">
            {" "}
            {menuDay.title}
          </div>
          <div className="text-green-900 font-display2 text-4xl  font-bold  ">
            {" "}
            Nasıl Yaparız ?{" "}
          </div>
        </div>

        <div className="border rounded shadow w-[305px] h-auto text-left mx-auto mb-4 relative pl-4 pt-4 pr-4 pb-4">
          {menuDay.instructions.map((instruction, index) => (
            <div
              key={index}
              className="flex items-center font-normal text-lg font-display2 text-stone-500 mb-2"
            >
              <div className="w-5 text-center text-green-900 text-3xl">
                {index + 1}
              </div>
              <span className="ml-2 pl-3">{instruction}</span>
            </div>
          ))}
          <div className="absolute bottom-0 left-0 w-full border-t"></div>
        </div>
      </div>

      {/* recipeMaker and do you like it*/}

      <div className="flex flex-col mb-4 border mx-auto w-[305px] h-auto rounded shadow md:hidden">
        <div className="flex flex-col mt-2 pr-4">
          <div className="font-semibold font-display2 text-orange-500 text-lg text-left ml-4">
            Tarif Paylaşan
          </div>{" "}
          <div className="flex flex-row my-4 ml-4 border w-auto h-auto py-2 px-2 shadow">
            <div className="flex flex-col ">
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

        <div className="flex flex-col mt-4 pr-4 pl-4">
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
