import React from 'react'
import Genre from '../Components/Genre'

export default function Genres() {
  const bgColor = ['blue','yellow','red','blue','green']
  const data = [
    { genre: 'Rock'},
    { genre: 'pop'},
    { genre: 'metal'},
    { genre: 'electro pop'},
    { genre: 'classical period'},
    { genre: 'hip hop rap'}
  ]
  return (
    <div 
      className="
        bg-gray-700
        text-white
        p-5
        rounded-xl
        col-start-1
        col-end-3
        row-start-2
      ">
      <div className="flex justify-between pb-5">
        <h5 className="capitalize">genres</h5>
        <span>see all</span>
      </div>
      <div className="flex justify-around flex-wrap">
        {
          data.map((data,index) => <Genre key={index} data={data} />)
        }
      </div>
    </div>
  )
}
