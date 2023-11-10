import React from 'react'

export default function PreparationStages({menuDay}) {
  return (
    <div><div className="flex justify-between  border rounded shadow mb-4 ml-12 w-[750px] h-28">
    <div className="flex flex-col transition duration-500 ease-in-out transform hover:scale-110">
      <div className="text-2xl font-semibold text-display2 text-green-900 ml-4 mt-4">
        Kaç Kişilik
      </div>
      <div className="mt-2 font-bold font-display2 text-stone-500 ">
        {" "}
        {menuDay.manyPerson} kişilik
      </div>
      <div className=" ml-3 mt-2 divide-y w-48 h-1 bg-green-900" />
    </div>
    <div className="flex flex-col transition duration-500 ease-in-out transform hover:scale-110">
      <div className="text-2xl font-semibold text-display2 text-green-900 mt-4">
        Hazırlanma Süresi
      </div>
      <div className="mt-2 font-bold font-display2 text-stone-500">
        {" "}
        {menuDay.preparaTiontime} Dakika
      </div>
      <div className="  mt-2 divide-y w-48 h-1 bg-green-900" />
    </div>
    <div className="flex flex-col mr-4 transition duration-500 ease-in-out transform hover:scale-110">
      <div className="text-2xl font-semibold text-display2 text-green-900 mt-4 mr-4">
        Pişirme Süresi
      </div>
      <div className="mt-2 font-bold font-display2 text-stone-500">
        {" "}
        {menuDay.cookingTime} Dakika
      </div>
      <div className=" mt-2 divide-y w-48 h-1 bg-green-900" />
    </div>
  </div></div>
  )
}
