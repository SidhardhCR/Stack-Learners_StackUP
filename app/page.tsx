"use client";
import Link from "next/link";
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import InputGroupText from "react-bootstrap/esm/InputGroupText";

import Hero from "./components/Hero";
import ScrollToTop from "react-scroll-to-top";


async function FetchDataFromFireStore() {
  const querySnapshot = await getDocs(collection(db, "messages"));

  const data: Array<any> = [];

  for (let i = 0; i < querySnapshot.docs.length; i++) {
    data.push({
      id: querySnapshot.docs[i].id,
      ...querySnapshot.docs[i].data(),
    });
  }

  return data;
}

export default function Home() {
  const [search , setSearch] = useState('');
  const [eventData, setEventData] = useState<Array<any> | null>(null);

  useEffect(() => {
    async function FetchData() {
      const data = await FetchDataFromFireStore();
      setEventData(data);
    }
    (async () => {
      await FetchData();
    })();
  }, []);

  const slides =[
    " https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
   " https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
   "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
 ]
  return (
    
    <main className=" bg-white bg-gradient-to-t from-black via-purple-950 to-black ">
      
      <ScrollToTop color="black" smooth />
      
      <Hero heading='Find Your Tech Events' message="An investment in knowledge pays the best interest. " />
      <div id="event" className="min-h-screen min-w-full   container py-20 px-8 ">
        
     
        <h1 className="text-5xl font-bold text-center text-white pb-10">
          Events
        </h1>
        <div className="pb-7 flex justify-center w-full">
        <Form >
          <InputGroupText className="my-3">
             <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder="Search Events" className="bg-white text-black border border-info rounded-circle  " size="lg" />
          </InputGroupText>
        </Form>
        </div>
        <div className="grid lg:grid-cols-4 text-black gap-16">
          {eventData &&
            eventData.filter((data)=>{return search.toLowerCase() === '' ? data : data.eventname.toLowerCase().includes(search.toLowerCase())}).map((data) => {
              return <div key={data.id}><div className="card card-compact lg:w-80 h-80  bg-white shadow-md rounded-lg' shadow-xl">
              <figure><img src="/card.jpg" alt="Shoes" /></figure>
              <div className="card-body text-black">
                <span className='text-slate-400'>Free</span>
                <h2 className="card-title">{data.eventname}</h2>
                <p className='text-xs'>{data.date}</p>
                <p>{data.description}</p>
                <div className="card-actions justify-start">
                 <Link href={`${data.eventlink}`} > <button className="bg-stone-950 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded-full" >Register</button></Link>
                </div>
              </div>
            </div></div>
            })}
        </div>
      </div>
      
    </main>
  
  
  
  );
}