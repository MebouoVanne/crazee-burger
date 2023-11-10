import React, { useContext } from 'react'
import styled from 'styled-components';
import Tabs from '../../../reusable-ui/Tabs';
import {FiChevronDown,FiChevronUp} from "react-icons/fi"
import {AiOutlinePlus} from "react-icons/ai"
import {MdModeEditOutline} from "react-icons/md"
import { theme } from '../../../../theme';
import OrderContext from '../../../../context/OrderContext';

export default function AdminTabs() {

    const handleClick = () =>{
        setIsCollapsed(!isCollapsed)
    }

    const {
    isCollapsed, 
    setIsCollapsed,
    isAddSelected, 
    setIsAddSelected,
    isEditSelected,
    setIsEditSelected
    
    } = useContext(OrderContext)

    const selectAddTab = () =>{
        setIsCollapsed(false)
        setIsAddSelected(true)
        setIsEditSelected(false)
    }

    const selectEditTab = () =>{
        setIsCollapsed(false)
        setIsEditSelected(true)
        setIsAddSelected(false)

    }

    const selectTab = (tabSelected) =>{

        setIsCollapsed(false)
        if(tabSelected === "add"){
            setIsAddSelected(true)
            setIsEditSelected(false) 
        }
        if(tabSelected === "edit"){
            setIsEditSelected(true) 
            setIsAddSelected(false)
            
        }

    }
    const tabsConfig =[
    {
        label:"",
        Icon:isCollapsed ? <FiChevronUp/> : <FiChevronDown/>,
        onClick:handleClick,
        className:isCollapsed ? "is-active" : ""
    },
    {
        label:"Ajouter un produit",
        Icon:<AiOutlinePlus/>,
        onClick: ()=>selectTab("add"),
        className:isAddSelected ? "is-active" : ""
    },
    {
        label:"Modifier un produit",
        Icon:<MdModeEditOutline/>,
        onClick: ()=>selectTab("edit"),
        className:isEditSelected ? "is-active" : ""
    }
]
  return (
    <AdminTabsStyled>
        {/* <Tabs 
         label=""
         Icon={isCollapsed ? <FiChevronUp/> : <FiChevronDown/>}
         onClick={handleClick}
         className={isCollapsed ? "is-active" : ""}
         />
         <Tabs 
         label="Ajouter un produit"
         Icon={<AiOutlinePlus/>}
         onClick={()=>selectTab("add")}
         className={isAddSelected ? "is-active" : ""}
         />
          <Tabs 
         label="Modifier  un produit"
         Icon={<MdModeEditOutline/>}
         onClick={()=>selectTab("edit")}
         className={isEditSelected ? "is-active" : ""}
         /> */}

        { tabsConfig.map((tab) => {
            return(
         <Tabs label={tab.label} Icon={tab.Icon}  onClick={tab.onClick} className={tab.className}/>

            )
            
         })}
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


