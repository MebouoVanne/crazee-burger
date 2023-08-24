import React from 'react'
import { Link } from 'react-router-dom'
import { styled } from 'styled-components'
import NavbarRightSide from './NavbarRightSide'
import Logo from '../../reusable-ui/Logo'
import { theme } from '../../../theme'
import { refreschPage } from '../../../utils/windows'

function Navbar({ username }) {
    return (

        <NavbarStyled >
            <Logo className={"logo-order-page"} onClick={() => refreschPage()} />
            {/* <div className='left-side'>lEFT</div> */}
            <NavbarRightSide username={username} />
        </NavbarStyled>

    )
}

export default Navbar

const NavbarStyled = styled.nav`
    background:${theme.colors.white};
    height: 10vh;
    display: flex;
    justify-content:space-between;
    padding: 0 20px;

    border-top-left-radius: ${theme.borderRadius.extraRound};
    border-top-right-radius: ${theme.borderRadius.extraRound};

    .logo-order-page {
     cursor: pointer;
    }

    /* .left-side {
        background:pink;
    } */
`