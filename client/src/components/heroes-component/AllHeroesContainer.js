import React from 'react'
import rabbitImg from '../../images/viking_rabbit.png'
import leshicaImg from '../../images/leshica.jpg'
import RoundImage from '../partials/RoundImage'

function AllHeroesContainer(props) {
    return (
        <section className="all-heros-container">
            <h2>Other Heroes</h2>
            <div id="RabbitComponent" className="click-wrapper" onClick={props.clickHandler}>
                <RoundImage imageSrc={rabbitImg} />
            </div>
            <div id="LeshicaComponent" className="click-wrapper" onClick={props.clickHandler}>
                <RoundImage imageSrc={leshicaImg} />
            </div>
        </section>
    );
}
export default AllHeroesContainer;