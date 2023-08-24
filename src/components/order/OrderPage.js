import React, { Fragment } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from "styled-components";
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { theme } from '../../theme';

function OrderPage() {

 const {username}= useParams();
 console.log("username",username)

    return (
        <OrderPageStyle>
            <div className='container'>
                <Navbar username = {username}/>
               
                <Main/>
            
            </div>
             
        </OrderPageStyle>

    )
}

export default OrderPage

const OrderPageStyle = styled.div ` 
background:orange;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
border-radius: ${theme.borderRadius.extraRound};

.container {
    background:red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction:column;
}

`