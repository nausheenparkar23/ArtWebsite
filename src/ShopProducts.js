import React, { useContext } from 'react'
import { CartContext } from './CartContext';
import { ProductsContext } from './ProductsContext';
import "./ShopProducts.css";


function ShopProducts() {

    const {products} = useContext(ProductsContext);
    console.log(products);

    const data= useContext(CartContext);
    console.log(data);

    const {dispatch}= useContext(CartContext);

    return (
        <>
        {products.length !== 0 && <h2> Products </h2>}
        <div className='products-container'>
            {products.length === 0 && <div>Slow internet...no products to display</div>}
            {products.map(product => (
                <div className='product-card' key={product.ProductID}>
                    <div className='product-img'>
                        <img src={product.ProductImg} alt="not found" />
                    </div>
                    <div className='product-name'>
                        {product.ProductName}
                    </div>
                    <div className='product-price'>
                        ₹ {product.ProductPrice}.00
                </div>
                    <button className='addcart-btn' onClick= {()=> {dispatch({type: 'ADD_TO_CART', id: product.ProductID, product})}}>ADD TO CART</button>
                </div>
            ))}
        </div>
    </>
    )
}

export default ShopProducts
