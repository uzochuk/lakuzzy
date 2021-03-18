import React from 'react'
import {Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField} from '@material-ui/core'
import {Link} from 'react-router-dom'

const CheckoutForm = ({
    user={},
    handleChange,
    handleSubmit,
    handleSelectChange,
})=> {
    return (
       <form onSubmit={handleSubmit} autoComplete='on'>
           
           <Grid container spacing={4}>
               <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id='first-name'
                        name='firstName'
                        label='First Name'
                        value={user.firstName}
                        onChange={handleChange}
                    />
               </Grid>

               <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id='last-name'
                        name='lastName'
                        label='Last Name'
                        value={user.lastName}
                        onChange={handleChange}
                    />
               </Grid>

               <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id='email'
                        name='email'
                        type='email'
                        label='Email'
                        value={user.email}
                        onChange={handleChange}
                    />
               </Grid>

               <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id='address'
                        name='address'
                        label='Address line 1'
                        value={user.address}
                        onChange={handleChange}
                    />
               </Grid>

               <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id='city'
                        name='city'
                        label='City'
                        value={user.city}
                        onChange={handleChange}
                    />
               </Grid>

               <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        fullWidth
                        id='post-code'
                        name='postCode'
                        label='Zip / Postal code '
                        value={user.postCode}
                        onChange={handleChange}
                    />
               </Grid>

               <Grid item xs={12} sm={6}>
                   <FormControl fullWidth>
                       <InputLabel id='shipping-country-select-value'>
                           Shipping Country
                       </InputLabel>
                       <Select
                        required
                        name='shippingCountry'
                        id='shipping-country-select'
                        value={user.shippingCountry.code || ''}
                        labelId='shipping-country-select-label'
                        onChange={(e)=> handleSelectChange(e, 'shippingCountries')}
                        >
                            {
                                user.shippingCountries.map((country) => (
                                  
                                         <MenuItem key={country.code} value={country.code}>
                                         {country.name}
                                         </MenuItem>
                                       
                                   
                                ))
                            }
                        </Select>
                   </FormControl>
               </Grid>

               <Grid item xs={12} sm={6}>
                   <FormControl fullWidth>
                       <InputLabel id='shipping-subdivision-select-value'>
                           Shipping Subdivision
                       </InputLabel>
                       <Select
                        required
                        name='shippingSubdivision'
                        id='shipping-subdivision-select'
                        value={user.shippingSubdivision.code || ''}
                        labelId='shipping-subdivision-select-label'
                        onChange={(e)=> handleSelectChange(e, 'shippingSubdivisions')}
                        >
                            {
                                user.shippingSubdivisions.map((subdivision) => (
                                    
                                         <MenuItem key={subdivision.code} value={subdivision.code}>
                                         {subdivision.name}
                                         </MenuItem>
                                )
                                   
                                )
                            }
                        </Select>
                   </FormControl>
               </Grid>



               <Grid item xs={12} sm={6}>
                   <FormControl fullWidth>
                       <InputLabel id='shipping-options-select-value'>
                           Shipping Options
                       </InputLabel>
                       <Select
                        required
                        name='shippingOptions'
                        id='shipping-subdivision-select'
                        value={user.shippingOption.id}
                        labelId='shipping-options-select-label'
                        onChange={(e)=> handleSelectChange(e, 'shippingOptions')}
                        >
                            {
                                user.shippingOptions.map((option) => (
                                  
                                         <MenuItem key={option.id} value={option.id}>
                                         {`${option.description} - {${option.price.formatted_with_symbol}}`}
                                         </MenuItem>
                                  
                                     )
                                )
                            }
                        </Select>
                   </FormControl>
               </Grid>
           </Grid>

           <div className='actions'>
               <Button size='medium' to='/basket' component={Link} variant='contained' color='secondary'>Back</Button>
               <Button type='submit' size='medium' color='primary' variant='contained'>Next</Button>
           </div>
       </form>
    )
}

export default CheckoutForm
