import React from 'react'
import {Button, Container, Grid, Typography} from '@material-ui/core'
import { ArrowDropDownOutlined } from '@material-ui/icons'
import './style.css'

const Banner =()=> {
    return (
        <div className='banner'>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <Typography className='title' variant='h1'>
                            LaKuzzy Collection
                        </Typography>
                        <Button className='shopping-button' href='#products'>
                            Start shopping <ArrowDropDownOutlined></ArrowDropDownOutlined>
                        </Button>
                    </Grid>
                    <Grid className='brand' item sm={6}>
                        <img src='/img3.jpeg' alt=''></img>
                    </Grid>
                </Grid>
            </Container>
            
        </div>
    )
}

export default Banner
