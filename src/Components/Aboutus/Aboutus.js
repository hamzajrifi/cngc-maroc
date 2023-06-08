import React from 'react'
import './Aboutus.css'
import { Link } from 'react-router-dom'

export default function Aboutus() {
    return (
        <div className='aboutusPage'>
            <section className='aboutus-slid'>
                <div className='content-aboutus'>
                    <h1>About us</h1>
                    <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled it to make Link type specimen book. It has survived not only five centuries,</p>
                </div>
                <div className='img-slid-aboutus'>
                    <img src='assets/img/aboutusimg.png' alt='slide-aboutus' />
                </div>
            </section>

            <div className='bar-2'>
                <img src='assets/img/icon-box.png'  alt='icon-box'/>
                <div className='bar2-text'>
                    <h3 className='text-bar-contactus'> Contact us</h3>
                    <p className=''>Or Take Rendez-Vous</p>
                </div>
                <Link to='/rendez-vous'>TAKE RENDEZ-VOUS</Link>
            </div>

            <section className='info-section'>

                <div className='info-content'>
                    <div className='item-info'>
                        <img src='assets/img/mail_icon.png' alt='icon-phone' />
                        <div className='text-content-info'>
                            <h2>Email</h2>
                            <p>Contact@cngc.ma</p>
                        </div>
                    </div>
                </div>
                <div className='info-content'>
                    <div className='item-info'>
                        <img src='assets/img/mail_icon.png' alt='icon-phone' />
                        <div className='text-content-info'>
                            <h2>Email</h2>
                            <p>Info@cngc.ma</p>
                        </div>
                    </div>
                </div>
                <div className='info-content'>
                    <div className='item-info'>
                        <img src='assets/img/phone_icon.png' alt='icon-phone' />
                        <div className='text-content-info'>
                            <h2>Phone Number</h2>
                            <p>+212 530-010-257</p>
                        </div>
                    </div>
                </div>
                <div className='info-content'>
                    <div className='item-info'>
                        <img src='assets/img/map_icon.png' alt='icon-phone' />
                        <div className='text-content-info'>
                            <h2>Address</h2>
                            <p>Av. My. EL Hassan 1 Residence Aiboudi 4eme etage Appt. N 26 Temara</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='map-section'>
                <iframe title='maps-cngc' width="100%" height="600" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <Link to="https://www.maps.ie/distance-area-calculator.html">distance maps</Link>
                </iframe>
                
            </section>
            <div className='btn-contact'>
                    <Link className='btn-1' to='/contactus'>Contact us</Link>
                    <Link className='btn-2' to='/rendezvous'> Rendez-Vous</Link>
            </div>
        </div>
    )
}
