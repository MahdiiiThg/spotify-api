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
        <div className="flex items-center">
          <img
            className="rounded-md"
            style={{height:'50px',width:'50px'}}
            src="/assets/images/ed.jpg"
            alt="profile image"
          />
          <span>John Doe</span>
        </div>
      </div>
    </div>
  )
}

export default Header
