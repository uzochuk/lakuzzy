import React,{useState, useEffect} from 'react'
import {commerce} from './lib/commerce'
import{BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Basket from './components/Basket'
import Checkout from './components/Checkout'

function App() {
    const [products, setProducts] = useState([])
    const [basketData, setBasketData] = useState({})
    const [orderInfo, setOrderInfo] = useState({})
    const [orderError, setOrderError] = useState('')

    const fetchProducts = async () =>{
        const response = await commerce.products.list()
        setProducts((response && response.data) || [])
    }

    const fetchBasketData = async ()=>{
        const response =await commerce.cart.retrieve()
        setBasketData(response)
    }

    const addProduct = async (productId, quantity) =>{
        const response = await commerce.cart.add(productId, quantity);
        setBasketData(response.cart)
    }

    const updateProduct = async (productId, quantity)=>{
        const response= await commerce.cart.update(productId, {quantity})
        setBasketData(response.cart)
    }

    const handleEmptyBasket = async ()=>{
        const response = await commerce.cart.empty()
        setBasketData(response.cart)
    }

    const RemoveItemFromBasket = async (itemId) =>{
        const response = await commerce.cart.remove(itemId)
        setBasketData(response.cart)
    }

    const refreshBasket = async()=>{
        const newBasketData = await commerce.cart.refresh()
        setBasketData(newBasketData)
    }
   
    const handleCheckout = async (checkoutId, orderData)=>{
       
        try{
            const incomingOrder = await commerce.checkout.capture(
                checkoutId, 
                orderData
            )
            setOrderInfo(incomingOrder)
            refreshBasket();
        }catch(error){
            setOrderError(
                (error.data && error.data.error && error.data.error.message) ||
                'An error occured.'
            ) 
            // console.log(error)
        }
    }

    useEffect(() => {
      fetchProducts()
      fetchBasketData()
     
    }, [])

    //console.log(basketData.total_items)
    return (
        <Router>
            <div>
                <Navbar basketItem={basketData.total_unique_items} 
                totalCost= {(basketData.subtotal && basketData.subtotal.formatted_with_symbol) || '0.00'}></Navbar>
                <Switch>
                    <Route exact path='/'>
                        <Products products={products} addProduct={addProduct}></Products>
                    </Route>

                    <Route  path='/basket'>
                        <Basket
                            basketData={basketData}
                            updateProduct={updateProduct}
                            handleEmptyBasket={handleEmptyBasket}
                            RemoveItemFromBasket={RemoveItemFromBasket}>
                        </Basket>
                    </Route>

                    <Route  path='/checkout'>
                        <Checkout 
                            basketData={basketData} 
                            handleCheckout={handleCheckout}
                            orderError={orderError}
                            orderInfo={orderInfo}>
                        </Checkout>
                    </Route>
                </Switch>
                <Footer></Footer>
            </div>
        </Router>
    )
}

export default App
