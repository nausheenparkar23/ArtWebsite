import React, { useContext } from 'react'
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import { Cashout } from "./Cashout";

import {useHistory} from "react-router-dom";
import {auth, db} from "./firebase";
import { CartContext } from './CartContext';


export const Header= ({user}) => {

    const {totalPrice, totalQty, dispatch } = useContext(CartContext);

    // const {totalQty}= useContext(CartContext);

    const history= useHistory();

    const logout = () =>{
        auth.signOut().then(()=>{
            console.log("You have successfully logged out");
            history.push('/login');
            dispatch({ type: 'EMPTY' })
        })
    }


    return (
        <div className='header' >
            <Link to="/">
                <img classname="header__logo" src='headerlogo.png'/> 
            </Link>

            <div className="header__search">
                <input className="header__searchInput" type="text" placeholder="Enter your search"/>
                <SearchIcon classname="header__searchIcon"/> 
            </div>

            <div classname="header__nav">
                <Link to="/login">
                    {/* if user not logged in */}
                {!user && <div className='header__option'> 
                    <span className='header__optionLineOne'>Hello  </span>
                    <span className='header__optionLineTwo'>Sign in</span>  
                </div> }
                </Link> 
                
                
                {/* <Link to="/signup"> 
                <div className='header__option'> 
                    <span className='header__optionLineOne'>Create an  </span>
                    <span className='header__optionLineTwo'>Account </span>   
                </div> 
                </Link>   */}

                {/*  <div className='header__option'> 
                    <span className='header__optionLineOne'>Your </span>

                    <span className='header__optionLineTwo'>Orders </span>
                </div>   */}

                <Link to="/cartproducts"> <div className="header__optionBasket">
                    <ShoppingCartOutlinedIcon />
                    <span className="header__optionLineTwo header__basketCount">{totalQty}
                    </span>
                </div>
                </Link>
                
                
                {/* if user logged in display name */}
                {user && <div className='header__optionBasket'> 
                <span> <div className='header__optionLineTwo1'>
                  <div className="name"> Hello, </div>
                   <div className="name1"> {user} </div>
                </div> </span>
                <span><button className='logout-btn' onClick={logout}>Logout</button></span>
                </div>}
                </div>
        </div>
    )
}

export default Header
