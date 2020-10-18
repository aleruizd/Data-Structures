import React from 'react';

function MenuButton(props){
    return(
        <div className="menu-button">
            <button onClick={props.toggleMenu}>
                <i className="fas fa-bars"></i>
            </button>
        </div>
    )
}

export default MenuButton