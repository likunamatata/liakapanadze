import React from 'react';
import '../styles/Header.css'
import HeaderTop from './headers/HeaderTop'
import HeaderBottom from './headers/HeaderBottom'


function Header () {
 
    return (
      <div className="Header">
        <HeaderTop/>
        <HeaderBottom/>
      </div>
    );


}

export default Header;
