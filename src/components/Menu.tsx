import styled from 'styled-components'
import React from 'react'
const Container = styled.div`
position: sticky;
margin-top: 65px;
top: 0px;
z-index: 1;
padding-left: 10px;
`

const Nav = styled.nav`
top: 1px;
z-index: 1;
display: flex;
width: 100%;
overflow-x: auto;
position: sticky;
border-top: 1px solid rgb(220, 220, 220);
border-bottom: 1px solid rgb(220, 220, 220);
background-color: white;
scrollbar-width: none;

a {
box-sizing: border-box;
margin: 2px 5px 4px;
padding: 4px 16px;
color: rgb(166, 166, 166);
font-size: 18px;
font-family: iFood RC Textos;
line-height: 24px;
text-align: center;
text-overflow: ellipsis;
border: medium none;
outline: currentcolor none medium;
cursor: pointer;
background-color: rgb(255, 255, 255);
white-space: nowrap;
text-decoration: none;
}
`

const Menu = () => {
  return (
    <Container>
        <Nav id="nav">
            <a href="#lanches">Lanches</a>
            <a href="#combos" >Combos</a>
            <a href="#porcoes" >Porções</a>
            <a href="#sucos-da-poupa-agua" >Sucos da Poupa Àgua</a>
            <a href="#" >Sucos da Poupa Leite</a>
            <a href="#" >Refrigerante</a>
        </Nav>
        <div></div>
    </Container>
  )
}

export default Menu
