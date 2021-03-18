import React from 'react'
import {CircularProgress} from '@material-ui/core'
import './style.css'

const  Spinner=()=> {
    return (
        <div className='spinner'>
            <CircularProgress></CircularProgress>
        </div>
    )
}

export default Spinner
