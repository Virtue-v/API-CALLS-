import React from 'react'
import {useState, useEffect} from "react"

 function Secondapi() {
    const [users, setUsers]= useState ([])

    useEffect(() => {
        fetch ("https://jsonplaceholder.typicode.com/users").then((response)=>{response.json().then((data)=>{
            setUsers (data)
            console.log(data)
        })})

    },[])



  return (
    <div>
      <h1>USER API</h1>

        {users.map((item,index)=>{
                return(

                    <div key={item.id}>
                            <h2>Name:{item.name}</h2>
                            <h2>email:{item.email}</h2>
                            <h2>phone:{item.phone}</h2>
                            <h2>website:{item.website}</h2>
                           
                            <hr/>
                        </div>


);

})}
    </div>

  )
}

export default Secondapi