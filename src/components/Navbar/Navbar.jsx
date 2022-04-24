import React from 'react';
import './Navbar.css'



const Navbar = () => {
    return  <nav className='nav'>
    <div className='item'>
      <a href='/Profile'>Profile</a>
    </div>

    <div className='item'>
      <a href='/Dialogs'>Message</a>
    </div>

    <div className='item'>
      News
    </div>

    <div className='item'>
      Music
    </div>

    <div className='item'> 
      Setings
    </div>

  </nav>
} 

export default Navbar;