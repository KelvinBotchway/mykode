import React, { Component, useState } from 'react';


function Pokemon (){
    const [num,setNum] = useState()
    return(
        <>
        <h1>You choose {num} value</h1>
        <select name='' id='' value = {num} onChange = {(event)=>{setNum(event.target.value)}}>
            <option value = '1'>1</option>
            <option value = '2'>2</option>
            <option value = '3'>3</option>
            <option value = '4'>4</option>
            <option value = '5'>5</option>

        </select>
        </>
    )
}

export default Pokemon