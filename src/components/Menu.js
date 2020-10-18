import React, { Component } from 'react';

class Menu extends Component{

    constructor(){
        super();    
        
        this.state = {
            menuClass: 'menu'
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.changeStructure = this.changeStructure.bind(this);
    }

    toggleMenu(open){
        let menuClass = 'menu'
        
        if(open) menuClass += ' open'

        this.setState({
            menuClass
        })
    }

    changeStructure(event){
        this.props.changeStructure(event.target.name)
    }

    componentDidUpdate(prevProps){
        if(prevProps.menuOpen != this.props.menuOpen){
            this.toggleMenu(this.props.menuOpen)
        }
    }

    render(){
        return(
            <div className={this.state.menuClass}>
                <a name="stack" onClick={this.changeStructure}>Stack</a>
                <a name="queue" onClick={this.changeStructure}>Queue</a>
            </div>
        )
    }

}

export default Menu;