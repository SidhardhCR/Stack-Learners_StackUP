"use client";
import React, { useState , useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import Link from 'next/link';


const Navbar = () => {
  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async ()=>{
    try{
      await googleSignIn()
    }catch(error){
      console.log(error);
      
    }
  }

  const handlesignOut = async () =>{
    try{
      await logOut()
    }catch(error){
      console.log(error)
    }
  }
  console.log(user)

  useEffect(()=>{
    const checkAuth = async ()=>{
      await new Promise((resolve)=> setTimeout(resolve,50));
      setLoading(false);
    };
    checkAuth();
  },[user]);

  return (
    <div >
        
        <div className="navbar bg-base-100">
  <div className="flex-1 ">
    <a className="btn btn-ghost normal-case text-xl " href="/"> <img width={200} src="/TinkerHub_ICET (3).png" /></a>
  </div>
  <div className="flex-none gap-2">
  <ul className="menu menu-horizontal px-1">
  <li><a href='/'>Home</a></li>
  <li><a href=''>Events</a></li>
 
  
    </ul>
    {loading? null :  !user?(<ul className='flex menu menu-horizontal '>
    <li onClick={handleSignIn} className='p-2 cursor-pointer'>Login</li>
  <li onClick={handleSignIn}className='p-2 cursor-pointer'>Sign Up</li>
    </ul>):(
        <div>
          <p>{user.displayName}</p>
        </div>
    )}
    
   
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
        <div className="w-10 rounded-full ">
          {!user?(<img src='/a-4-1.jpg'/>):(<img src={user.photoURL}alt="/a-4-1.jpg"/>)}
          
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <Link href="/profile">profile</Link>
        </li>
        <li><a>Settings</a></li>
        <li><a onClick={handlesignOut}>Logout</a></li>
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