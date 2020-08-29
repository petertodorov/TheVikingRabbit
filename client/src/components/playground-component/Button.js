import React from 'react'
class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            buttonId: this.props.buttonId,
            buttonName: this.props.buttonName,
            buttonValue: undefined,
            buttonClicked: false,
            currentButton: undefined,
            getButtonState: this.props.getButtonState
        }
        this.handleCkick = this.handleCkick.bind(this)
    }
    handleCkick(e) {
        if (!this.state.buttonClicked) {

            this.setState({
                buttonValue: e.target.innerText,
                buttonClicked: true,
                currentButton: e.target.id
            })
            this.props.getButtonState(e.target.id, e.target.innerText)

            e.target.innerText = `button ${e.target.id} clicked`

        } else {
            e.target.innerText = this.state.buttonValue
            this.props.getButtonState(`Just forgot the id of ${this.state.currentButton}`,
            `Just forgot the value of ${this.state.buttonValue}`)

            this.setState({
                buttonValue: undefined,
                buttonClicked: false,
                currentButton: undefined
            })
        }
    }
    componentDidUpdate() {
        console.log('button updated')
    }

    render() {
        return (
            <div className="box item1">
                <div id={this.state.buttonId} className="content" onClick={this.handleCkick}>
                    {this.state.buttonName}
                </div>
            </div>
        );
    }
}
export default Button