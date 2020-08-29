import React from 'react';

import './Playground.css';
import Button from './Button.js'

class Playground extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            id: "Don't know it",
            buttonValue: "It is unknown"
        }
        this.getButtonState = this.getButtonState.bind(this)
    }

    getButtonState(id, buttonValue) {
        this.setState({ id, buttonValue })
    }

    componentDidUpdate() {
        console.log('outer comp updated')
        if (this.state.id) {
            return document.getElementById('result-box').innerHTML = `${this.state.id}+++++${this.state.buttonValue}`
        }
        // document.getElementById('result-box').innerHTML ="Plingy Plongy"
        document.getElementById('result-box').innerHTML = `${this.state.id}+++++${this.state.buttonValue}`

    }
    // if (this.state.buttonClicked) {
    //     
    // }
    render() {
        return (
            <main className='main playground'>
                <div className="wrapper">
                    <Button buttonId={1} buttonName={'Button 1'} getButtonState={this.getButtonState} />
                    <Button buttonId={2} buttonName={'Button 2'} getButtonState={this.getButtonState} />
                    <Button buttonId={3} buttonName={'Button 3'} getButtonState={this.getButtonState} />
                </div>

                <div id="result-box">
                    <div>{this.state.id}</div>
                    <div>{this.state.buttonValue}</div>
                </div>
                <div className="just-a-div">just a div</div>
            </main>
        );
    }
}

export default Playground;
