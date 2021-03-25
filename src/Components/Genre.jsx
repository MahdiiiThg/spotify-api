import React from 'react'

export default function Genre({data, bg}) {
  return (
    <div
      className={`
        p-3
        capitalize
        rounded-xl
        mt-3
        ${bg ? bg : 'bg-yellow-700'}
      `}>
      <span>{data.genre}</span>
    </div>
  )
}
