import React, { useState } from 'react';
import {auth, db} from "./firebase";
import {Link} from "react-router-dom";
import './Login.css';

import { useHistory } from "react-router-dom";

export const Login = (props) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    let history= useHistory();

    const login = (e)=> {
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password).then(() => {
            setEmail('');
            setPassword('');
            setError('');
            history.push('/');
        }).catch(err => setError(err.message));
    }


    return (
        <div className='container'>

            <Link to="/">
            <img className="signup__logo" src="headerlogosignup.png" />
            </Link>
            
            <div className="a">
            <h3>Login</h3>
            
            <form autoComplete="off" className='form-group1' onSubmit={login}>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder="Enter email id" className='form-control11' required
                    onChange={(e) => setEmail(e.target.value)} value={email} />
                
                <label htmlFor="password">Password</label>
                <input type="password" placeholder="Enter password" className='form-control11' required
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                
                <button type="submit" className='mybtn1'>LOGIN</button>
            </form>
            {error && <span className='error-msg'>{error}</span>}
            
            <span className="already">Don't have an account? 
                <Link to="signup"> Register Here</Link>
            </span>
        </div>
        </div>
    )
}