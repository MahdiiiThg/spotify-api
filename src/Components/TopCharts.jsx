import React from 'react'
import SingleTopCharts from './SingleTopCharts';

export default function TopCharts(props) {
  return (
    <div 
      className="
        bg-gray-700
        text-white
        p-5
        rounded-xl
        col-start-3
        col-end-5
        row-start-2
      ">
      <div className="flex justify-between pb-5">
        <h5 className="capitalize">top charts</h5>
        <span>see all</span>
      </div>
      <div className="p-2">
        { props.data && 
          props.data.tracks.map((track, index) => <SingleTopCharts data={track} key={index}/>)  
        }
      </div>
    </div>
  )
}
