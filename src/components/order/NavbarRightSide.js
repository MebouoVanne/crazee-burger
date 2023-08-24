import React from 'react'
import styled from "styled-components";
import Profile from './profile';

export default function NavbarRightSide({username}) {
  return (
    <NavbarRightSideStyle >
        {/* <div className='admin-button'>Admoin Button </div> */}
        
        <Profile username={username}/>    
    </NavbarRightSideStyle>
  )
}

const NavbarRightSideStyle = styled.div`
display: flex;
align-items: center;
padding-right: 50px;

  /* .admin-button {
    background: lightblue;
  } */
  .profile {
    background: yellow;
  }
`