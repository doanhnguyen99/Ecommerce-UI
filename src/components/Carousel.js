import { Carousel } from 'antd';
import React from 'react';



const MyCarousel = () => {

const onChange = (a, b, c) => {
    console.log(a, b, c);
  }
  
  const contentStyle = {
    height: '460px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
    return(
        <Carousel afterChange={onChange} style={{marginLeft: "20px",}}>
            <div>
            <h3 style={contentStyle}>1</h3>
            </div>
            <div>
            <h3 style={contentStyle}>2</h3>
            </div>
            <div>
            <h3 style={contentStyle}>3</h3>
            </div>
            <div>
            <h3 style={contentStyle}>4</h3>
            </div>
        </Carousel>
    )
}

export default MyCarousel;