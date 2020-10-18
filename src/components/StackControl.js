import React, { Component } from 'react';

class StackControl extends Component{
    constructor(props){
        super(props);
        this.state = {
            pushValue: ''
        }
        this.handlePush = this.handlePush.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event){
        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    handlePush(){
        if(this.state.pushValue.trim() != ''){
            this.props.handlePush(this.state.pushValue);
            this.setState({
                pushValue: ''
            })
        }
    }

    render(){
        return(
            <div className="stack-control">
                <div className="push-control">
                    <input type="text" name="pushValue" value={this.state.pushValue} onChange={this.handleInputChange}/>
                    <button onClick={this.handlePush}>Push</button>
                </div>
                <button onClick={this.props.handlePop}>Pop</button>
                <button onClick={this.props.handleEmpty}>Empty</button>
            </div>
        )
    }
}

export default StackControl;