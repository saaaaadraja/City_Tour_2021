import React from 'react';
import logo from './images/logo.png'
import './data.css'
export const NavBar=()=>{
    return (
        <section className='navbar'>
        <img src={logo} alt="Logo"/>
        <ul>
            <li>
            <a href="/">Home</a>
            </li>
            <li>
                <a href="/about">About</a>
            </li>
            <li>
              <a href="/tour">Tour</a>
            </li>
            </ul>
        </section>
    );
}
