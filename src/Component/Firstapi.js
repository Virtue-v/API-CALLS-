import React, { Component } from 'react'

 class Firstapi extends Component {
constructor (props) {
    
    super()

    this.state={user: []}

}

componentDidMount (){
    fetch("https://jsonplaceholder.typicode.com/albums").then ((data)=>{data.json().then( 
        (result)=> {
            console.log (result)
            this.setState({user:result})
        }

    )}).catch((err)=>{
        console.log (err)
    })
}
  render() {
    return (
     <div>
       <h1>ALBUM LIST</h1> 

            {this.state.user.map((item,index)=>{
                return(

                    <div key={item.id}>
                            <h2>id{item.id}</h2>
                            <h2>Title{item.title}</h2>
                            <h2>userid{item.userid}</h2>
                            <hr/>
                    </div>

                );

            })}
        
        </div>
      
    )
  }
}
export default Firstapi 