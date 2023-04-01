import React from 'react'

import {Component} from 'react'
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

//  export default App
// import React from 'react'
// import {useRef} from 'react'

// const App= () => {
//   let h1Ref=useRef()
//   let handle=()=>{
//     h1Ref.current.style.color="red"
//   }
//   return (
//     <div>
//       <h1 ref={h1Ref}>Hello!!!!Hero</h1>
//       <button onClick={handle}>change</button>
    
//     </div>
//   )
// }

// export default App
// import React from 'react'
// import { useState
//  } from 'react';

// const App=()=>{
//   let [password,setPassword]= useState(true);

//   let handle=()=>{
//     if(password==true)
//     {
//       setPassword(false)
//     }
//     else{
//       setPassword(true)
//     }
//   }
//   return(
//           <>
//          <input type={password?"text":"password"}   onClick={handle}/>
//           </>
//   )
// } 
// export default App
// import React,{useRef} from 'react'

// const App=()=>{
//     let h1Ref=useRef()
//    let [text,setText]=React.useState("wellcome")
//    let [user,setUser]= React.useState(true)
//    let handle=()=>{
//     if(user==true)
//     {
     
//         setUser(!true)
//         setText("hai")
//         h1Ref.current.style.color="red"
//         h1Ref.current.style.backgroundColor="yellow"

        
//     }
//     else{
       
//         setUser(!false)
//         setText("hello")
//         h1Ref.current.style.color="blue"
//         h1Ref.current.style.backgroundColor="yellow"
//     }
//    }
//     return(
//     <>
//    <h1 ref={h1Ref}>{text}</h1>
//     <button style={{backgroundColor:"red"}} onClick={handle}>{
//         user?"click":"ok"
//     }</button>
//     </>
//     )
// }
// // export default App
// import React from "react"
// import "./Color.css"
// // import {toastContainer,toast} from "react-toastify"
// // import 'react-toastify/dist/reactToastify.css'
// const App=()=>{
//     let handlesubmit=()=>{

//         // toast.sucess("login sucess",{
//         //     position:toast.position.bottom})
//         document.write("login ok")
       
//         }
//         let handlecancel=()=>{
//             // toast.sucess("login fail",{
//             //     position:toast.position.bottom})
//           document.write("login not ok")
//             }
//   return(
//     <>
//     {/* <toastContainer/> */}
//     <div className="maindiv">
//     <form action="">
//       <div className="formdiv">
//         <label htmlFor="username">username</label>
//         <input type="text" name="" placeholder="username" />
//         <br />
//         <br />
//     <label htmlFor="Password">Password</label>
//     <input type="password" placeholder="password"/>
//     </div>
//     <br />
//     <br />
//     <div className="btndiv">
//     <button onClick={handlesubmit}>submit</button>
//     <button onClick={handlecancel}>  cancel</button>
//     </div>
//     </form>
//     </div>
//     </>
//   )
  
// }
// // export default App;
// import React,{useState} from 'react'
// import {useRef} from 'react'
// import Login from "./Login"
// import './Color.css'
//  import {ToastContainer,toast} from "react-toastify"
// import 'react-toastify/dist/ReactToastify.css' 
// const App=()=>{

// let [user,setUser]= useState();
// let [pass,setPass]= useState();
//  let inputRef=useRef()
//   let h1Ref=useRef()
  
// let handle=()=>{
    
//   setUser(inputRef.current.value)
//    setPass(h1Ref.current.value)

//  toast.success("Signin ok",{Position:"toast.position.top-center"})

//   console.log({user:inputRef.current.value,pass:h1Ref.current.value});
  
// }

//   return(
//     <>
//   <ToastContainer/>
//     <div className='appdiv'>
//     <div className='maindiv'>
//       <h1>Signup page</h1>
//       <form action="" onSubmit={(e)=>{
//         e.preventDefault()
//       }}>
//         <label htmlFor="username">username</label>
//         <input  ref={inputRef} type="text" /><br /><br />
//         <label htmlFor="password">password</label>
//         <input ref={h1Ref} type="password" /> <br />
//         <br />
//         <button onClick={handle}>submit</button>
//       </form>
//     </div>
//     <Login data={user} data1={pass}/>
//     </div>
//    </>
//   )
// }
// export default App
// export default App;
// import React from 'react'
// import { useState,useEffect } from 'react'
// const App=()=>{
//     let[count,setcount]=useState(0)
//     useEffect(()=>{
//         document.title=`you clicked ${count}`
//     },[count])
//     return(
//         <div>
//             <h1>{count}</h1>
//             <button onClick={()=>{
//             setcount(count+1)

//             }}>click</button>
//         </div>
//     )
// }
// export default App
// import React from 'react'
// import Course from './Course'
// import Hoc from './Hoc'


// const App = (props) => {
//   return (
//     <>
//     <Course/>
//     <div>{props.data}</div>
//     </>
//   )
// }
// export default Hoc(App)
// import React from 'react'
// import Nav from './Nav'
// import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
// import Login from './Login'
// import Signin from './Signin.jsx'
// import About from './About'
// import Home from './Home'
// const App=()=>{
//   return(
//     <div>           
//     <Router>
//       <Nav/>
//       <Routes>
//         <Route path="/Home" element={<Home/>}/>
//         <Route path="/Login" element={<Login/>}/>
//         <Route path="/Signin" element={<Signin/>}/>
//         <Route path="/About" element={<About/>}/>
//       </Routes>
//       </Router>
//       </div>
//   )
// }
// export default App
// import React,{useState,useEffect} from 'react'

// const App = () => {
  // let [width,setWidth]=useState(window.innerWidth);
  // let[userData,setUserdata]=useState([])
  // useEffect(()=>{
    // window.addEventListener("resize",()=>{
    //   setWidth(window.innerWidth)
  //  })

//   },[])
 
//   return (
//       <>   

//     {/* <div>{width}</div> */}
//     </>
//   )
// }

// export default App
// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App