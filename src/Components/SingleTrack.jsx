import React from 'react'

function SingleTrack({data,setTrackId}) {
  const setId = (event) => {
    setTrackId(event)
  }
  return (
    <div onClick={(event) => setId(event)} className="text-center" id={data.id} >
      <img
        id={data.id}
        style={{height: '80px', width: '80px'}}
        className="rounded-lg mx-auto mb-2" 
        src={data.images[0].url}
        alt={data.src}
      />
      <h3
        id={data.id}
        className="text-xs font-bold pb-2">
          {data.name.substring(0,10)}
      </h3>
      {
        data.artists.map((artits, index) => 
          <span
            id={data.id}
            key={index}
            className="text-sm block">
              {artits.name.substring(0,7)}
          </span>
        )
      }
    </div>
  )
}

export default SingleTrack
