import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Facebook, Instagram, WhatsApp } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  
  root: {
    flexGrow: 1,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    marginTop:'40px'
  },
  paper: {
    padding: theme.spacing(2),
    margin: '30px',
    maxWidth: 500,
  },
  image: {
    minWidth: 128,
    minHeight: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  div2:{
    marginBottom:'100px',
    border:'2px solid white',
    width:'80%',
    display:'flex',
    justifyContent:'space-evenly',
    flexWrap:'wrap',
   
  },
  contact:{
    display:'flex',
    flexWrap:'wrap',
    justifyContent:'space-evenly',
    width:'80%'
  },
  typo:{
    color:'black'
  }
  
}));

function About() {
  const classes = useStyles();


  return (
    <>
    <div className={classes.root}>
      <Paper className={classes.paper} gutterBottom>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="" src="/img2.jpg" />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container justify='center' >
              <h5 className='typo'>
                "Hair does not a woman but good hair definately helps!"
              </h5>
              <Typography variant='body1' color='secondary'>
                <i>I'm an entreprenuer and a personal shopper based in the UK.I deal in  beauty products.</i>
              </Typography>
          </Grid>
        </Grid>
      </Paper>
    
            <div className={classes.contact}>
             
             <Typography>
              <a href='https://facebook.com/lakuzzycollection' ><Facebook fontSize='large'></Facebook></a>
             </Typography>

             <Typography>
                <a href='https://instagram.com/lakuzzycollection'><Instagram fontSize='large'></Instagram></a>
             </Typography>

             <Typography>
               <a href='https://wa.me/qr/SY7GVYUEZXJXF1'><WhatsApp fontSize='large'></WhatsApp></a>
             </Typography>

            </div>
     </div>


</>
  );
}


export default About
