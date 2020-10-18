import React, { Component } from 'react';
import StackControl from './StackControl';
import Stack from './Stack';

class StackSimulator extends Component{

    constructor(){
        super();
        this.state = {            
            nodeList: new Array,
            nodeListEmpty: true
        }

        this.handlePush = this.handlePush.bind(this);
        this.handlePop = this.handlePop.bind(this);
        this.handleEmpty = this.handleEmpty.bind(this);
    }

    handlePush(pushValue){
        this.setState({
            nodeList: this.state.nodeList.concat([{pushValue, mounted: true}]),
            nodeListEmpty: false
        })
    }

    handlePop(){
        let nodeList = this.state.nodeList;
        
        if(nodeList.length > 0){
            let newNodeList = nodeList.slice();
            
            newNodeList[newNodeList.length-1].mounted = false;


            if(newNodeList.length == 1){
                this.setState({
                    nodeListEmpty: true
                })
            }

            this.setState({ nodeList: newNodeList },() => {
                newNodeList.splice(-1,1);
                this.setState({
                    nodeList: newNodeList
                })
            })
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
            <div className="stack-simulator">
                <Stack nodeList={this.state.nodeList} stackEmpty={this.state.nodeListEmpty}/>
                <StackControl 
                    handlePush={this.handlePush} 
                    handlePop={this.handlePop}
                    handleEmpty={this.handleEmpty}
                />
            </div>
        )
    }
}

export default StackSimulator;