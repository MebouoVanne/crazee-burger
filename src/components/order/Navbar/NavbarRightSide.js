import React, { useContext } from 'react'
import styled from "styled-components";
import Profile from './profile';
import ToggleButton from '../../reusable-ui/ToggleButton';
import ToastAdmin from './ToastAdmin';
import { toast } from 'react-toastify';
import OrderContext from '../../../context/OrderContext';


export default function NavbarRightSide({ username }) {

  const {isModeAdmin,setIsModeAdmin} = useContext(OrderContext)

   const displayToastNotification = () =>{
    if(!isModeAdmin){
      toast.info("Mode admin activé",{
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    setIsModeAdmin(!isModeAdmin)
   }
  return (
    <NavbarRightSideStyle >
      <ToggleButton 
      isChecked={isModeAdmin}
      labelIfChecked='desactiver le mode admin' 
      labelIfUnchecked='activer le mode admin'
      onToggle={displayToastNotification}
      />
      <Profile username={username} />
      <ToastAdmin/>
    </NavbarRightSideStyle>
  )
}

const NavbarRightSideStyle = styled.div`
display: flex;
align-items: center;
padding-right: 50px;

  /* .admin-button {
    background: lightblue;
  } */
  .profile {
    background: yellow;
  }
`