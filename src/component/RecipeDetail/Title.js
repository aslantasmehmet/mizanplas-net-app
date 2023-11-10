import React from 'react'

export default function Title({recipe}) {
  return (
    <div>
         <div>
            <div className="font-bold font-display2 text-white text-5xl pt-7 -translate-y-24 translate-x-8">
              {recipe.title}
            </div>
          </div>
    </div>
  )
}
