import React from 'react';
const Nav=(props)=>{
    return(
        <>
        {/* <img src={props.data} /> */}
        {/* <img src={props.data}/> */}
        <h1 style={{color:"yellow",backgroundColor:"black"}}>{props.data.username} {props.data.password}</h1>
        </>
    )
}
export default Nav