import React, { Component } from 'react';

class Pointer extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="pointer">
                <span>{this.props.text}</span>
                <i className="fas fa-long-arrow-alt-down"></i>
            </div>
        )
    }
}

export default Pointer;