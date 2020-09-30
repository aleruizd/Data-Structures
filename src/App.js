import React, { Component } from 'react';
import Header from './components/Header';
import Control from './components/Control';
import NodeContainer from './components/NodeContainer';

class App extends Component {
    constructor(){
        super();
        this.state = {
            nodeList: new Array
        }

        this.handlePush = this.handlePush.bind(this);
        this.handlePop = this.handlePop.bind(this);
        this.handleEmpty = this.handleEmpty.bind(this);
    }

    handlePush(pushValue){
        this.setState({
            nodeList: this.state.nodeList.concat([{pushValue, mounted: true}])
        })
    }

    handlePop(){
        let nodeList = this.state.nodeList;
        
        if(nodeList.length > 0){
            let newNodeList = nodeList.slice();
            
            
            newNodeList[newNodeList.length-1].mounted = false;

            setTimeout(function(){
                newNodeList.splice(-1,1);
                this.setState({
                    nodeList: newNodeList
                })
            }.bind(this),1000);

            this.setState({
                nodeList: newNodeList
            })
        }
    }

    handleEmpty(){
        let nodeList = this.state.nodeList;
        let newNodeList = nodeList.slice();

        newNodeList.forEach(node => {
            node.mounted = false
        });

        setTimeout(function(){
            this.setState({
                nodeList: []
            })
        }.bind(this),1000);

        this.setState({
            nodeList: newNodeList
        })
    }

    render(){
        return(
            <div className="app">
                <Header />
                <NodeContainer nodeList={this.state.nodeList}/>
                <Control 
                    handlePush={this.handlePush} 
                    handlePop={this.handlePop}
                    handleEmpty={this.handleEmpty}
                />
            </div>
        )
    }
}

export default App;


