import React from 'react'
import { Link } from 'react-router-dom';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
        <div className='home'>
            <div className="home__container">
                <img className="home__image" src="homebanner.png" alt="" />

                <Link to="/workshops">
                <div className="home__row">
                
                    <Product title= 'Workshops' image='workshophome.png' />
                    
                    <Link to= "/recommendedsupplies">
                    <Product title= 'List of Recommended Supplies' image='recommendedsupplies.png' />
                    </Link>
                </div>
                </Link> 
                
                

                <div className="home__row">
                    
                    <Link to="/shopproducts">
                    <Product title= 'Visit our Shop' image='shop.png' /> 
                    </Link>

                     <Link to= "/feedback"> 
                    <Product title= 'What our Customers Thinks' image='feedback.png' />
                     </Link> 

                    <Link to="/aboutus">
                    <Product title= 'About me' image='aboutme.png'/>
                    </Link>
                    
                </div>

                <Link to="/contactus">
                <div className="home__row">
                    <Product title= 'Want to place order for Customizations? Click Here' image='placeorder.png'/>  
                    
                </div>
                </Link> 


            </div>
        </div>
    )
}

export default Home
