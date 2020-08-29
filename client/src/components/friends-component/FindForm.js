import React from 'react';

class FindForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        this.props.getMovieByName(this.state.value)
    }

    render() {
        return (
            <form className="find-form" onSubmit={this.handleSubmit}>
                <input type="text"
                    name="findByName"
                    id="findByName"
                    value={this.state.value}
                    placeholder={this.props.text}
                    onChange={this.handleChange} />
                <input type="submit" value="Find" />
            </form>
        );
    }
}
export default FindForm
