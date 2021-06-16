import React from 'react';
import { useState, useEffect } from "react";
import './ContactUs.css';
// import './firebase.js';
import { db } from "./firebase";


const ContactUs = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [contact, setContact] = useState("");
    const [type, setType] = useState("");
    const [message, setMessage] = useState("");

    const [loader, setLoader] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoader(true);            //after user submits, loader should start working

        db.collection('Contactus').add({
            name: name,
            email: email,
            contact: contact,
            type: type,
            message: message,
        })
        .then(() => {               //To display message after form is submitted
            alert("Your Request has been Submitted. We'll contact you in a few days");
            setLoader(false);
        })
        .catch(error =>{            //catch errors
            alert(error.message);
            setLoader(false);
        });

        setName("");                // to change all textbox to empty after submitting
        setEmail("");
        setContact("");
        setType("");
        setMessage("");
    };

    return (
        <form className="contactus" onSubmit={handleSubmit}>
            <h1>Contact Us 📞</h1>

            <label> Name </label>
            <input placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} required/>

            <label> Email id </label>
            <input placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} required />

            <label> Contact No </label>
            <input placeholder="Enter your number" value={contact} onChange={(e) => setContact(e.target.value)} required />

            <label> Type of Customized Artwork </label>
            <input placeholder="For eg: bookmark, greeting card, acrylic sheet etc" 
            value={type} onChange={(e) => setType(e.target.value)} />

            <label> Message </label>
            <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)} required/>

            <button type="submit" 
            style={{background: loader ? "#ccc" : "rgb(2, 2, 110)"}}> Submit </button>

        </form>
    )
}

export default ContactUs
