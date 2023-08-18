import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'


export default function LoginForm() {

    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState("")
    const handleSubmit = (event) => {
        event.preventDefault();
        // alert(`bonjour ${inputValue}`)
        setInputValue("")
        navigate(`/orderpage/${inputValue}`)
    }

    const handleChange = (event) => {
        setInputValue(event.target.value)

    }

    return (


        <form action='submit' onSubmit={handleSubmit}>
            <h1> Bienvenu chez nous </h1>
            <br />
            <h2> Connectez vous ! </h2>
            <input type='text' value={inputValue} required onChange={handleChange} placeholder='Entrer votre prènom ...' />
            <button >Accéder à votre espace </button>
        </form>
    )
}
