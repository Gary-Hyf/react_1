import React from 'react';
const Welcome=(props)=>{
    return(
        <div>
        {props.isTeacher&&<h1>teacher:{props.name},count={props.count}</h1>}
        {!props.isTeacher&&<h1>student:{props.name},count={props.count}</h1>}
        </div>
    )
}
export default Welcome