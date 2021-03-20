import {Home, Search,Info } from '@material-ui/icons'
import React from 'react'
import { Link } from 'react-router-dom'

export default function BottomNav() {
    return (
     <div id="nav">
        <Link className='nav__link nav__link--active' to='/'>
            <Home className='nav__icon'></Home>
            <span className='nav__text'>Home</span>
        </Link>
        {/* 
        <Link className='nav__link' to='/category'>
           <Category className='nav__icon'></Category>
            <span className='nav__text'>Categories</span>
        </Link> */}

        <Link className='nav__link'  to='/search'>
            <Search className='nav__icon'></Search>
            <span className='nav__text'>Search</span>
        </Link>

        <Link className='nav__link'  to='/about'>
            <Info  className='nav__icon' ></Info>
            <span className='nav__text'>About me</span>
        </Link>
     </div>
    )
}
 