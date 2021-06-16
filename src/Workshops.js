import { render } from '@testing-library/react';
import React, {useContext} from 'react';
import "./Workshops.css";
import { WorkshopsContext } from './WorkshopsContext';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export const Workshops = () => {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded); 
  };

  const {workshops} = useContext(WorkshopsContext);
  // console.log(workshops);

  return (
    <>
        {workshops.length !== 0 && <h2> Online Workshops </h2>}
        <div className='workshops-container'>
            {workshops.length === 0 && <div>Slow internet...no products to display</div>}

            {workshops.map(workshop => (

<Card className={classes.root} key={workshop.WorkshopID}>
  
<CardHeader 

  
  title={workshop.WorkshopName}
  subheader={workshop.WorkshopDate} 
  />
<CardMedia
  className={classes.media}
  image={workshop.WorkshopImg}
  title={workshop.WorkshopName}
/>
<CardContent>
  <Typography variant="body2" color="textSecondary" component="p">
    {workshop.WorkshopIntro}
  </Typography>
</CardContent>
<CardActions disableSpacing>
  
  <IconButton
    className= {clsx(classes.expand,  { 
      [classes.expandOpen]: expanded, 
    })}
    onClick= {handleExpandClick}
    aria-expanded={expanded}
    aria-label="show more"
  >
    <ExpandMoreIcon />
  </IconButton>
</CardActions>
<Collapse in={expanded} timeout="auto" unmountOnExit>
  <CardContent>
    <Typography paragraph>About the Workshop</Typography>
    <Typography paragraph>
      {workshop.WorkshopDesc}
    </Typography>
    
    <Link to="/registration">
    <button className="registernow" > Register Now </button>
    </Link>

  </CardContent>
</Collapse>
</Card>

          ))}

    </div>
    </>
  )
}

export default Workshops
