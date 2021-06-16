import React, {useEffect, useState} from 'react';
import './Signup.css';
import {auth, db} from "./firebase";
import {Link} from "react-router-dom";
// import Home from './Home';
//import { Login } from './Login';

import { useHistory } from "react-router-dom";

export const Signup = (props) => {

    //defining state using useState hook
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    let history= useHistory();

    const signup = (e) => {
        
        e.preventDefault();
        console.log("Form submitted");
        //console.log(name, email, password);
        auth.createUserWithEmailAndPassword(email,password).then((cred)=>{
            db.collection("Users").doc(cred.user.uid).set({
                Name: name,
                Email: email,
                Password: password
            }).then(()=>{
                setName('');
                setEmail('');
                setPassword('');
                setError('');
                history.push('/');
            }).catch(err=>setError(err.message));
        }).catch(err=>setError(err.message));
    } 


    return (
        
        <div className='container'>

            <Link to="/">
            <img className="signup__logo" src="headerlogosignup.png" />
            </Link>
            
            <div className="a">
            <h3> Sign up </h3> 
            
            <form className='form-group1' onSubmit={signup}>
                <label> Name </label>
                <input type="text" placeholder="Enter your name" className="name" required 
                onChange={(e) => setName(e.target.value)} value={name} />
               
                <label> Email </label>
                <input type="email" placeholder="Enter email id" className="email" required 
                onChange={(e) => setEmail(e.target.value)} value={email} />
                          
                <label> Password </label>
                <input type="password" placeholder="Enter password" className="password" required 
                onChange={(e) => setPassword(e.target.value)} value={password} />
                
                
                <button type="submit" className='mybtn1'>Create Account</button>
            </form>
            {error && <div className="error-msg"> {error} </div>}

            <span className="already"> Already have an account?
                <Link to="login"> Click Here</Link>
            </span>
            
            </div>
            </div>
    )
}