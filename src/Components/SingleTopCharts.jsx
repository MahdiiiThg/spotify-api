import React from 'react'

// icons
import {BsPlay, BsPlus} from 'react-icons/bs'

export default function SingleTopCharts({data}) {
  console.log('TopCharts',data);
  const millisToMinutesAndSeconds = (millis) => {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }

  return (
    <div className="flex justify-between items-center text-left text-xs mb-2">
      <div className="flex w-8/12">
        <img
          className="rounded-lg"
          style={{height:'56px', width: '56px'}}
          src={data.album.images[0].url} 
          alt={data.album.images[0].url}
          />
        <div className="pl-4">
          <h5 className="font-bold pb-2">{data.name}</h5>
          {
            data.artists.map((artist, index) => <span key={index}>{artist.name}, </span>)
          }
          
        </div>
      </div>
      <div >
        {millisToMinutesAndSeconds(data.duration_ms)}
      </div>
      <div >
        <BsPlay 
          className="
            rounded-sm
            bg-gray-400
            border
            border-white
            text-xl
          "/>
      </div>
      <div >
        <BsPlus className="text-xl"/>
      </div>
    </div>
  )
}
