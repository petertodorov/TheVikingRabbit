import React from 'react'

class TestAPI extends React.Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }
    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }));
    }

    componentDidMount() {
        this.callAPI();
    }

    render(){
        return (
            <h2>{this.state.apiResponse} Yupiiiiiiiiiiiiiiii</h2>
        );
    }
}

export default  TestAPI