import React, { Fragment } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import styled from "styled-components";

function OrderPage() {

 const {username}= useParams();
 console.log("username",username)

    return (
        <OrderPageStyle>
            navbar
            <div className='container'>
                <div className='navbar'>
                <h1>Bonjour {username} </h1>
           <Link to="/">
              <button > Deconnexion </button>
           </Link>
                </div>
            
            </div>
             <div className='main'> Main </div>
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

.navbar {
    background:blue;
    height: 10vh;
}
.main {
    background:green;
    /* height:(95vh - 10vh);*/
    flex:1;

}
`