import React from 'react'

function Navbar() {
  return (
    <div>
        
        <div className="navbar bg-base-100">
  <div className="flex-1 ">
    <a className="btn btn-ghost normal-case text-xl items-center" href="/"> <img width={200} src="/TinkerHub_ICET (3).png" /></a>
  </div>
  <div className="flex-none gap-2">
  <ul className="menu menu-horizontal px-1">
  <li><a>Home</a></li>
  <li><a>Events</a></li>
  <li><a>About</a></li>
  <li><a>Contact Us</a></li>
    </ul>
    <button className="btn btn-ghost btn-circle">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
    </button>
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="/a-4-1.jpg" />
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    
  </div>
</div>
<div>
  
</div>
    </div>
  )
}

export default Navbar