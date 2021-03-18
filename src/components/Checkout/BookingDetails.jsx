import React from 'react'
import{
    Button,
    List, ListItem, ListItemText, Typography
}from '@material-ui/core'

const  BookingDetails = ({checkoutData, handleBackStep, handleNextStep})=> {
    return (
        
        <>
            
            <List>
              {checkoutData.live.line_items.map((item)=>{
                return( 
                    <ListItem key={item.id}>
                      <ListItemText secondary={`Quantity: ${item.quantity}`} color='secondary'>
                        <h3 style={{color:'black'}}> {item.name}</h3> 
                      </ListItemText>
                      <Typography variant='body2' color='primary'>
                          {item.line_total.formatted_with_symbol}
                      </Typography>
                    </ListItem>
                  )
              })}

              <ListItem>
                  <ListItemText secondary='Total price'/>
                  <Typography varaint='body2' color='secondary'>
                      {checkoutData.live.subtotal.formatted_with_code}
                  </Typography>
              </ListItem>
            </List>  

            <div className='actions'>
                <Button size='medium' onClick={(e)=> handleBackStep(e, 'order-address')} variant='contained' color='secondary'>back</Button>
                <Button onClick={
                    (e)=> handleNextStep(e, 'order-payment')}
                    size='medium'
                    color='primary'
                    variant='contained'
                    >
                        Next
                </Button>
            </div>
        </>
    )
}

export default BookingDetails
