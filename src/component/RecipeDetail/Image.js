import React from 'react'

export default function Image({recipe}) {
  return (
    <div>
        <div>
            <img
              className="border rounded-lg shadow  mt-8 ml-8 w-full h-full"
              src={recipe.image}
            />
          </div>
    </div>
  )
}
