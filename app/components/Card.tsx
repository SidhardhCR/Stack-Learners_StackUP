import React from 'react'

function Card({eventname,description,date}:any) {
  return (
    <div><div className="card card-compact lg:w-80 h-80  bg-white shadow-md rounded-lg' shadow-xl">
    <figure><img src="/bg.jpeg" alt="Shoes" /></figure>
    <div className="card-body text-black">
      <span className='text-slate-400'>Free</span>
      <h2 className="card-title">{eventname}</h2>
      <p className='text-xs'>{date}</p>
      <p>{description}</p>
      <div className="card-actions justify-start">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Buy Now</button>
      </div>
    </div>
  </div></div>
  )
}

export default Card