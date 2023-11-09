"use client";
import Card from "./components/Card";
import { db } from "./firebase";
import { collection, getDocs } from 'firebase/firestore';
import React, {useState,useEffect} from "react";

async function fetchDataFromFireStore() {
  const querySnapshot =await getDocs(collection(db,"messages"))

  const data:any=[];
  querySnapshot.forEach((doc)=>{
    data.push({id: doc.id, ...doc.data()})
  });
  
  return data;
}


export default function Home() {

  const [eventData,setEventData]= useState([]);

  async function fetchData() {
    const data = await fetchDataFromFireStore();
    setEventData(data);
    //console.log(data);
    console.log(eventData);
  }

useEffect(() => {

  (async() => {
      await fetchData()
  }) ();

  return  () => {
      setEventData([]);
    }
  }, [fetchData]);
  return (
    <main className=" bg-white">
     
      <div className="min-h-screen min-w-full  bg-neutral-100 container py-20 px-8">
        <h1 className="text-5xl font-bold text-center text-black pb-10">Events</h1>
        <div className="grid lg:grid-cols-4 gap-16">
         
        </div>

     
      </div>



     
    </main>
  )
}
