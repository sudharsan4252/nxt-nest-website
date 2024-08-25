"use client"
import axios from 'axios';
import React, { useEffect } from 'react';

const Help: React.FC = () => {
  const postUsers = async()=>{
    fetch("http://localhost:3004/users",{
      method:"POST",
      headers:{
        "Content-Type":"application/json",
      },
      body:JSON.stringify({
        title: "dfdsf",
        description: "stdfdsfdfring",
        body: "dfasdfds",
        published: false
      })
    })
  }
  return (
    <div>
      <main>I am from the help page</main>
      <button className='block bg-slate-400 '>hello</button>
      <button onSubmit={postUsers}>click me</button>
    </div>
  );
};

export default Help;
