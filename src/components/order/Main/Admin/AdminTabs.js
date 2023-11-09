import React from 'react'
import styled from 'styled-components';
import Tabs from '../../../reusable-ui/Tabs';
import {FiChevronDown,FiChevronUp} from "react-icons/fi"
import {AiOutlinePlus} from "react-icons/ai"
import { theme } from '../../../../theme';

export default function AdminTabs({isCollapsed,setIsCollapsed}) {

    const handleClick = () =>{
        setIsCollapsed(!isCollapsed)
    }
  return (
    <AdminTabsStyled>
        <Tabs 
         label=""
         Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>}
         onClick={handleClick}
         className={isCollapsed ? "is-active" : ""}
         />
         <Tabs 
         label="ajouter un produit"
         Icon={AiOutlinePlus}
         onClick={handleClick}
         className={isCollapsed ? "is-active" : ""}
         />
    </AdminTabsStyled>
  )
}
const AdminTabsStyled = styled.div`

  /* border:1px solid yellow; */
  display: flex;
  padding: 0 20px;

  .is-active{
    background: ${theme.colors.background_dark};
    border-color:${theme.colors.background_dark} ;
    color: ${theme.colors.white};
  }

  button{
    margin-left: 1px;
  }
`;


