import React from 'react';
import './main.css';
import { directive } from '@babel/types';

export default class Counter extends React.Component {
render(){
    return(
        <div><div><h1>count is {this.props.count}</h1></div>
        <div> <button onClick={this.props.minus}>-</button> </div>
        <div> <button onClick={this.props.add}> + </button></div>
        </div>
    )
}
}
