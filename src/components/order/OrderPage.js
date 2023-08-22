import React, { Fragment } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from "styled-components";
import Navbar from './Navbar';
import Main from './Main';

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
qlign-items: center;

.container {
    background:red;
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction:column;
}



`