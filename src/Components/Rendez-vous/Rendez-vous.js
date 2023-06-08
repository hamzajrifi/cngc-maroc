import React from 'react'
// import Calendar from '../Calendar/Calendar'
import './Rendez-vous.css'

export default function RendezVous() {
  return (
    <section className='wizard' id='wizard-rendezVous'>
      <h1>Choix de La prestation</h1>
      <form >
        <div id="regForm" action="/rendez-vous" method="POST">
          <div className='item-rendez-vous'>
            <label htmlFor="Nature-du-rendez-vous">Nature du rendez-vous </label>
            <select id="Naturedurendezvous" name="Nature-du-rendez-vous">
              <option key='chois-1' value="Sélectionnez">Sélectionnez</option>
              <option key='chois-2' value="Création d’entreprise">Création d’entreprise</option>
              <option key='chois-3' value="Suivi de la comptabilité">Suivi de la comptabilité</option>
              <option key='chois-4' value="Règlements honoraires">Règlements honoraires</option>
              <option key='chois-5' value="Conseil général">Conseil général</option>
              <option key='chois-6' value="Étude de marché">Étude de marché</option>
              <option key='chois-7' value="Modifications">Modifications</option>
              <option key='chois-8' value="Clôture comptabilité">Clôture comptabilité</option>
              <option key='chois-9' value="Dissolution et liquidation">Dissolution et liquidation</option>
            </select>
          </div>
          <div className='item-rendez-vous'>
            <label htmlFor="Vousetes">Vous êtes </label>
            <select name="Vous etes" id="Vousetes">
              <option key='chois-1' value="Sélectionnez">Sélectionnez</option>
              <option key='chois-2' value="Personne morale">Personne morale</option>
              <option key='chois-3' value="Personne physique">Personne physique</option>
              <option key='chois-4' value="Autre">Autre</option>
            </select>
          </div>
          <textarea id="Message_autre" placeholder="Message..." name="Message" cols="40" rows="5"></textarea>
          <div className='slid-calendar' >
            {/* <Calendar /> */}
          </div>
          <div className='btn-form-rendez-vous'>
            {/* <button className='btn-1' id="prevBtn" >Précédent</button> */}
            <button className='btn-2' id="nextBtn" >Suivent</button>
          </div>
        </div>
        <div className='btn-rendez-vous'>
          <span className="step"></span>
          <span className="step"></span>
          <span className="step"></span>
          <span className="step"></span>
        </div>
      </form>

    </section>
  )
}
