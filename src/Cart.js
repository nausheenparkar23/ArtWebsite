import React, {useContext, useEffect} from 'react'
import './Cart.css';
import { CartContext } from './CartContext';
import Header from './Header';
import {Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import {auth, db} from "./firebase";

import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import DeleteIcon from '@material-ui/icons/Delete';

export const Cart = ({user}) => {

    // const data = useContext(CartContext);
    // console.log(data);

    const { shoppingCart, dispatch, totalPrice, totalQty } = useContext(CartContext);

    const history = useHistory();

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <>
            {/* <Header user={user} />  */}
            <>
                {shoppingCart.length !== 0 && <h1 className="h1">Cart</h1>}
                <div className='cart-container'>
                    {
                        shoppingCart.length === 0 && <>
                            <div>no items in your cart or slow internet causing trouble (Refresh the page) </div>
                            <div><Link to="/">Return to Home page</Link></div>
                        </>
                    }
                    {shoppingCart && shoppingCart.map(cart => (
                        <div className='cart-card' key={cart.ProductID}>

                            <div className='cart-img'>
                                <img src={cart.ProductImg} alt="not found" />
                            </div>

                            <div className='cart-name'>{cart.ProductName}</div>

                            <div className='cart-price-orignal'>₹ {cart.ProductPrice}.00 </div>

                            <div className='inc' onClick={() => dispatch({ type: 'INC', id: cart.ProductID, cart })}>
                                <AddIcon size={24} />
                            </div>

                            <div className='quantity'>{cart.qty}</div>

                            <div className='dec' onClick={() => dispatch({ type: 'DEC', id: cart.ProductID, cart })}>
                                <RemoveIcon size={24} />
                            </div>

                            <div className='cart-price'>
                                ₹ {cart.TotalProductPrice}.00
                            </div>

                            <button className='delete-btn' onClick={() => dispatch({ type: 'DELETE', id: cart.ProductID, cart })}>
                                <DeleteIcon size={24} />
                            </button>
                        </div>
                    ))
                    }
                    {shoppingCart.length > 0 && <div className='cart-summary'>
                        <div className='cart-summary-heading'>
                            Cart-Summary
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Price</span>
                            <span>{totalPrice}</span>
                        </div>
                        <div className='cart-summary-price'>
                            <span>Total Qty</span>
                            <span>{totalQty}</span>
                        </div>
                        <br></br>
                        <Link to='cashout' className='cashout-link'>
                            <button className='btn btn-success btn-md' style={{ marginTop: 5 + 'px' }}>
                                Cash on delivery
                        </button>
                        </Link>
                    </div>}
                </div>
            </>
        </>
    )
}
