import React from 'react'

function SingleTrack({data}) {
  return (
    <div className="text-center">
      <img 
        style={{height: '80px', width: '80px'}}
        className="rounded-lg" 
        src={data.src}
        alt={data.src}
      />
      <h3 className="text-lg font-bold">{data.title}</h3>
      <span className="text-xs">{data.artist}</span>
    </div>
  )
}

export default SingleTrack
