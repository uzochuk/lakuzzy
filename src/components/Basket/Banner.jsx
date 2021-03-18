import React from 'react'
import {Container, Grid, Typography, Button} from '@material-ui/core'
import { Add, ShoppingCart } from '@material-ui/icons'
import {Link} from 'react-router-dom'
import './style.css'

const Banner = ()=> {
    return (
        <div className="basket-banner">
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography className='title' variant='h1'>
                            Your cart is currently empty...
                        </Typography>
                        <Button className='shopping-button' component={Link} to='/' >
                            Add items <Add></Add>
                        </Button>
                    </Grid>
                    <Grid item xs={12} sm={6} className='brand'>
                        <ShoppingCart></ShoppingCart>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}

export default Banner
