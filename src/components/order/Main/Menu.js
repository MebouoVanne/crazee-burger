import React from 'react'
import { styled } from 'styled-components';
import { fakeMenu2 } from '../../../fakeData/fakeMenu';
import { useState } from 'react';
import { theme } from '../../../theme';
import Card from '../../reusable-ui/Card';
import { formatPrice } from '../../../utils/maths';

export default function Menu() {

    const [menu, setMenu] = useState(fakeMenu2)
    return (
        <MenuStyled>
            {menu.map((produit) => {
                return <Card key={produit.id} title={produit.title} leftDescription={formatPrice(produit.price)} imageSource={produit.imageSource} />
            })}
        </MenuStyled>
    )
}

const MenuStyled = styled.div`
background: ${theme.colors.background_white};
display: grid;
grid-template-columns: repeat(4,1fr);
grid-row-gap:60px;
padding:50px 50px 150px;
justify-items: center;
box-shadow: 0px 8px 20px 8px rgba(0,0,0,0.2) inset;


`;