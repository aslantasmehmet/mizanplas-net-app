import React from 'react'

export default function Preparation({recipe}) {
  return (
    <div>
        <div className="flex flex-col  mt-16 mb-4 ml-6">
              <div className="text-left pl-6 mb-2 font-semibold text-xl font-display2">
                {" "}
                {recipe.title}
              </div>
              <div className="text-green-900 font-display2 text-4xl  font-bold text-left pl-6 ">
                {" "}
                Nasıl Yaparız ?{" "}
              </div>
            </div>

            <div className="border rounded shadow w-[750px] h-auto text-left ml-12 mb-4 relative pl-4 pt-4 pb-4">
              {recipe.instructions.map((instruction, index) => (
                <div
                  key={index}
                  className="flex items-center font-semibold text-lg font-display2 text-stone-500 mb-2"
                >
                  <div className="w-5 text-center text-green-900 text-4xl">
                    {index + 1}
                  </div>
                  <span className="ml-2 pl-3">{instruction}</span>
                </div>
              ))}
              <div className="absolute bottom-0 left-0 w-full border-t"></div>
            </div>
    </div>
  )
}
