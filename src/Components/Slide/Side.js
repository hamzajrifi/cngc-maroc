import React from 'react'
import './Side.css'
import { Link } from 'react-router-dom'
export default function Side() {
    return (
        <main className='slide'>
            <div className='text-slid'>
                <h1 className='title-content'>L’externalisation comptable</h1>
                <p className='desc-content'>au service de la gestion d’entreprise</p>
                <div className='btn-slide'>
                    <Link className='btn1' href='/contactus'>Contact us</Link>
                    <Link className='btn2' href='/rendezvous'>Rendez-vous</Link>
                </div>
            </div>
            <div className='img-slide'>
                <img src='assets/img/teamwork.jpeg'  alt='teamwork-icon'/>
            </div>
        </main>
    )
}
