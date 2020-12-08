import { Carousel } from 'antd';
import React from 'react';



const MyCarousel = ({products}) => {

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
  
   return (products?  (
        <Carousel afterChange={onChange} style={{marginLeft: "20px",}}>
            <div >
            <h3 style={contentStyle}>
                <img src={products[0].link_img} width="100%" height="90%"/>
            </h3>
            </div>
            <div >
            <h3 style={contentStyle}>
                <img src={products[1].link_img} width="100%" height="90%"/>
            </h3>
            </div>
            <div >
            <h3 style={contentStyle}>
                <img src={products[2].link_img} width="100%" height="90%"/>
            </h3>
            </div>
            <div >
            <h3 style={contentStyle}>
                <img src={products[3].link_img} width="100%" height="90%"/>
            </h3>
            </div>
        </Carousel>
    ):
    (
      <Carousel afterChange={onChange} style={{marginLeft: "20px",}}>
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
  ))
    
}

export default MyCarousel;