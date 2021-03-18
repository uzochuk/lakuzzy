import React from 'react'
import{Button} from '@material-ui/core'
import {
    Elements,
    CardElement,
    ElementsConsumer,
}from '@stripe/react-stripe-js'
import {loadStripe} from '@stripe/stripe-js'
const stripePromise = loadStripe('pk_test_51IPtcbBKWYtupp6Qymw9SxoV62NMl57esCPGycX2KRwqVXcVMB1mdfFak6HyBOHdQax9fj878Na0YtEJTM9vAGiG00mDidhuSI')


const Payment=({
    user,
    checkoutData,
    handleBackStep,
    handleNextStep,
    handleCheckout,
})=> {
    const handleSubmit= async (e, elements, stripe)=>{
        e.preventDefault()
        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);

        const {error, paymentMethod}= await stripe.createPaymentMethod({
            type:'card',
            card:cardElement,
         });

        if(error){
            console.log('error====>', error)
        }else{
            const orderData ={
                line_items:checkoutData.live.line_items,
                customer:{
                    firstname:user.firstName,
                    lastname:user.lastName,
                    email:user.email,
                },
                shipping:{
                    name:'stander',
                    street:user.address,
                    town_city:user.city,
                    county_state:user.shippingSubdivision,
                    postal_zip_code:user.postcode,
                    country:user.shippingCountry, 
                 },
                fulfillment:{shipping_method: user.shippingOptions},
                payment:{
                    gateway:'stripe',
                    stripe:{
                        payment_method_id: paymentMethod.id,
                    },
                },
               
               
              
            };
            handleCheckout(checkoutData.id, orderData);
            handleNextStep(e,'confirmation')
        }

    }
    return (
        <>
       
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                     {
                     ({elements, stripe})=>(
                         <form onSubmit={(e)=>handleSubmit(e, elements, stripe)}>

                             {console.log(stripe)}
                             <CardElement/>
                                 <div className='actions payment-actions'>
                                     <Button
                                        variant='outlined'
                                        onClick={(e)=>handleBackStep(e, 'order-details')}
                                        >
                                            Back
                                        </Button>
                                        <Button 
                                            type='submit'
                                            variant='contained'
                                            disabled={!stripe}
                                            color='primary'>
                                             pay {checkoutData.live.subtotal.formatted_with_symbol}
                                        </Button>
              
              
                                 </div>
                           
                         </form>
                     )
                     }
                </ElementsConsumer>
            </Elements> 
        </>
    )
}

export default Payment
