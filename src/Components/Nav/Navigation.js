import React from 'react'
import "./Navigation.css"
export default function Navigation() {
    return (
        <nav className='top-nav'>
            <div className='logo-nav'>
                <a href='/'>
                    <img src='assets/img/logo.png' alt='img-logo-nav-cngc' />
                    <h1 >CNGC-Maroc</h1>
                </a>
            </div>
            <div className='nav-content'>
                <a href='/'>Home</a>
                <a href='#services'> Services </a>
                <a href='/nospack'> Nos pack</a>
                <a href='#'> About us</a>
            </div>
        </nav>
    )
}
