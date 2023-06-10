import React from 'react'
import './Bar.css'
import { Link } from 'react-router-dom'

export default function Bar() {
    return (
        <div className='bar-2'>
            <img src='assets/img/icon-box.png' alt='icon-box'/>
            <div className='bar2-text'>
                <h3 className=''> Découvrez nos Packs et réglez en ligne.</h3>
                <p className=''>TARIFS & COMMANDE</p>
            </div>
            <Link to='/nospack'>CONSULTEZ NOTRE OFFRE</Link>
        </div>
    )
}
