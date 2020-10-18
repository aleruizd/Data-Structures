import React, { Component } from 'react';
import QueueControl from './QueueControl';
import Queue from './Queue'

class QueueSimulator extends Component{

    constructor(){
        super();
        
        this.state = {
            nodeList: new Array,
            nodeListEmpty: true,
            contNodes: 0
        }

        this.handleEnqueue = this.handleEnqueue.bind(this);
        this.handleDequeueAnimation = this.handleDequeueAnimation.bind(this);
        this.handleDequeue = this.handleDequeue.bind(this);
        this.handleEmpty = this.handleEmpty.bind(this);
    }

    handleEnqueue(enqueueValue){
        this.setState({
            nodeList: this.state.nodeList.concat([{enqueueValue,index: this.state.contNodes, mounted: true}]),
            nodeListEmpty: false,
            contNodes: this.state.contNodes + 1
        })
    }

    handleDequeue(){
        let newNodeList = this.state.nodeList.slice();
        newNodeList.splice(0,1);
        this.setState({
            nodeList: newNodeList,
        })
    }

    handleDequeueAnimation(){
        let nodeList = this.state.nodeList;

        if(nodeList.length > 0){
            let newNodeList = nodeList.slice();

            newNodeList[0].mounted = false;

            if(newNodeList.length == 1){
                this.setState({
                    nodeListEmpty: true
                })
            }
            
            this.setState({ nodeList: newNodeList });
        }
    }

    handleEmpty(){
        let nodeList = this.state.nodeList;
        let newNodeList = nodeList.slice();

        newNodeList.forEach(node => {
            node.mounted = false
        });

        this.setState({
            nodeList: newNodeList,
            nodeListEmpty: true
        })

        setTimeout(function(){
            this.setState({
                nodeList: []
            })
        }.bind(this),1000);
    }

    render(){
        return(
            <div className="queue-simulator">
                <Queue nodeList={this.state.nodeList} handleDequeue={this.handleDequeue} stackEmpty={this.state.nodeListEmpty}/>
                <QueueControl 
                    handleEnqueue={this.handleEnqueue}
                    handleDequeueAnimation={this.handleDequeueAnimation}
                    handleEmpty={this.handleEmpty}
                />
            </div>
        )
    }

}

export default QueueSimulator;