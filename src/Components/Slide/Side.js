import React from 'react'
import './Side.css'
export default function Side() {
    return (
        <main className='slide'>
            <div className='text-slid'>
                <p className='title-content'>L’externalisation comptable</p>
                <p className='desc-content'>au service de la gestion d’entreprise</p>
                <div className='btn-slide'>
                    <a className='btn1' href='/contactus'>Contact us</a>
                    <a className='btn2' href='/rendezvous'>Rendez-vous</a>
                </div>
            </div>
            <div className='img-slide'>
                <img src='assets/img/teamwork.jpeg' />
            </div>

        </main>
    )
}
