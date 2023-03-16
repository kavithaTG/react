import React from 'react'
// import "./Color.css"
// import json from "./Matri.json"
import {Component} from 'react'
// import Matrimoni from './Matrimoni'
// import Nav from "./Nav"
import "./Color.css"

class App extends Component{
  constructor(){
    super()
    this.state={
      count:0
    }
  }
    handleIncrement= ()=>{
      
      this.setState({count:this.state.count+1})
    }
    handleDecrement= ()=>{
      this.setState({count:this.state.count-1})
      

        }
      
    
    handleReset= ()=>{
      this.setState({count:this.state.count=0})
    }
  

  render()
  {
  return(
    <>
    <center>
    <div className="cal">
      <div>
      <h1>{this.state.count}</h1>
      </div>
  
    <button onClick={this.handleIncrement}>+</button>
    <button onClick={this.handleDecrement}>-</button>
  <button className='btn' onClick={this.handleReset}>Reset</button>
  </div>
  </center>
    
  
    
    
    {/* <Nav />
      </div><Matrimoni data={this.state.json}/> */}
    </>
  )
  }
}


 export default App;