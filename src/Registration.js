import React, {useState, useEffect, useContext} from 'react'
import { useHistory } from "react-router-dom";
import Header from './Header'
import {auth, db} from "./firebase";
import "./Registration.css";


export const Registration = (props) => {

    const history= useHistory();

    // defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [cell, setCell] = useState('');
    const [workshopname, setWorkshopName] = useState('');
    const [error, setError] = useState('');
    const [successMsg, setSuccessMsg] = useState('');

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                history.push("/registration");
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


    const registrationSubmit = (e) => {
        e.preventDefault();
        // console.log(name, email, cell, address, totalQty, totalPrice);

        auth.onAuthStateChanged(user => {
            if (user) {
                const date = new Date();
                const time = date.getTime();
                db.collection('WorkshopRegistration ').doc(workshopname).collection("Students").doc(name).set({
                    StudentName: name,
                    StudentEmail: email,
                    StudentCell: cell,
                    Workshop:workshopname,
                }).then(() => {
                    setCell('');
                    setWorkshopName('');
                    setSuccessMsg('You have successfully registered. Thanks for visiting us. You will be redirected to home page after 5 seconds');
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
                    <div className='text1'> 
                    <div className="registration"> <strong> Registration Details </strong> </div>
                    <br />
                    {successMsg && <div className='success-msg'>{successMsg}</div>}
                    <form autoComplete="off" className='form-group' onSubmit={registrationSubmit} >
                        <label className='text'> Name </label>
                        <input type="text" className='form-control1' required
                            value={name} disabled />
                        <br />
                        <label className='text'> Email </label>
                        <input type="email" className='form-control1' required
                            value={email} disabled />
                        <br />
                        <label className='text'> Phone No </label>
                        <input type="text" className='form-control1' required
                            onChange={(e) => setCell(e.target.value)} value={cell} placeholder='eg 0357543789' />
                        <br />

                        <label className='text'>Workshop you want to register for</label>
                        <select defaultValue="Select Workshop" className='form-control1' required 
                           onChange={(e) => setWorkshopName(e.target.value)} value={workshopname}>
                            <option defaultValue>Select Workshop</option>
                            <option value="Bookmark Making Workshop">Bookmark Making Workshop</option>
                            <option value="Brush Pen Calligraphy Workshop">Brush Pen Calligraphy Workshop</option>
                            <option value="Copperplate Lettering Workshop">Copperplate Lettering Workshop</option>
                        </select>
                      
                        <button type="submit" className='registerbtn'>SUBMIT</button>
                    </form>
                    {error && <div className='error-msg'>{error}</div>}
                </div>
                </div>
            </>
        
    )
}


export default Registration
