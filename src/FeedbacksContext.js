import React, {createContext} from 'react';
import {db} from "./firebase";

export const FeedbacksContext = createContext();

export class FeedbacksContextProvider extends React.Component{

    //defining initial state with empty array of products
    state= {
        feedbacks: []
    }
    
    componentDidMount(){
        const prevFeedbacks= this.state.feedbacks;  //push into empty array
        db.collection('Feedbacks').onSnapshot(snapshot => {
            let changes = snapshot.docChanges();
            changes.forEach(change =>{
                if(change.type==='added'){
                    prevFeedbacks.push({
                        FeedbackID: change.doc.id,
                        Name: change.doc.data().Name,
                        Feedback: change.doc.data().Feedback,
                        Star_rating: change.doc.data().Star_rating,
                    })
                }
                this.setState({
                    feedbacks: prevFeedbacks
                })
            })
        })
    }
    
    render(){
        return(
            <FeedbacksContext.Provider value={{feedbacks:[...this.state.feedbacks]}}>
                {this.props.children}
            </FeedbacksContext.Provider>
        )

    }


}

            