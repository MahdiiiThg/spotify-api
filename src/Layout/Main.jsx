import React from 'react'
import Sidebar from '../Components/Common/Sidebar'

function Main(props) {
  return (
    <div 
      className="
        min-h-screen
        grid
        grid-cols-6
        text-center
        text-white
        bg-gradient-to-b
        from-black
        to-gray-900
      ">
      <Sidebar />
      <div className="col-start-2 col-end-7 p-5">
        {props.children}
      </div>
    </div>
  )
}

export default Main
