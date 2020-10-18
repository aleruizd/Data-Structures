import React, { Component } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import StackSimulator from './components/StackSimulator';
import QueueSimulator from './components/QueueSimulator';

class App extends Component {

    constructor(){
        super();

        this.state = {
            menuOpen: false,
            structureElement: <StackSimulator/>
        }

        this.toggleMenu = this.toggleMenu.bind(this);
        this.changeStructure = this.changeStructure.bind(this)
    }

    toggleMenu(){
        this.setState({
            menuOpen: !this.state.menuOpen
        })
    }

    changeStructure(structure){
        let structureElement;

        switch(structure){
            case 'stack': structureElement = <StackSimulator/>
                        break;
            case 'queue': structureElement = <QueueSimulator/>
                        break;
        }
        
        this.setState({
            structureElement,
            menuOpen: false
        })
    }

    render(){
        return(
            <div className="app">
                <Header toggleMenu={this.toggleMenu}/>
                <Menu menuOpen={this.state.menuOpen} changeStructure={this.changeStructure}/>
                {this.state.structureElement}
            </div>
        )
    }
}

export default App;


