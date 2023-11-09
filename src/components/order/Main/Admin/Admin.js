import React, { useState } from 'react'
import styled from "styled-components";
import { theme } from '../../../../theme';
import AdminPanel from './AdminPanel';
import AdminTabs from './AdminTabs';

export default function Admin() {

    const [isCollapsed, setIsCollapsed] = useState(false)
  return (
    <AdminStyle >
        <AdminTabs isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed}/>
        {isCollapsed && <AdminPanel/>  } 
    </AdminStyle>
  )
}

const AdminStyle = styled.div`
    position: absolute;
    bottom:0;
    left: 0;
    right: 0;

`;