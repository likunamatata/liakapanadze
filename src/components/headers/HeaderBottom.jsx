import React from 'react';
import { NavLink } from 'react-router-dom'


function HeaderBottom () {
 
    return (
      <div className="HeaderBottom">
        <NavLink className="TopNavLink" to='/'>About</NavLink>
        <NavLink className="TopNavLink" to='/reblog'>(Re)Blog</NavLink>
        <NavLink className="TopNavLink" to='/playlists'>Playlists</NavLink>
        <NavLink className="TopNavLink" to='/contact'>Contact</NavLink>
      </div>
    );


}

export default HeaderBottom;
