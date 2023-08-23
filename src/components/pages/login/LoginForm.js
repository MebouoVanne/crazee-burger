import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';
import { BsPersonCircle } from 'react-icons/bs'


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
        <LoginFormStyled action='submit' onSubmit={handleSubmit}>
            <h1> Bienvenu chez nous </h1>
            <hr/>
            <h2> Connectez vous ! </h2>
            <div className='input-with-icon'>
            <BsPersonCircle className='icon'/>
            <input type='text' value={inputValue} required onChange={handleChange} placeholder='Entrer votre prènom ...' />
            </div>
            
            <button >Accéder à votre espace </button>
        </LoginFormStyled>
    )
}

const LoginFormStyled  = styled.form`
  background: green;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: "Amatic SC", cursive;

  hr {
    border: 1.5px solid #f56a2c;
    margin-bottom: 40px;
  }
  h1 {
    color: white;
    margin-bottom: 48px;
  }

  h2 {
    color: #8e8b8b;
    margin: 20px 10px 10px;
    color: white;
    font-size: 36px;
  }

  .input-with-icon{
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding: 18px 24px;
    margin: 18px 0;

    .icon {
        font-size: 15px;
        margin-right: 8px;
        color: #93a2b1;
    }

    input {
        border: none;
        font-size: 15px;
        color:#17161a;

    }

    &::placeholder {
        background: white;
        color: lightgrey;
    }

  }
`;