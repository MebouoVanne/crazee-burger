import React, { useState } from 'react'
import styled from "styled-components";
import { theme } from '../../../../theme';
import AdminPanel from './AdminPanel';
import AdminTabs from './AdminTabs';
import { useContext } from 'react';
import OrderContext from '../../../../context/OrderContext';

export default function Admin() {
    const {
        isCollapsed, 
        
        } = useContext(OrderContext)

  return (
    <AdminStyle >
        <AdminTabs />
        {!isCollapsed && <AdminPanel/>  } 
    </AdminStyle>
  )
}

const AdminStyle = styled.div`
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;

`;