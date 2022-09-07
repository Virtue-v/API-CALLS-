import React from 'react'
import {useState, useEffect} from "react"
import axios from "axios"

 function Anxios() {
    const [users, setUsers]= useState ([])

    useEffect(() => {
        axios.get ("https://jsonplaceholder.typicode.com/photos").then((response)=>{
            setUsers (response.data)
            console.log(response.data)
        })

    })

  return (
    <div>
<h1>PHOTOS</h1>

{users.map((item,index)=>{
                return(

                    <div key={item.id}>
                            <h2>Id: {item.id}</h2>
                            <h2>Title:{item.title}</h2>
                            <h2>Thumbnailurl:{item.thumbnailUrl}</h2>
                            <h2>Url:{item.url}</h2>
                            <hr/>
                        </div>


);

})}
    </div>
  )
}

export default Anxios