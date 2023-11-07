"use client";
import React , { useState , useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'


function page() {

    const { user }= UserAuth()
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const checkAuth = async ()=>{
          await new Promise((resolve)=> setTimeout(resolve,50));
          setLoading(false);
        };
        checkAuth();
      },[user]);
  return (
    
    <div className='bg-white h-screen text-black'>
        {loading?(<p>Loading...</p>):user?(<p> Welcome, {user.displayName}</p>):(<p> You must be logged in to view this page</p>)}

       </div>
  )
}

export default page