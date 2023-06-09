import React from 'react'
import './Services.css'
import { Link } from 'react-router-dom'

const Service = [
  {
    title:"Création D'entreprise", 
    img:"assets/img/domiciliation.jpeg" ,
    content:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Excepteur sint occaecat cupidatat non proident,."
  },
  {
    title:"Domiciliation",
    img:"assets/img/domiciliation.jpeg",
    content:'Vous êtes hésitant et Vous voulez entamer la domiciliation de votre société à Rabat, Temara ou Casablanca mais vous n’avez pas de siège social, ne vous inquiétez pas, Notre cabinet vous guidera facilement pour franchir cette étape.'
  },
  {
    title:"Comptabilité & Fiscalité", 
    img:"assets/img/domiciliation.jpeg" ,
    content:"text lorem epsom"
  },
  {
    title:"Déclarations fiscales", 
    img:"assets/img/domiciliation.jpeg" ,
    content:"Les obligations fiscales sont toujours plus contraignantes",
    list:["Établissement des déclarations fiscales de l’entreprise et pour les dirigeants (TVA, IS, IR, RAS …)", "Établissement des déclarations fiscales pour particuliers (, revenus fonciers, revenus mobiliers)",
    "déclarations de régime d’auto-entrepreneur", "déclarations CPU", "Assistance en cas de contrôle par l’administration fiscale ou sociale"]
  },
  {
    title:"Formation",
    img:"assets/img/domiciliation.jpeg" ,
    content:"La formation constitue une des clés de réussite des sociétés désirant développer davantage la compétence de leurs ressources humaines. Dans ce contexte, notre cabinet vous propose une série de formations de haut niveau, variées et actualisées, pour répondre au besoin accru des entreprises sur les standards qualités Toutes les formations sont réalisées par des formateurs compétents, expérimentés, des spécialistes à:",
    list:["Comptabilité général approfondie", "Fiscalité des entreprises", "Traitement de salaire",
    "Comptabilité de gestion", "Comptabilité des sociétés", "Droit des affaires"]
  },
  {
    title:"Conseil", 
    img:"assets/img/domiciliation.jpeg" ,
    content:"text lorem epsom"
  },
  {
    title:"Traitement de la Paie", 
    img:"assets/img/domiciliation.jpeg" ,
    content:"text lorem epsom"
  },
  {
    title:"Solutions informatiques", 
    img:"assets/img/domiciliation.jpeg" ,
    content:"text lorem epsom"
  },
  {
    title:"Autre", 
    img:"assets/img/domiciliation.jpeg" ,
    content:"Nous vous proposons d’assurer le secrétariat juridique de votre entreprise",
    list:["Préparation de l’ordre du jour des assemblées générales AGO-AGEO", "convocation des associés pour les assemblées générales ordinaire ou extraordinaire", 
  "Proposition Assistance à la rédaction du procès-verbal de l’assemblée générale",
    "Transfert des sièges sociaux", "Cessions des parts sociaux", "Augmentation et réduction du capital",
    "Toutes les modifications statutaires",
    "Transfert de la société en cas de décès d’un associe aux héritiers",
    "Assistance aux formalités de dépôt des documents obligatoires au greffe aux Tribunaux",
    "Mise à jour des documents de la société", "transformation, dissolution et liquidation"]
  }

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
            <img src='assets/img/work-list.png' alt='icon-chart'/>
          </div>
          <h1 className='title-service'>Création D'entreprise</h1>
          <p className='desc-service'>{Service[0].content.substring(0, 84)}....</p>
          <div className='btn-show-me'>
          <Link to="/Servicepage" state={{Service:Service[0]}}>
          Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/statistik.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Domiciliation</h1>
          <p className='desc-service'>{Service[1].content.substring(0, 84)}....</p>
          <div className='btn-show-me'>
          <Link to="/Servicepage" state={{Service:Service[1]}}>
          Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/cashback.png' alt='icon-chart'/>
          </div>
          <h1 className='title-service'>Comptabilité & Fiscalité</h1>
          <p className='desc-service'>{Service[2].content.substring(0, 84)}....</p>
          <div className='btn-show-me'>
            <Link to="/Servicepage" state={{Service:Service[2]}}>
            Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/revenue.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Déclarations fiscales</h1>
          <p className='desc-service'>{Service[3].content.substring(0, 84)}....</p>
          <div className='btn-show-me'>
            <Link to="/Servicepage" state={{Service:Service[3]}}>
            Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/strategy.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Formation</h1>
          <p className='desc-service'>{Service[4].content.substring(0, 84)}....</p>
          <div className='btn-show-me'>
            <Link to="/Servicepage" state={{Service:Service[4]}}> 
              Show me more
            </Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/report.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Conseil</h1>
          <p className='desc-service'>{Service[5].content.substring(0, 84)}....</p>
          <div className='btn-show-me'>
            <Link to="/Servicepage" state={{Service:Service[5]}}>
            Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/chart.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Traitement de la Paie</h1>
          <p className='desc-service'>{Service[6].content.substring(0, 84)}....</p>
          <div className='btn-show-me'>
            <Link to="/Servicepage" state={{Service:Service[6]}}>
            Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/income.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Solutions informatiques </h1>
          <p className='desc-service'>{Service[7].content.substring(0, 84)}....</p>
          <div className='btn-show-me'>
            <Link to="/Servicepage" state={{Service:Service[7]}}>
            Show me more</Link>
          </div>
        </div>
        <div className='block-service'>
          <div className='icon-service'>
            <img src='assets/img/income.png' alt='icon-chart' />
          </div>
          <h1 className='title-service'>Autre </h1>
          <p className='desc-service'>{Service[8].content.substring(0, 84)}....</p>
          <div className='btn-show-me'>
            <Link to="/Servicepage" state={{Service:Service[8]}}>
            Show me more</Link>
          </div>
        </div>
      </main>
    </>
  )
}
