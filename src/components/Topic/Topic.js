import React from 'react';
import './Topic.css';
import img from './../../image/sua.jpeg';

const Card = ({title, url}) => {
    return(
        <div class="mycard">
            <div class="myimg">
                <img src={url} width="100px" height="100px"/>
            </div>
            <div class="myText">
                {title}
            </div>
        </div>
    );
}

export default Card;