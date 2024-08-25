"use client";
import React, { useState } from "react";
const Home: React.FC = () => {
    const [datevalue, Setdate] = useState("2004-02-25");
  return (
    <main className=" flex box-border justify-center items-start mt-24">
      <div className="w-[500px]  h-[350px] border-green-700 border-2 rounded-lg pt-4">
        <form action="submit" className="flex flex-col px-2 items-start gap-1">
          <label htmlFor="fname">First name:</label>
                  <input type="text"  className="outline-0 block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600" placeholder="sudharsan"/>
          <label htmlFor="lname">Last Name:</label>
                <input 
                type="text" 
                className="outline-0 block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                placeholder="P"/>
          <label htmlFor="age">Age</label>
                  <input 
                type="date"
                value={datevalue}
                onChange={(e)=> Setdate(e.target.value)}
                      className={`outline-0 block w-full rounded-md border-0 py-1.5 pl-7 pr-8 ring-1 ring-inset ring-red-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 ${datevalue === "2004-02-25" ? "text-gray-400" : "text-orange-500"}`} />
          <label htmlFor="rollno">Roll No</label>
                  <input 
                  type="text" 
                  className="outline-0 block w-full rounded-md border-0 py-1.5 pl-7 pr-20  ring-1 ring-inset ring-red-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  placeholder="21IT199"  />
                  <button type="submit" className="mt-3  px-4 border-2 p-1 border-red-500 rounded-xl bg-orange-500">submit</button>
        </form>
      </div>
    </main>
  );
};

export default Home;
