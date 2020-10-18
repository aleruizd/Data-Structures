import React,{ Component } from 'react';
import MenuButton from './MenuButton'

function Header(props){
    return(
        <header>
            <h1 className="logo">Data<span>Structures</span></h1>
            <MenuButton toggleMenu={props.toggleMenu}/>
        </header>
    )
}

export default Header;