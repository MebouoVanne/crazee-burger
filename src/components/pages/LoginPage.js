import React from 'react'
import { useState } from 'react'

function LoginPage() {

    const [inputValue, setInputValue] = useState("")
    const handleSubmit = (event)  => { 
        event.preventDefault();
        alert(`bonjour ${inputValue}`)
        setInputValue("")
     }

     const handleChange = (event) => { 
        setInputValue(event.target.value)
        
      }
  return (
    <div>
      <h1> Bienvenu chez nous </h1>
      <h2> Connectez vous</h2>
      <form action='submit' onSubmit={handleSubmit}>
        <input type='text' value={inputValue} required onChange={handleChange} placeholder='Entrer votre prènom ...'/>
        <button>Accéder à votre espace </button>
      </form>
    
    </div>
  )
}

export default LoginPage