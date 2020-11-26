import React from 'react';
import './Topic.css';
import img from './../../image/sua.jpeg';

const Card = () => {
    return(
        <div class="mycard">
            <div class="myimg">
                <img src={img} width="100px" height="100px"/>
            </div>
            <div class="myText">
                sữa dành cho người gầy
            </div>
        </div>
    );
}

export default Card;