import React from 'react'
import styled from "styled-components";
import { theme } from '../../../../theme';
import AdminPanel from './AdminPanel';
import AdminTabs from './AdminTabs';

export default function Admin() {
  return (
    <AdminStyle >
        <AdminTabs/>
        <AdminPanel/>   
    </AdminStyle>
  )
}

const AdminStyle = styled.div`
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;

`;