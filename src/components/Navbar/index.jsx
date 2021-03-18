import React from 'react'
import {AppBar, Badge, Container, IconButton, Toolbar, Typography} from '@material-ui/core'
import { Link, useLocation } from 'react-router-dom'
import {ShoppingCart} from '@material-ui/icons'
import './style.css'

function Navbar({basketItem, totalCost}) {
    //console.log(basketItem);
    const location =useLocation()
    return (
        <>
            <AppBar position='fixed' className='custom-navbar'>
                <Container>
                    <Toolbar>
                        <Typography component={Link} to='/' variants='h6' className='custom-title' color='inherit'>
                            <img src='/logo.jpg' alt='' height='20px' className='logo'></img>
                        </Typography>
                        {
                            location.pathname === '/basket' ? (
                                <div className='basket-wrapper'>
                                    <h2>
                                        Total cost: <strong>{totalCost}</strong>
                                    </h2>
                                </div>
                            ):(
                                <div className='basket-wrapper'>
                                    <IconButton component={Link} to='/basket' aria-label='cart contents' color='inherit'>
                                        <Badge badgeContent={basketItem} color='secondary'>
                                            <ShoppingCart className='custom-basket'></ShoppingCart>
                                        </Badge>
                                    </IconButton>
                                </div>
                            )
                        }
    
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    )
}


export default  Navbar
