import React from 'react'

export default function LongDescription({recipe}) {
  return (
    <div>
        <div className="border ronuded shadow w-[750px] h-auto text-left  ml-12 mb-4 py-7 px-4 font-semibold text-green-900 font-display2 text-lg">
              {recipe.longDescription}
            </div>
    </div>
  )
}
