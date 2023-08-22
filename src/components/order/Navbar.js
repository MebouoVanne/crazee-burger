import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'

function Navbar({username}) {
  return (
    
         <nav className='navbar'>
            Navbar
                <h1>Bonjour {username} </h1>
           <Link to="/">
              <button > Deconnexion </button>
           </Link>
                </nav>
 
  )
}

export default Navbar

const NavbarStyled = styled.nav `
background:blue;
    height: 10vh;
`