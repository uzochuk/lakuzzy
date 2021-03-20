import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import React,{useEffect, useState} from 'react'
import { Typography ,Button, Grid, Container } from '@material-ui/core'
import {AddShoppingCartOutlined } from '@material-ui/icons'
import  './style.css'


function Search({addProduct}) {
    const [Products, setProducts] = useState([])
    const [isLoading, setisLoading] = useState(true)
    const [displayData, setdisplayData] = useState({})
// Fetch products data from Chec and stores in the products data object.
    const fetchProducts= ()=> {
        const url = new URL(
            "https://api.chec.io/v1/products"
        );
        
        let params = {
            "limit": "200",
        };
        Object.keys(params)
            .forEach(key => url.searchParams.append(key, params[key]));
        
        let headers = {
            "X-Authorization":process.env.REACT_APP_CHEC_PUBLIC_KEY,
            "Accept": "application/json",
            "Content-Type": "application/json",
        };
        
        fetch(url, {
            method: "GET",
            headers: headers,
        })
            .then(response => response.json())
            .then(json => {
                // console.log(json)
                setProducts(json.data)
                setisLoading(false)
            });
    }


    
    useEffect(() => {
        fetchProducts()
        return () => {
         setisLoading(true)
         setProducts({})
        }
    }, [])

            
        const handleOnSearch = (string, results) => {
            // onSearch will have as the first callback parameter
            // the string searched and for the second the results.
            // console.log(string, results)
            // setdisplayData(results)
        }

        const handleOnSelect = (item) => {
            // the item selected
            // console.log(item)
            setdisplayData(item)
            setisLoading(false)
            // console.log(displayData);
        }

        const handleOnFocus = () => {
            // console.log('Focused')
        }


    return(
        <Grid container spacing={4} justify='center' className='rootDiv'>
            <Container>
                <Grid item xs={12}>
                    {
                    isLoading?
                        <div id='loader'>
                        <div className="lds-heart"><div></div></div></div>: 
                            <div  className='searchBar'>  
                                <ReactSearchAutocomplete
                                    items={Products}
                                    onSearch={handleOnSearch}
                                    onSelect={handleOnSelect}
                                    onFocus={handleOnFocus}
                                    autoFocus
                                
                                />  
                        </div>
                    }
                </Grid>

                <Grid item xs={12} className='itemDiv'>
                    {
                       
                        Object.keys(displayData).length === 0 && displayData.constructor === Object?
                        <></>:
                        (
                            <div className='itemDiv'>
                                <img src={displayData.media.source} alt='' className='itemImg'></img>
                                <div className='desc'>
                                    <Typography color='default' variant='subtitle1'>
                                     {displayData.name}
                                    </Typography>
                                    <Typography>
                                     {displayData.price.formatted_with_symbol}
                                    </Typography>
                                     <Button
                                     color='primary'
                                     variant='contained'
                                     onClickCapture={()=>{addProduct(displayData.id, 1)}}>
                                     add to cart
                                    <AddShoppingCartOutlined></AddShoppingCartOutlined>
                                    </Button>
                                </div>
                                <Typography color='default' variant='subtitle1' dangerouslySetInnerHTML={{__html:displayData.description}}>
                                </Typography>
                         </div>
                        )
                    }

                </Grid>
          </Container>
        </Grid>    
    )

}

export default Search
