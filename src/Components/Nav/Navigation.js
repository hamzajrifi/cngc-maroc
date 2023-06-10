import React from 'react'
import "./Navigation.css"
import { Link } from 'react-router-dom'
export default function Navigation() {
    return (
        <nav className='top-nav'>
            <div className='logo-nav'>
                <Link to='/'>
                    <img src='assets/img/logo.png' alt='img-logo-nav-cngc' />
                    <h1 >CNGC-Maroc</h1>
                </Link>
            </div>
            <div className='nav-content'>
                <Link to='/'>Home</Link>
                {/* <Link to='#services'> Services </Link> */}
                <Link to='/nospack'> Nos pack</Link>
                <Link to='/aboutus'> About us</Link>
                <Link className='btn-1' to='/rendezvous'> Rendez-Vous</Link>
            </div>
        </nav>
    )
}
