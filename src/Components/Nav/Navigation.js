import React from 'react'
import "./Navigation.css"
export default function Navigation() {
    return (
        <nav className='top-nav'>
            <div className='logo-nav'>
                <a href='#'>
                    <img src='assets/img/logo.png' alt='img-logo-nav-cngc' />
                    <p >CNGC-Maroc</p>
                </a>
            </div>
            <div className='nav-content'>
                <a href='#'>Home</a>
                <a href='#'> Services </a>
                <a href='#'> Blog</a>
                <a href='#'> About</a>
            </div>
        </nav>
    )
}
