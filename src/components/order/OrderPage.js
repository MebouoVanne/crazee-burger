import React from 'react'
import { useParams } from 'react-router-dom'
import styled from "styled-components";
import Navbar from './Navbar/Navbar';
import Main from './Main/Main';
import { theme } from '../../theme';
import OrderContext from '../../context/OrderContext';
import { useState } from 'react';

function OrderPage() {

const [isModeAdmin, setIsModeAdmin] = useState(true)
const [isCollapsed, setIsCollapsed] = useState(false)
const [isAddSelected, setIsAddSelected] = useState(true)
const [isEditSelected, setIsEditSelected] = useState(false)

 const {username}= useParams();
 console.log("username",username)

 const OrderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed, 
    setIsCollapsed,
    isAddSelected, 
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected
 }

    return (
    
    <OrderContext.Provider value={OrderContextValue}>
       <OrderPageStyle>
            <div className='container'>
                <Navbar username = {username}/>
               
                <Main/>
            
            </div>
             
        </OrderPageStyle>
    </OrderContext.Provider>
        

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