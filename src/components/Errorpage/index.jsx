import {Typography } from '@material-ui/core';
import { ErrorOutlineOutlined } from '@material-ui/icons';
import React from 'react'
import './style.css';

const Errorpage=()=>{
    return (
        <div container className='main'>
           <ErrorOutlineOutlined className='svg' size='large'></ErrorOutlineOutlined>
            <Typography variant='body' justify='center' className='errorMsg' color='secondary' gutterBottom>
             An error occured, check your internet connection and try again.
            </Typography>
           
        </div>
    )
}

export default Errorpage
