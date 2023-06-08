import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'

const Service = [
  {title:"Formation", img:"assets/img/domiciliation.jpeg" ,content:"text lorem epsom"},
  {title:"Formation", img:"assets/img/domiciliation.jpeg" ,content:"text lorem epsom"},
  {title:"Formation", img:"assets/img/domiciliation.jpeg" ,content:"text lorem epsom"},
  {title:"Formation", img:"assets/img/domiciliation.jpeg" ,content:"text lorem epsom"},
  {title:"Formation", img:"assets/img/domiciliation.jpeg" ,content:"text lorem epsom"},
  {title:"Formation", img:"assets/img/domiciliation.jpeg" ,content:"text lorem epsom"},
  {title:"Formation", img:"assets/img/domiciliation.jpeg" ,content:"text lorem epsom"},
  {title:"Formation", img:"assets/img/domiciliation.jpeg" ,content:"text lorem epsom"}
]
export default function Services() {
  return (
    <>
      <div className='bar-1' >
        <img src='assets/img/icon-service.png' alt='icon-service'/>
        <p> L’externalisation comptable au service de la gestion d’entreprise</p>
      </div>
      <div className='title-services'>
        <h1 >Nos Services</h1>
      </div>
      <main id='services'>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/chart-icon.png' alt='icon-chart'/>
          </div>
          <h1 className='title-service'>Création D'entreprise</h1>
          <p className='desc-service'>description about service lorem epsom not all
            but should write somthing .</p>
          <div className='btn-show-me'>
          <Link to="/Servicepage" state={{Service:Service[1]}}> 
          Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/chart-icon.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Domiciliation</h1>
          <p className='desc-service'>description about service lorem epsom not all
            but should write somthing .</p>
          <div className='btn-show-me'>
            <Link to=''> Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/chart-icon.png' alt='icon-chart'/>
          </div>
          <h1 className='title-service'>Comptabilité & Fiscalité</h1>
          <p className='desc-service'>description about service lorem epsom not all
            but should write somthing .</p>
          <div className='btn-show-me'>
            <Link to=''> Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/chart-icon.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Déclarations fiscales</h1>
          <p className='desc-service'>description about service lorem epsom not all
            but should write somthing .</p>
          <div className='btn-show-me'>
            <Link to=''> Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/chart-icon.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Formation</h1>
          <p className='desc-service'>description about service lorem epsom not all
            but should write somthing .</p>
          <div className='btn-show-me'>
            <Link to="/Servicepage" state={{Service:Service[2]}}> 
              Show me more
            </Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/chart-icon.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Conseil</h1>
          <p className='desc-service'>description about service lorem epsom not all
            but should write somthing .</p>
          <div className='btn-show-me'>
            <Link to=''> Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/chart-icon.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Traitement de la Paie</h1>
          <p className='desc-service'>description about service lorem epsom not all
            but should write somthing .</p>
          <div className='btn-show-me'>
            <Link to=''> Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/chart-icon.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Solutions informatiques </h1>
          <p className='desc-service'>description about service lorem epsom not all
            but should write somthing .</p>
          <div className='btn-show-me'>
            <Link to=''> Show me more</Link>
          </div>
        </div>
      </main>
    </>
  )
}
