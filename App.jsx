import React from 'react'

// import {Component} from 'react'
import "./Color.css"

const App=()=>{
  let [count,setCount]=React.useState(0)
  
  
     let handleIncrement=()=>{
        setCount(count+1)

   }
    let handleDecrement=()=>{
    setCount(count>0?count-1:count=0)
   }
  let handleReset=()=>{
    setCount(0)

  }
  return(
    <>
    <h1>{count}</h1>
       <button onClick={handleIncrement}>+</button>
       <button onClick={handleDecrement}>-</button>
       <button onClick={handleReset}>Reset</button>
  
    </>
  )
}
export default App
// const App=()=>{
//   let handle=()=>{
//     toast.success("logged in sucessfull",{position:toast.position.center})
//   }
//   return(
//     <>
//     <toastContainer/>
//     <button onClick={handle}>click</button>

//     </>
//   )
// }
// class App extends Component{
//   constructor(){
//     super()
//     this.state={name:"kavitha"}
//   }
//   componentDidMount()
//   {
//     let btn=document.querySelector("button")
//     btn.addEventListener("click",()=>{
//        this.setState({name:this.state.name="gagana"})
//     })
//   }
//   render(){
//     return(
//     <>
//     <h1>{this.state.name}</h1>
//     <button>click</button>
//     </>
//     )
//   }
// }
// class App extends Component{
//   constructor(){
//     super()
//     this.state={name:"kavitha"}
//   }
//   componentDidMount()
//   {
//     let btn=document.querySelector("button")
//     btn.addEventListener("click",()=>{
//        this.setState({name:this.state.name="gagana"})
//     })
//   }
// class App extends Component{
//   constructor(){
//     super()
//     this.state={name:""}
//   }
//   componentDidMount()
//   {
//     let input=document.querySelector("input")
//     input.addEventListener("keypress",(e)=>{
//        this.setState({name:e.target.value})
//     })
//   }
//   render(){
//     return(
//     <>
//     <h1>{this.state.name}</h1>
//      <input type="text" />
//     </>
//     )
//   }
// }

//  export default App;