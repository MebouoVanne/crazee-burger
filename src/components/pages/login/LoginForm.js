import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components';
import { IoChevronForward } from 'react-icons/io5'
import { BsPersonCircle } from 'react-icons/bs'
import TextInput from '../../reusable-ui/TextInput';
import PrimaryButton from '../../reusable-ui/PrimaryButton';
import { theme } from '../../../theme';


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
            <TextInput 
            value={inputValue}
            onChange={handleChange}
            Icon= {<BsPersonCircle className='icon' />}
            placeholder={'Entrer votre prènom ...' }
            required

            /> 
            <PrimaryButton
            label={"Accéder à votre espace"}
            Icon={<IoChevronForward className='icon'/  >}
            />
        </LoginFormStyled>
    )
}

const LoginFormStyled  = styled.form`
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0px auto;
  padding: 40px ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.round};
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



`;