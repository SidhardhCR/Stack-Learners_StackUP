"use client";
import { db } from '../firebase';
import { collection,addDoc } from 'firebase/firestore';

import React,{useState,useEffect} from 'react'
import { UserAuth } from '../context/AuthContext';
import { Url } from 'next/dist/shared/lib/router/router';

async function addDataToFireStore(eventname:string,date:string,description:string,nameusers:any,eventlink:Url) {
    try{
        const docRef = await addDoc(collection(db,"messages"),{
            eventname:eventname,
            date:date,
            description:description,
            nameusers:nameusers,
            eventlink:eventlink
        });
        console.log("Data written with id : ",docRef.id)
        return true;
    }catch(error){
        console.log("error while data written : ",error);
    }
    return false;
}

function Page() {
    const { user } = UserAuth();
    const [eventname,setEventname] = useState("");
    const [date,setDate] = useState("");
    const [description,setDescription] = useState("");
    const [nameusers,setNameusers]=useState("");
    const [eventlink,seteventlink]=useState("");

    const handleSubmit = async (e:any)=>{
        
        e.preventDefault();
        const added = await addDataToFireStore(eventname,date,description,nameusers,eventlink);
        if(added){
            setEventname("");
            setDate("");
            setDescription("");
            setNameusers("");
            seteventlink("");
            alert("Event Submitted Successfully!!");
        }
    };

  return (
    <main className='flex min-h-screen flex-col items-center p-24 bg-neutral-100'>
        <h1 className='text-black font-bold text-5xl m-10'>Form</h1>

        
        <form onSubmit={handleSubmit} className='max-w-md mx-auto p-4 bg-white shadow-md rounded-lg' >
            <div className='mb-4'>
                <label htmlFor='eventname' className='block text-gray-700 font-bold mb-2'>
                    Event Name:
                </label>
                <input 
                type='text'
                id="eventname"
                value={eventname}
                className='w-full px-3 py-2 border text-black round-lg focus:outline-none focus:border-blue-700 bg-white'
                onChange={(e)=> setEventname(e.target.value)}
                
                />
      </div>
      {/* <div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">Free</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" />
  </label>
</div>
<div className="form-control">
  <label className="label cursor-pointer">
    <span className="label-text">paid</span> 
    <input type="checkbox"  className="checkbox checkbox-primary" />
  </label>
</div> */}
      
      <div className='mb-4'>
                <label  htmlFor='date'  className='block text-gray-700 font-bold mb-2'>
                    Date:
                </label>
                <input 
                type='string'
                id="date"
                value={date}
                className='w-full px-3 py-2 border text-black round-lg focus:outline-none focus:border-blue-700 bg-white'
                placeholder='dd/mm/yy'
                onChange={(e)=> setDate(e.target.value)}
                
                />
      </div>
      <div className='mb-4'>
                <label  htmlFor='description'  className='block text-gray-700 font-bold mb-2'>
                    Description:
                </label>
                <textarea 
                
                id="description"
                value={description}
                className='w-full px-3 py-2 border text-black round-lg focus:outline-none focus:border-blue-700 bg-white'
                
                onChange={(e)=>setDescription(e.target.value)}
                />
      </div>
      <div className='mb-4'>
                <label  htmlFor='eventlink'  className='block text-gray-700 font-bold mb-2'>
                    Event regiter Link:
                </label>
                <input 
                
                id="eventlink"
                value={eventlink}
                className='w-full px-3 py-2 border text-black round-lg focus:outline-none focus:border-blue-700 bg-white'
                
                onChange={(e)=>seteventlink(e.target.value)}
                />
      </div>
      <div className='text-center'>
            <button
            
            onClick={(e)=>setNameusers(user.displayName)}
            type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg' >
                Submit
            </button>
      </div>
      
    </form>
   
        

    </main>
  )
}

export default Page