import React, { Component } from 'react';
import Node from './Node';
import Pointer from './Pointer';

class Stack extends Component{
    constructor(props){
        super(props);
        this.state = {
            nodeListItems: [],
            containerClass: 'container'
        }
        this.updateNodeList = this.updateNodeList.bind(this);
    }

    updateNodeList(){
        let nodeList = this.props.nodeList;
        let nodeListItems = nodeList.map((node, index) => {
            return(
                <Node key={index} nodeValue={node.pushValue} mounted={node.mounted}/>
            )
        })

        nodeListItems = nodeListItems.reverse();

        this.setState({
            nodeListItems
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.nodeList !== this.props.nodeList){
            this.updateNodeList();
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
            <div className="stack">
                <div className={this.state.containerClass}>
                    <Pointer text="Top"/>
                    <div className="node-list">   
                        {this.state.nodeListItems}
                        <span className="null-node">Null</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Stack;
