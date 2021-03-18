import React from 'react'
import{Button, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'

const Confirmation = ({orderInfo, orderError})=> {
 
    if(orderError){
    return (
        <div className='confirmation'>
            
            <Typography variant='h5'  color='secondary'>Error:{orderError}</Typography>
            <Button component={Link} variant='outlined' type='button' to='/'>Back to home</Button>
            
        </div>
    )}else{
        return(
            <div className='confirmation'>
                <Typography variant='h5' color='primary'>
                    {/* Thank you {orderInfo.customer.firstname} {orderInfo.customer.lastname}{''} for your purchase.  */}
                    Thank you for your purchase
                </Typography>
                <Button component={Link} variant='contained' type='button' to='/'>
                    continue shopping
                </Button>
            </div>
        )
    }
   
}

export default Confirmation
