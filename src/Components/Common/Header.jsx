import React from 'react'

function Header() {
  return (
    <div className="flex justify-between items-center pb-5">
      <ul className="list-none flex justify-between items-center w-52">
        <li><a href="">music</a></li>
        <li><a href="">podcast</a></li>
        <li><a href="">latest</a></li>
      </ul>
      <div>
        <input type="text" placeholder="search your favorit"/>
      </div>
      <div className="flex items-center">
        <a href="">setting</a>
        <div 
          className="
            flex
            items-center
            bg-gray-500
          ">
          <div className="bg-gray-100">
            <img
              className="rounded-sm"
              style={{height:'30px',width:'30px'}}
              src="/assets/images/ed.jpg"
              alt="profile image"
            />
          </div>
          <span className="p-2">John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Header
