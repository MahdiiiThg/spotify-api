import React from 'react'
import SingleTrack from '../Components/SingleTrack'


function Albums() {
  const data = [
    { src: '/assets/images/ed.jpg' , artist: 'Ed Sheeran', title: 'I\'m Lost'},
    { src: '/assets/images/ed.jpg' , artist: 'Ed Sheeran', title: 'I\'m Lost'},
    { src: '/assets/images/ed.jpg' , artist: 'Ed Sheeran', title: 'I\'m Lost'},
    { src: '/assets/images/ed.jpg' , artist: 'Ed Sheeran', title: 'I\'m Lost'},
    { src: '/assets/images/ed.jpg' , artist: 'Ed Sheeran', title: 'I\'m Lost'},
    { src: '/assets/images/ed.jpg' , artist: 'Ed Sheeran', title: 'I\'m Lost'}
  ]
  return (
    <div className="bg-gray-700 text-white p-5 rounded-xl col-start-1 col-end-5">
      <div className="flex justify-between pb-5">
        <h5 className="capitalize">top albums</h5>
        <span>see all</span>
      </div>
      <div className="flex justify-around">
        {
          data.map((data,index) => <SingleTrack data={data} key={index} />)
        }
      </div>
    </div>
  )
}

export default Albums
