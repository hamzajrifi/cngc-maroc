import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='info-footer'>
                <div className='logo-nav'>
                    <a href='#'>
                        <img src='assets/img/logo.png' alt='img-logo-footer-cngc' />
                        <p >CNGC-Maroc</p>
                    </a>
                </div>
                <p className='text-info-footer'>société MAROFISCAL SARL comptable Agréé par l'Etat</p>
                <div className='cosial-icon'>
                    <img src='assets/img/icon-facebook.png' />
                    <img src='assets/img/whatssap-icon.png' />
                    <img src='assets/img/instagram-icon.png' />
                    <img src='assets/img/linkden-icon.png' />
                </div>
            </div>
            <div className='forClient'>
                <img className='img-icon-client' src='assets/img/logo.png' />
                <h1>Pour Le Client</h1>
                <div>
                    <img className='icon-address' src='#' />
                    <p>+212530-010-257</p>
                </div>
                <div>
                    <img className='icon-address' src='#' />
                    <p>+212530-010-257</p>
                </div>
                <div>
                    <img className='icon-address' src='#' />
                    <p>+212530-010-257</p>
                </div>
                <div>
                    <img className='icon-address' src='#' />
                    <p>+212530-010-257</p>
                </div>
            </div>
            <div></div>
        </footer>
    )
}
