import React, {createContext} from 'react';
import {db} from "./firebase";

export const WorkshopsContext = createContext();

export class WorkshopsContextProvider extends React.Component{

    //defining initial state with empty array of products
    state= {
        workshops: []
    }

    componentDidMount(){
        const prevWorkshops= this.state.workshops;  //push into empty array
        db.collection('Workshops').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change =>{
                if(change.type==='added'){
                    prevWorkshops.push({
                        WorkshopID: change.doc.id,
                        WorkshopName: change.doc.data().WorkshopName,
                        WorkshopPrice: change.doc.data().WorkshopPrice,
                        WorkshopImg: change.doc.data().WorkshopImg,
                        WorkshopDate: change.doc.data().WorkshopDate,
                        WorkshopIntro: change.doc.data().WorkshopIntro,
                        WorkshopDesc: change.doc.data().WorkshopDesc,
                    })
                }
                this.setState({
                    workshops: prevWorkshops
                })
            })
        })
    }


    render(){
        return(

            <WorkshopsContext.Provider value={{workshops:[...this.state.workshops]}}>
                {this.props.children}
            </WorkshopsContext.Provider>

        )
    }


}