"use client";
import React, { useState , useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'
import Link from 'next/link';
import { AiOutlineMenu , AiOutlineClose} from "react-icons/ai";


const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [color, setColor] = useState('transparent');
  const [textColor, setTextColor] = useState('white');

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor('#000000');
        setTextColor('#000000');
      } else {
        setColor('transparent');
        setTextColor('#ffffff');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);
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
        
        <div style={{ backgroundColor: `${color}` }} className="navbar  fixed z-10 ease-in duration-300 flex justify-between m-auto p-2 w-screen left-0 top-0">

    <a className=" normal-case text-xl " href="/"> <img className='ml-8' width={180} height={500} src="/icetWhite.png" /></a>
  
  <div className="">
  <ul className="hidden sm:flex menu menu-horizontal px-1 font-bold">
  <li><a href='#home' >Home</a></li>
  <li><a href='#event'>Events</a></li>
 
  
    </ul>
    {loading? null :  !user?(<ul className='flex menu menu-horizontal '>
    <li onClick={handleSignIn} className='p-2 cursor-pointer'>Login</li>
  
    </ul>):(
        <div className='flex-none gap-2'>
          <ul className='hidden sm:flex menu menu-horizontal'>
          
          
          {(user.displayName=='Sidhardh CR'||user.displayName=='TinkerHub ICET')?( 
          <li><a href='/addEvents' className='font-bold'>Add Events</a></li>
          
          
          ):(null)}
          <li><p className='pt-2'>{user.displayName}</p></li>
          </ul>
        </div>
    )}
    
   
    <div className="dropdown dropdown-end pr-4">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar online">
        <div className="w-10 rounded-full ">
          {!user?(<img src='/avatar.jpg'/>):(<img src={user.photoURL}alt="/a-4-1.jpg"/>)}
          
        </div>
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
     <ul className='sm:hidden'>
     <li><a href='/' >Home</a></li>
  <li><a href=''>Events</a></li>
  {user&&(user.displayName=='Sidhardh CR'||user.displayName=='TinkerHub ICET')?(
  <li><a href='/addEvents' className=''>Add Events</a></li>):(null)}
  
     </ul>
        <li>
          <Link href="/profile">profile</Link>
        </li>
        <li><a>Settings</a></li>
        {user?( <ul>
        <li><a onClick={handlesignOut}>Logout</a></li>
        </ul>):( null)}
       
      </ul>
      
    </div>
   
    <div>
        
      </div>
      {/* <div className='block sm:hidden'>
  <AiOutlineMenu size={20}/></div> */}
</div>
  </div>
  

<div>
  
</div>
    </div>
  )
}

export default Navbar