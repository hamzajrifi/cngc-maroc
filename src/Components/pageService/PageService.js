import React from 'react'
// import { Link, useLocation } from 'react-router-dom';
// const data = useLocation().state.service;

export default function PageService() {
  return (
    <section className='pageService'>
        <div className='Slide-service'>
            <div className='img-slide-service'>
                <img src='assets/img/domiciliation.jpeg' alt='' />
            </div>
            <div className='content-text-service'>
                <h1 className='title-service'>Domiciliation</h1>
                <p className='text-service'>Vous êtes hésitant et Vous voulez entamer la domiciliation de votre société à Rabat, Temara ou Casablanca mais vous n’avez pas de siège social, ne vous inquiétez pas, Notre cabinet vous guidera facilement pour franchir cette étape.</p>
            </div>
        </div>
    </section>
  )
}
