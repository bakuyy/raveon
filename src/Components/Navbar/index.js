import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
  return (
    <>
        <Nav>
            <NavLink to="/home">
              <img src={require('../../images/logo.png')}
              width = '140'
              alt = 'logo'/>
            </NavLink>
            <Bars />
            <NavMenu>
            <NavLink to= "/Liked">
            Liked
            </NavLink>
            <NavBtn>
                <NavBtnLink to="/start-swiping">Start Swiping</NavBtnLink>
                    </NavBtn>    
            </NavMenu>
        </Nav>
    </>
  )
}

export default Navbar