import React from 'react'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='info-footer'>
                <div className='logo-nav logo-footer'>
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
            <div className='grid-footer'>
                <div className='forClient'>
                    <div className='title-client'>

                        <img className='img-icon-client' src='assets/img/icon-business.png' />
                        <h1>Pour Le Client</h1>
                    </div>
                    <div>
                        <img className='icon-address' src='assets/img/icon-phone.png' />
                        <p>+212530-010-257</p>
                    </div>
                    <div>
                        <img className='icon-address' src='assets/img/icon-mail.png' />
                        <p>+212530-010-257</p>
                    </div>
                    <div>
                        <img className='icon-address' src='assets/img/icon-mail.png' />
                        <p>+212530-010-257</p>
                    </div>
                    <div>
                        <img className='icon-address' src='assets/img/icon-maps.png' />
                        <p>+212530-010-257</p>
                    </div>
                </div>
                <div className='Horaires'>
                    <div className='title-client'>

                        <img className='img-icon-client' src='assets/img/horaires.png' />
                        <h1>Pour Le Client</h1>
                    </div>
                    <div className='content-horaire'>
                        <p className='text-horaires'>Lundi      :       09:00 - 17:00</p>
                        <p className='text-horaires'>Mardi       :       09:00 - 17:00</p>
                        <p className='text-horaires'>Mercredi :       09:00 - 17:00</p>
                        <p className='text-horaires'>Jeudi        :       09:00 - 17:00</p>
                        <p className='text-horaires'>Vendredi :     09:00 - 12:00/14:00 - 17:00</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
