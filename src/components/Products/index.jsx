import { Container, Grid } from '@material-ui/core'
import React from 'react'
import Banner from '../Banner'
import NavButton from '../NavButton'
import Product from '../Product'
import './style.css'
const Products = ({products, addProduct, links, nextPage, prevPage}) => {
    return (
        <div>
            <Banner></Banner>
            <Container id='products'>
            <Grid container spacing={1}>
             {
                products.map((product)=>{
                    return(
                        <Grid item xs={6} sm={6} md={4} key={product.id}>
                        <Product product={product} addProduct={addProduct}></Product>
                        </Grid>
                    )
                })
            }
            </Grid>
            <NavButton  links={links}  nextPage={nextPage} prevPage={prevPage}></NavButton>
            </Container>
        </div>
    )
}

export default Products 
