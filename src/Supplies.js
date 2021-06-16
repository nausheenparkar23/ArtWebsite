import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
      maxWidth: 345,
      marginRight:45,
    },
    media: {
      height: 140,
        
    },
  });

function Supplies({image,title}) {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root} >
      <CardActionArea>
        <CardMedia
          className={classes.media} className="imgsrc" 
          image={image}
          title={title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2" className="title">
            {title}
          </Typography>
          
        </CardContent>
      </CardActionArea>
      
    </Card>
        </div>
    )
}

export default Supplies
