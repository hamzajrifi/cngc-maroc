import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='footer'>
            <div className='info-footer'>
                <div className='logo-nav logo-footer'>
                    <Link to='#'>
                        <img src='assets/img/logo.png' alt='img-logo-footer-cngc' />
                        <h1 >CNGC-Maroc</h1>
                    </Link>
                </div>
                <p className='text-info-footer'>société CGNCMAROC SARL comptable Agréé par l'Etat</p>
                <div className='cosial-icon'>
                    <img src='assets/img/icon-facebook.png' alt='icon-facebook'/>
                    <img src='assets/img/whatssap-icon.png' alt='icon-whatssap'/>
                    <img src='assets/img/instagram-icon.png'alt='icon-instagram' />
                    <img src='assets/img/linkden-icon.png'  alt='icon-linkden'/>
                </div>
            </div>
            <div className='grid-footer'>
                <div className='forClient'>
                    <div className='title-client'>

                        <img className='img-icon-client' alt='icon-client' src='assets/img/icon-business.png' />
                        <h1>Pour Le Client</h1>
                    </div>
                    <div className='footer-info'>
                        <img className='icon-address'alt='icon-address' src='assets/img/icon-phone.png' />
                        <p>+212530-010-257</p>
                    </div>
                    <div className='footer-info'>
                        <img className='icon-address' alt='icon-email' src='assets/img/icon-mail.png' />
                        <p>Contact@cngc.ma</p>
                    </div>
                    <div className='footer-info'>
                        <img className='icon-address' alt='icon-email' src='assets/img/icon-mail.png' />
                        <p>Info@cngc.ma</p>
                    </div>
                    <div className='footer-info'>
                        <img className='icon-address' alt='icon-maps' src='assets/img/icon-maps.png' />
                        <p>Av. My. EL Hassan 1 ResidenceAiboudi 4eme etage Appt.N 26 Temara</p>
                    </div>
                </div>
                <div className='Horaires'>
                    <div className='title-client'>

                        <img className='img-icon-client' alt='icon-horaires' src='assets/img/horaires.png' />
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
