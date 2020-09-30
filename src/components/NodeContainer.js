import React, { Component } from 'react';
import Node from './Node';

class NodeContainer extends Component{
    constructor(props){
        super(props);
        this.state = {
            nodeListItems: []
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
    }

    render(){
        return(
            <div className="node-container">
                <Node nodeValue="Top" topNode='true' mounted={true}/>
                {this.state.nodeListItems}
                <span className="null-node">Null</span>
            </div>
        )
    }
}

export default NodeContainer;
