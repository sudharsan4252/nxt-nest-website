import React from "react";


const contact:React.FC=async ()=>{
    const data = await fetch('http://localhost:3004/users').then((res) =>
        res.json()
        
    )
    
    return(
        <main>
            <h1>I am from the contact page</h1>
          {data.map((item:any)=>(
            <div key={item.id} >   
                  <div >{item.title}</div>
                  <div >{item.description}</div>
                  <div >{item.body}</div>
                  <div >{item.published}</div>
                  <div >{item.createdAt}</div>  
                  <div >{item.updatedAt}</div>
                  <br />
                  <br />
            </div>
            
          ))}
          <h1>helo</h1>
        </main>
    )
}
export default  contact;