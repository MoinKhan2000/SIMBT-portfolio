import React from 'react';
import './Card.css';
function Card(props) {
    return (
        <div className={`card ${props.cls}`}  >
            <img src={props.emoji} alt="" />
            <span>{props.heading}</span>
            <span>{props.description}</span>
            <button className='c-button'>Learn More</button>
        </div>

    );
}
export default Card;
