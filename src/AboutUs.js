import React from 'react'
import "./AboutUs.css";

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    grid:{
        width:'100%',
        margin:'0px',
        
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
    },
    paper:{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',

        height:'300px',
        width:'300px',
        padding:theme.spacing(0),
        textAlign:'center',
        color:theme.palette.text.secondary,
        background:theme.palette.success.white,
    }
    
}));

function AboutUs() {
    const classes=useStyles();
    return (
        <div className="aboutus">
            {/* <div className="image__left"> */}
                <img className="nausheen" src="Sample_photo.png" alt=""/>
            {/* </div> */}

               <span className="writing__right"> <strong> About Me  </strong> </span>
               <span className="writing__desc">
               <p> &nbsp; &nbsp; Hi! This is Nausheen Aka @classy_calligraphix. I am a Lettering and Calligraphy artist from Mumbai. I was first introduced to ‘Calligraphy’ in my school when I was in 6th std. During my summer vacations my mom enrolled me in calligraphy classes, they taught us using ink pen that time.</p>
               <p> After that, I used to try different things on my own and hence developed an interest.</p>
               <p>But I never really thought of how I'll take things further. But during the pandemic, I started this hobby again and then thought of starting my own page where I can showcase my skills and share it with people across the globe.</p>
               <p>Talking about Calligraphy, Calligraphy and Hand Lettering are almost antithetical to today's digital era; and that's what makes them all more special. My aim is to add a touch of personalization through calligraphy and lettering to as many lives as possible.</p>
               </span>

               <h1>  <p className="myworks"> My Works</p>  </h1>
               
                {/* New 3 GRID */}
               <Grid container spacing={2} classname={classes.grid} justify="center">
                <Grid item xs={3}>
                <Paper className={classes.paper}> 
                    <img src="never regret anything.png" alt=""/>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src="to walk in nature.png" alt=""/>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src="happy republic day.png" alt=""/>
                </Paper>
                </Grid>
                </Grid>

                {/* New 2 GRID */}

                <Grid container spacing={2} classname={classes.grid} justify="center">
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src="trust the timing.png" alt=""/>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src="hope.png" alt=""/>
                </Paper>
                </Grid>
                </Grid>

                {/* New 3 GRID */}

                <Grid container spacing={2} classname={classes.grid} justify="center">
                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src="you do not find.png" alt=""/>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src="100.png" alt=""/>
                </Paper>
                </Grid>

                <Grid item xs={3}>
                <Paper className={classes.paper}>
                    <img src="happy womens day.png" alt=""/>
                </Paper>
                </Grid>


                </Grid>       
    
    
    </div> 
    );     
}

export default AboutUs
