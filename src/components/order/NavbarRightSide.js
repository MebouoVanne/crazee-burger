import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyle >
                right
            <h1>Bonjour {username} </h1>
            <Link to="/">
                <button > Deconnexion </button>
            </Link>
    </NavbarRightSideStyle>
  )
}

const NavbarRightSideStyle = styled.div`
background:purple;
`