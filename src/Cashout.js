import React, {useState, useEffect, useContext} from 'react'
import Header from './Header'
import {auth, db} from "./firebase";
import { CartContext } from "./CartContext";
import { useHistory } from "react-router-dom";
import "./Cashout.css";

export const Cashout = (props) => {

    const history= useHistory();

    const {totalPrice, totalQty, dispatch } = useContext(CartContext);

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [address, setAddress] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('Users').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);
                })
            }
            else {
                history.push('/login')
            }
        })
    })

    const cashoutSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, cell, address, totalQty, totalPrice);

        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('Buyer-info ' ).doc(user.uid).collection("_" + time).add({
                    BuyerName: name,
                    BuyerEmail: email,
                    BuyerCell: cell,
                    BuyerAddress: address,
                    BuyerPayment: totalPrice,
                    BuyerQuantity: totalQty
                }).then(() => {
                    setCell('');
                    setAddress('');
                    dispatch({ type: 'EMPTY' })
                    setSuccessMsg('Your order has been placed successfully. Thanks for visiting. You will be redirected to home page after 5 seconds');
                    setTimeout(() => {
                        history.push('/')
                    }, 5000)
                }).catch(err => setError(err.message))
            }
        })
    }

    return (
            <>
                {/* <Header user={props.user} /> */}
                <div className='container1'>
                    <br />
                    <div className="cash"> <strong> Cashout Details </strong> </div>
                    <br />
                    {successMsg && <div className='success-msg'>{successMsg}</div>}
                    <form autoComplete="off" className='form-group1' onSubmit={cashoutSubmit} >
                        <label className="label1"> Name </label>
                        <input type="text" className='form-control' required
                            value={name} disabled />
                        <br />
                        <label className="label1"> Email </label>
                        <input type="email" className='form-control' required
                            value={email} disabled />
                        <br />
                        <label className="label1"> Phone No </label>
                        <input type="text" className='form-control' required
                            onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg 0357543789' />
                        <br />
                        <label className="label1"> Delivery Address </label>
                        <input type="text" className='form-control' required
                            onChange={(e) => setAddress(e.target.value)} value={address} />
                        <br />
                        <label className="label1"> Price To Pay </label>
                        <input type="number" className='form-control' required
                            value={totalPrice} disabled />
                        <br />
                        <label className="label1"> Total No of Products </label>
                        <input type="number" className='form-control' required
                            value={totalQty} disabled />
                        <br />
                        <button type="submit" className='mybtn'>SUBMIT</button>
                    </form>
                    {error && <div className='error-msg'>{error}</div>}
                </div>
            </>
        
    )
}
