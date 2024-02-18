"use client";
import React , { useState , useEffect} from 'react'
import { UserAuth } from '../context/AuthContext'


function Page() {

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
    
    <div className='bg-gradient-to-t from-black via-purple-950 to-black h-screen text-black'>
      <div className='bg-black fixed ease-in duration-300 flex justify-between m-auto p-2 w-screen left-0 top-0 h-14'></div>
        {loading?(<p>Loading...</p>):user?(<div className="min-h-screen flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
          <div className="max-w-md mx-auto">
            <div className="flex items-center space-x-5">
              <div className="w-12 h-12 rounded-full bg-gray-100 flex flex-shrink-0 justify-center items-center">
                <img
                  className="rounded-full"
                  src={user.photoURL}
                  alt="User Avatar"
                />
              </div>
              <div>
                <h1 className="font-bold text-2xl">{user.displayName}</h1>
                <p className="text-gray-500"></p>
              </div>
            </div>
            <div className="divide-y divide-gray-200">
              <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <p>Welcome!</p>
               
              </div>
              <div className="pt-6 text-base leading-6 font-bold text-gray-700">
                <p>Contact Information</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600">Email:</p>
                <p className="text-gray-900">{user.email}</p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600"></p>
                <p className="text-gray-900"></p>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-gray-600"></p>
                <p className="text-gray-900"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>):
        
        (<p> You must be logged in to view this page</p>)}

       </div>
  )
}

export default Page