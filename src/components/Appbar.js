import React, { useState } from 'react';
import './Appbar.css'
import {NavLink as ReactLink}from 'react-router-dom'

function Example(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className='header'>

     
        <img src="https://foodey-omega.vercel.app/_next/static/image/src/common/assets/image/foodDelivery/logo-dark.eb6098e1a3b2fda73b4ee23d1ce39dba.png" alt="logo" class="logo" width="70px" />

        <nav>
          <ul>
          <li><a href="/">Blog</a></li>
            <li><a href="/recipes">Recipes</a></li>
           
          </ul>
        </nav>
      
    </div>
  );
}

export default Example;

