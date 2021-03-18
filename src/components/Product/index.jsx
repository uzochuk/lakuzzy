import React,{useState} from 'react'
import {Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography} from '@material-ui/core'
import {ShoppingBasket} from '@material-ui/icons'
import Modal from 'react-modal';
import './styles.css'

const  Product = ({product, addProduct }) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

        
    return (
       
    <>
               <Modal isOpen={modalIsOpen} className='modal'  onRequestClose={()=>setModalIsOpen(false)} >
                   <div className='itemInfo'>
                       <img src={product.media.source} alt=''></img>
                       <i>{product.name}</i> 
                       <Typography  dangerouslySetInnerHTML={{__html:product.description}} variant='body1'></Typography>
                   </div>
                   <div className='buttonSec'>
                       <Button color='secondary' variant='outlined' onClickCapture={()=>setModalIsOpen(false)}>Close</Button>
                       <Button
                        color='primary'
                        variant='outlined'
                        onClick={()=>{
                        addProduct(product.id, 1)
                        }}
                         >
                    <ShoppingBasket></ShoppingBasket>ADD TO CART
                    </Button>
                   </div>
                  
               </Modal>
       <Card className='custom-card'>
           <CardActionArea onClickCapture={()=>setModalIsOpen(true)}>
              

               <CardMedia
                component='img'
                alt=''
                height='260'
                className='card-image'
                image={product.media.source}
                title={product.name}
                />
                <CardContent className='content'>
                    <Typography className='title' gutterBottom variant='h5' component='h2'>
                        {product.name}
                    </Typography>
                </CardContent>
           </CardActionArea>
            <CardActions className='actions-content'>
                <>
                    <Typography className='price' gutterBottom variant='h5' component='h2'>
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Button
                        size='large'
                        className='custom-button'
                        onClick={()=>{
                        addProduct(product.id, 1)
                        }}
                    >
                    <ShoppingBasket></ShoppingBasket>ADD TO CART
                    </Button>
                </>
            </CardActions> 
       </Card>
    </>
    )
}

export default Product
