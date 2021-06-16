import React from 'react'
import "./Product.css";

function Product({id, title,image}) {
    return (
        <div className="product">
            <div className="product__info">
                <p> {title} </p>
            </div>

            <img src={image} alt=""/>

            {/* <button>Click Here to see List of Workshops</button> */}
            
        </div>
    )
}

export default Product
