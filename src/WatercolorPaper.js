import { Link } from '@material-ui/core';
import React from 'react'
import Supplies from './Supplies';

function WatercolorPaper() {
    return (
        <>
        <div className="title">
                    <h3> Watercolor Papers (Mostly used for Blendings) </h3> </div>

                    <br></br>
                    <div className="suppl1">
                    
                    <a href="https://www.amazon.in/Canson-Montval-Watercolor-Paper-Packet/dp/B08618XSXY/ref=sr_1_2?dchild=1&keywords=watercolor+papers&qid=1619283478&sr=8-2" >
                    <Supplies title= 'Canson Watercolor Paper' image='canson.png' />
                    </a>
                    
                    <a href="https://www.amazon.in/Brustro-Artists-Watercolour-Pressed-Contains/dp/B01GBSW23M/ref=sr_1_1?dchild=1&keywords=watercolor+papers&qid=1619283478&sr=8-1" >
                    <Supplies title= 'Brustro Watercolor Paper ' image='3.png' />
                    </a>

                    <a href="https://www.amazon.in/MENORAH-Watercolour-Sketchbook-Paper-Sheets-Watercolor/dp/B08Z4D8TGP/ref=sr_1_25?dchild=1&keywords=watercolor+papers&qid=1619283478&sr=8-25">
                    <Supplies title= 'Menorah - Watercolour Paper' image='menorah.png' />
                    </a>

                    <a href="https://www.amazon.in/Bianyo-Watercolour-Paper-Size-Sheets/dp/B078C6BZ2G/ref=sr_1_32?dchild=1&keywords=watercolor+papers&qid=1619283478&sr=8-32" >
                    <Supplies title= 'Bianyo Watercolour Pad' image='bianyo.png' />
                    </a>
            
                    </div>      
        
        </>
    )
}

export default WatercolorPaper
