import React, { Fragment } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function OrderPage(props) {

 const {username}= useParams();
 console.log("username",username)

    return (
        <Fragment>
            <h1>Bonjour {username} </h1>
           <Link to="/">
              <button > Deconnexion </button>
           </Link> 
        </Fragment>

    )
}

export default OrderPage