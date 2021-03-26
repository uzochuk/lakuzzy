import React from 'react'
import{Button, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Confirmation = ({orderInfo, orderError})=> {
 
    if(orderError){
    return (
        <div className='confirmation'>
            
            <Typography variant='h5'  color='secondary'>An error occured: {orderError}</Typography>
            <Button component={Link} variant='outlined' type='button' to='/'>Back to home</Button>
            
        </div>
    )}else{
        return(
            <div className='confirmation'>
                
                <Typography variant='body1' color='secondary'>
                    Thank you for your purchase.
                </Typography>
                <Button component={Link} variant='contained' type='button' to='/'>
                    continue shopping
                </Button>
            </div>
        )
    }
   
}

export default Confirmation
