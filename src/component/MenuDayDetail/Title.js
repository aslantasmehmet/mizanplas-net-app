import React from 'react'

export default function Title({menuDay}) {
  return (
    <div>
         <div>
            <div className="font-bold font-display2 text-white text-5xl pt-7 -translate-y-24 translate-x-8">
              {menuDay.title}
            </div>
          </div>
    </div>
  )
}
