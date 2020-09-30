import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';

class Node extends Component{

    constructor(props){
        super(props);
        this.state = {
            nodeClass: 'node',
            mounted: false  
        }
    }
    
    componentDidMount(){
        if(this.props.topNode){
            this.setState({
                nodeClass: this.state.nodeClass + ' top-node'
            })
        }
        this.setState({
            mounted: this.props.mounted
        })
    }

    componentDidUpdate(prevProps){
        if(prevProps.mounted != this.props.mounted){
            this.setState({
                mounted: this.props.mounted
            })
        }
    }

    render(){
        return(
            <CSSTransition in={this.state.mounted} timeout={1000} classNames="node" unmountOnExit>
                <div className={this.state.nodeClass}>
                    <div className="node-value">
                        <span>{this.props.nodeValue}</span>
                    </div>
                    <div className="next-node">Next</div>
                    <i className="fas fa-long-arrow-alt-down"></i>
                </div>
            </CSSTransition>
        )
    }
}

export default Node;