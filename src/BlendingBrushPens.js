import React from 'react'
import Supplies from './Supplies';

function BlendingBrushPens() {
    return (
        <>
        <div className="title">
                    <h3> Brush Pens - For Blendings </h3> </div>

                    <br></br>
                    <div className="suppl1">
                    
                    <a href="https://www.amazon.in/Tombow-Dual-Brush-Pen-Markers/dp/B07KR55P7J/ref=sr_1_2?crid=2DQ9392O8EHYY&dchild=1&keywords=tombow+dual+brush+pens&qid=1619282388&sprefix=tombow+dual+%2Caps%2C406&sr=8-2">
                    <Supplies title= 'Tombow Dual Brush Pens' image='tombowdual.png' />
                    </a>

                    <a href="https://www.amazon.in/Karin-Mega-Box-Plus-Handlettering/dp/B083VW4CZT/ref=sr_1_3?crid=3HEM4S1ZC5AGI&dchild=1&keywords=karin+markers&qid=1619282323&sprefix=karin+ma%2Caps%2C341&sr=8-3">
                    <Supplies title= 'Karin Mega Box – 72 Colours' image='karin.png' />
                    </a>

                    <a href= "https://www.amazon.in/Brush-Painters-Assorted-Colors-6521120/dp/B001GMRC9S/ref=sr_1_3?dchild=1&keywords=lyra+brush+pens&qid=1619281817&sr=8-3">
                    <Supplies title= 'LYRA Aqua Pens (12 Colours)' image='lyra.png' />
                    </a>

                    </div>
        </>
    )
}

export default BlendingBrushPens
