import React from 'react'
import styled from "styled-components";
import { theme } from '../../../theme';
import Menu from './Menu';
import Admin from './Admin/Admin';

export default function Main() {
  return (
    <MainStyled>
       <div className='basket'>basket</div>
       <div className='menu-and-admin'>
       <Menu/>
       <Admin/>
       </div>

    </MainStyled>
  )
}

const MainStyled = styled.div `
border: 4px solid green;
background:${theme.colors.background_white};
height: calc((95vh)-(10vh));
overflow-y: scroll;

border-bottom-left-radius: ${theme.borderRadius.extraRound};
border-bottom-right-radius: ${theme.borderRadius.extraRound};
box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;
display: grid;
grid-template-columns:25% 1fr ;

/* 
.basket {
  background: pink;
} */

.menu-and-admin{
  position: relative;
  overflow-y: hidden;
  display:grid;
  border-bottom-left-radius: ${theme.borderRadius.extraRound};
  border-bottom-right-radius: ${theme.borderRadius.extraRound};

}

`
