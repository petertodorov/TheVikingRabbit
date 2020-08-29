import handleCLickMe from './handleClick'
import React from 'react'
import './Heroes.css'   
import AllHeroesContainer from './AllHeroesContainer'
class Heroes extends React.Component {
    constructor(props) {
        super(props)
        this.handleCLickMe = handleCLickMe.bind(this)
    }

    render() {
        return (
            <main className ='main'>
                <AllHeroesContainer clickHandler={this.handleCLickMe} />
                <div id="hero-container"></div>
            </main>
        );
    }
}
export default Heroes;