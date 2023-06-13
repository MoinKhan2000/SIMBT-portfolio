import React from 'react';
import './FloatingDiv.css';
function FloatingDiv(props) {
    return (
        <div>
            <div className="floatingdiv">
            <img src={props.image} alt="" />            
            <span>
                {props.text1}
                <br />
                {props.text2}
            </span>
            </div>
        </div>
    );
}

export default FloatingDiv;
