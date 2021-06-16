import React, {useState,useEffect, useContext } from 'react';
import ReactStars from 'react-rating-stars-component';
import './Feedback.css';
import {auth, db} from "./firebase";
import { useHistory } from "react-router-dom";
import Header from './Header'
import { FeedbacksContext } from './FeedbacksContext';
import Carousel from "react-elastic-carousel";


export const Feedback = (props) => {

    const breakPoints= [
        {width : 500, itemsToShow :1},
        {width : 768, itemsToShow :2},
        {width : 1200, itemsToShow :3},
        {width : 1500, itemsToShow :4},
    ]

    const history= useHistory();

    const {feedbacks} = useContext(FeedbacksContext);
    console.log(feedbacks);

    //defining state
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');


    const [feedbackMsg, setFeedbackMsg]= useState("");
    const [feedbackRating, setFeedbackRating]= useState("");
    const [error, setError]= useState("");

    //to see if user is logged in or not..if not -> push to login page...if logged in-> retrieve name from db
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('Users').doc(user.uid).onSnapshot(snapshot => {
                    setName(snapshot.data().Name);
                    setEmail(snapshot.data().Email);

                })
            }
            else {
                history.push('/login')
                // alert("Please login first to continue");
            }
        })
    })


    const addfeedback = (e) =>{
        e.preventDefault();
        alert("Thank you for your valuable feedback :) You will be redirected to the home page after 10 seconds ")
        console.log(name,email,feedbackMsg,feedbackRating);

        auth.onAuthStateChanged(user => {
            if (user) {
                db.collection('Feedbacks').add({
                Name: name,
                Email: email,
                Star_rating: feedbackRating,
                Feedback: feedbackMsg,
             }).then(()=>{
                setFeedbackRating();
                setFeedbackMsg("");
                setError("");
                setTimeout(() => {
                    history.push('/')
                }, 10000)        
        }) .catch(err => setError(err.message))
    }
}
        )}
    

    const ratingChanged = (rating) => {
        setFeedbackRating(rating)
        // alert("You have given "+ rating +" star rating")
    }

    return (
        <>
        {/* <Header user={props.user} /> */}
        <div className="feedback">
            <h2 className="h21">Feedback Section </h2>
            <form autoComplete="off" className="form-group" onSubmit={addfeedback}>

            <h4 className="h4">Kindly give your feedback</h4>
            <ReactStars size={50}
            onChange={ratingChanged} required/>

            <textarea placeholder=" What's your feedback" required
                onChange={(e) => setFeedbackMsg(e.target.value)} value={feedbackMsg} />

            <button className="submitbtn"> Submit </button>

           </form>
           {error && <span>{error}</span>}

           <Carousel breakPoints={breakPoints}>
               {feedbacks.map(feedback => <div className="carousel" key={feedback.FeedbackID}> 
               <div className="0">{feedback.Name} </div>
               <div className="1"> <ReactStars classNames="stars" size={45} value={feedback.Star_rating} disabled={true}/> </div>
                    {feedback.Star_rating}/ 5
               <br></br> 
               <div className="f2"> {feedback.Feedback}  </div>
               
               </div>
               )}
           </Carousel>


        </div>
        </>
    )
}

export default Feedback
