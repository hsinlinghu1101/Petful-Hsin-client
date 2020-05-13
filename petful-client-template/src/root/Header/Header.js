import React from 'react';
import {Link} from 'react-router-dom';
import './Header.css';


export default function  Header (){ 
  return (
    <header>
     
      <Link to='/Home' id='Header-link'><h1 className='title'>Petful</h1></Link>
      
    </header>
  )
}

