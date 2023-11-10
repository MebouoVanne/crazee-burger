import React from 'react'
import styled from 'styled-components';
import { theme } from '../../../../theme';
import { useContext } from 'react';
import OrderContext from '../../../../context/OrderContext';

export default function AdminPanel() {
    const {
        isCollapsed, 
        setIsCollapsed,
        isAddSelected, 
        setIsAddSelected,
        isEditSelected,
        setIsEditSelected
        
        } = useContext(OrderContext)
  return (
    <AdminPanelStyled>
          { isAddSelected && "Ajouter un produit"}
          { isEditSelected && "Modifier un produit"}
    </AdminPanelStyled>
  )
}
const AdminPanelStyled = styled.div`
  border: 2px solid red;
  height: 250px;
  background: ${theme.colors.white};
  border: 1px solid ${theme.colors.greyLight};
  box-shadow: ${theme.shadows.subtleF07};
`;