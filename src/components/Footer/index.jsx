import React from 'react'
import './style.css'
const Footer = ()=> {
    const date= new Date();
    const fullYear = date.getFullYear();
    return (
        <footer className='footer'>
            <p>
                 &copy;  lakuzzycollection {fullYear}
            </p>
        </footer>
    )
}

export default Footer
