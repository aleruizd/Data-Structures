import React, { Component } from 'react';

class QueueControl extends Component{

    constructor(props){
        super(props);
        
        this.state = {
            enqueueValue: ''
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleEnqueue = this.handleEnqueue.bind(this);
    }

    handleInputChange(event){
        let value = event.target.value;
        let name = event.target.name;

        this.setState({
            [name]: value
        })
    }

    handleEnqueue(){
        if(this.state.enqueueValue.trim() != ''){
            this.props.handleEnqueue(this.state.enqueueValue);
            this.setState({
                enqueueValue: ''
            })
        }
    }

    render(){
        return(
            <div className="queue-control">
                <div className="push-control">
                    <input type="text" name="enqueueValue" value={this.state.enqueueValue} onChange={this.handleInputChange}/>
                    <button onClick={this.handleEnqueue}>Enqueue</button>
                </div>
                <button onClick={this.props.handleDequeueAnimation}>Dequeue</button>
                <button onClick={this.props.handleEmpty}>Empty</button>
            </div>
        )
    }

}

export default QueueControl;