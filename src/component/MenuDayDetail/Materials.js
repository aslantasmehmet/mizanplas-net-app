import React from 'react'

export default function Materials({menuDay}) {
  return (
    <div>
        <div className="flex flex-col  mt-16 mb-4 ml-6">
              <div className="text-green-900 font-display2 text-4xl  font-bold text-left pl-6 ">
                {" "}
                Malzemeler{" "}
              </div>
            </div>
            <div className="border rounded shadow w-[750px] h-auto text-left ml-12 mb-4 relative pl-4 pt-4 pb-4">
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
    </div>
  )
}
