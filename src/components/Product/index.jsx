import React from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core'
import {ShoppingCartTwoTone} from '@material-ui/icons'
import './styles.css'

const  Product = ({product, addProduct }) => {

    return (
       
    <>
       <Card className='custom-card'>
           <CardActionArea>
               <CardMedia
                component='img'
                alt=''
                height=''
                className='card-image'
                image={product.media.source}
                title={product.name}
                />
                <CardContent className='content'>
                    <Typography className='title' gutterBottom variant='body1' component='h6'>
                        {product.name}
                    </Typography>
                    <Typography className='description' gutterBottom   dangerouslySetInnerHTML={{ __html: product.description }}>
                    </Typography>
               </CardContent>
           </CardActionArea>
            <CardActions className='actions-content'>
                <>
                    <Typography className='price' gutterBottom variant='body1' component='h6'  size='small'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Button
                        size='small'
                        className='custom-button'
                        variant='contained'
                        color='secondary'
                        onClick={()=>{
                        addProduct(product.id, 1)
                        }}
                    >
                        <ShoppingCartTwoTone></ShoppingCartTwoTone>
                    </Button>
                </>
            </CardActions> 
       </Card>
    </>
    )
}

export default Product
