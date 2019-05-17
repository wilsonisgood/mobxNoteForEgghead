import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Component } from 'react';
import React from "react";
import ReactDOM from "react-dom";

@observer class Counter extends Component {
    @observable count = 0
    render() {
        return (
            <div>
                Counter: {this.count} <br/>
                <button onClick={this.handleInc}>+</button>
                <button onClick={this.handleDec}>-</button>
            </div> 
        )
    }

    handleInc = () => {
        this.count++
    }
    handleDec = () => {
        this.count--
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Counter/>, rootElement);
