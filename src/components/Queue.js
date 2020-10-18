import React, { Component } from 'react';
import Node from './Node';
import Pointer from './Pointer'

class Queue extends Component{

    constructor(props){
        super(props);

        this.state = {
            nodeListItems: [],
            containerClass: 'container'
        }

        this.updateNodeList = this.updateNodeList.bind(this);
        this.handleNodeUnmount = this.handleNodeUnmount.bind(this);
    }    

    handleNodeUnmount(){
        this.props.handleDequeue();
    }

    updateNodeList(){
        let nodeList = this.props.nodeList;
        let nodeListItems = nodeList.map((node) => {
            return(
                <Node 
                    key={node.index} 
                    nodeValue={node.enqueueValue} 
                    mounted={node.mounted} 
                    handleNodeUnmount={this.handleNodeUnmount}
                />
            )
        })

        nodeListItems = nodeListItems.reverse();

        this.setState({
            nodeListItems
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.nodeList !== this.props.nodeList){
            this.updateNodeList()
        }
        if(prevProps.stackEmpty != this.props.stackEmpty){
            if(!this.props.stackEmpty){
                this.setState({
                    containerClass: this.state.containerClass + ' container-no-empty'
                })
            }else{
                this.setState({
                    containerClass: 'container'
                })
            }
        }
    }

    render(){
        return(
            <div className="queue">
                <div className={this.state.containerClass}>
                    <Pointer text="Back"/>
                    <div className="node-list">   
                        {this.state.nodeListItems}
                        <span className="null-node">Null</span>
                    </div>
                    <Pointer text="Front"/>
                </div>
            </div>
        )
    }
}

export default Queue;