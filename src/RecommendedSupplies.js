import React from 'react'
import { Link } from 'react-router-dom';
import './RecommendedSupplies.css';
import Supplies from './Supplies';


function RecommendedSupplies() {

    return (
        <>
        <div className="title">
                    <h3> List of Recommended Supplies </h3> </div>

                    <br></br>
                    <div className="suppl1">
                    <Link to="/blendingbrushpens">
                    <Supplies title= 'Brush Pens - for Blending' image='1.png' />
                    </Link>

                    <Link to="/watercolorpaper">
                    <Supplies title= 'Watercolor Papers- Blending' image='3.png' />
                    </Link>
                    
                    <Supplies title= 'Brush Pens - for Beginners' image='2.png' />
                    <Supplies title= 'Watercolors for Beginners' image='4.png' />
                    </div>

                    <div className="suppl1">
                    <Supplies title= 'Fineliners (For Illustration)' image='5.png' />
                    </div>
           

            
                
        
</>

    )
}

export default RecommendedSupplies
