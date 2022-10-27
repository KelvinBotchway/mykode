import React, { Component } from 'react';
import "../header.css"
function Header(){
    return(
        <div className='main-header'>
            <ul>
                <li>Home</li>
                <li>Counter</li>
                <li>About</li>
            </ul>
        </div>
    )
}

export default Header;