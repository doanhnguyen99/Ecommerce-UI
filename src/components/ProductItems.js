import React from 'react';

const ProductITems = ({ name, price, url }) => {
    return (
        <div style={{width: "250px", height: "320px"}}>
            <div style={{
                width: "250px",
                height: "250px"
            }}>
                <img src={url} width="250px" height="250px" />
            </div>
            <div style={{
                width: "100%",
                height: "30px",
                fontSize: "18px",
            }}>
                {name}
            </div>
            <div>
                ${price}
            </div>
        </div>
    );
}

export default ProductITems;