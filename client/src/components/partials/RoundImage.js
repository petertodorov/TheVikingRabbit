import './RoundImage.css'
import React from 'react'

function RoundImage(props) {
    return (
        <div className={"mask " + props.classRotate} onClick={props.clickHandler}>
            <div className="pic-container">
                <img src={props.imageSrc}></img>
            </div>
        </div>
    );

}
export default RoundImage