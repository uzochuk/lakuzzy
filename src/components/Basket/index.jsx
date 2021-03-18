import React,{useState} from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Container, Grid, Typography} from '@material-ui/core'
import {Link} from 'react-router-dom'
import { DeleteForever, Delete, CreditCardSharp } from '@material-ui/icons';
import Spinner from '../Spinner'
import Banner from './Banner'
import './style.css'

const  Basket=({basketData, updateProduct, handleEmptyBasket, RemoveItemFromBasket})=> {

    const [showSpinner, setShowSpinner] = useState(true)
    const loading = () =>{
        setTimeout(() => {
            setShowSpinner(false)
        }, 2000);
        if(showSpinner){
        
            return<Spinner></Spinner>
           
        }
        return <Banner></Banner>
    }

    if(!basketData.line_items || !basketData.line_items.length) return loading()
    return (
        <Container id='basket'>
            <Grid container justify='center' spacing={4}>
                {
                    basketData.line_items.map((product)=>{
                        return(
                           <Grid key={product.id} item xs={12} sm={6} md={4}>
                               <Card className='custom-card'>
                                   <CardMedia
                                    component='img'
                                    alt=''
                                    height='260'
                                    className='card-image'
                                    image={product.media.source}
                                    title=''/>
                                <CardContent className='content'>
                                    <Typography
                                        className='title'
                                        gutterBottom
                                        variant='h5'
                                        component='h2'
                                        >
                                            {product.name}
                                        </Typography>
                                </CardContent>
                                <CardActionArea>
                                    <CardActions>
                                        <Typography 
                                            className='basket-item-price'
                                            gutterBottom
                                            variant='h5'
                                            component='h2'
                                            >
                                                {product.price.formatted_with_symbol}
                                            </Typography>
                                    </CardActions>

                                    <CardActions className='actions-content'>
                                        <Button
                                            size='small'
                                            color='secondary'
                                            variant='outlined'
                                            onClick={()=>{
                                                RemoveItemFromBasket(product.id)
                                            }}>
                                                Remove <Delete></Delete>
                                            </Button>

                                            <>

                                                <Button
                                                    size='small'
                                                    variant='outlined'
                                                    className='increase-product-quantity'
                                                    onClick={()=>{
                                                        updateProduct(product.id, product.quantity + 1)
                                                    }}>
                                                        +
                                                    </Button>

                                                    <Typography>&nbsp;{product.quantity}&nbsp;</Typography>

                                                    <Button
                                                    size='small'
                                                    variant='outlined'
                                                    className='decrease-product-quantity'
                                                    onClick={()=>{
                                                        updateProduct(product.id, product.quantity - 1)
                                                    }}>
                                                        -
                                                    </Button>
                                            </>
                                    </CardActions>
                                </CardActionArea>
                               </Card>
                           </Grid>
                        )
                    })
                }
            </Grid>
            <div className='actions'>
                <Button
                    size='small'
                    color='secondary'
                    variant='contained'
                    onClick={handleEmptyBasket}>
                        Empty Basket <DeleteForever></DeleteForever>
                </Button>

                <Button
                    size='small'
                    variant='contained'
                    component={Link}
                    to='/checkout'>
                        Checkout <CreditCardSharp></CreditCardSharp>
                    </Button>
            </div>
        </Container>
    )
}

export default Basket


