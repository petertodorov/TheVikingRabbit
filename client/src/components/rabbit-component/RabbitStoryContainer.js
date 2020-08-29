import React from 'react'
import rabbitImg from '../../images/viking_rabbit.png'
import './RabbitStoryContainer.css'
function RabbitStoryContainer(props) {
    if (props.story !== undefined) {
        return (
            <section id={props.story.id} key={props.story.id} className="rabbit-story-container">
                <h3 id={props.story.id + "anchor"}>{props.story.title}</h3>
                <img src={rabbitImg} alt="rabbit-image" />
                <p>{props.story.description}</p>
                <p>{props.story.description}</p>
                <p>{props.story.description}</p>
                <p>{props.story.description}</p>
                <p>{props.story.description}</p>
                <a href={"#" + props.story.id + "anchor"}>Go to top</a>
            </section>
        );
    }
    return (
        <section className="rabbit-story-container">
            <h3 >No Story Available!</h3>

        </section>
    );
}

export default RabbitStoryContainer