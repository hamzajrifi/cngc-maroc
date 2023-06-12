import React, { useState } from 'react'
import Calendar from '../Calendar/Calendar'
import './Rendez-vous.css'

const firstComponent = () => {
  return <form action="/rendez-vous" method="POST">
  <div id="regForm" >
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
  </div>
</form>
}
const secondComponent = () => {
  return (
    <div className='slid-calendar' >
      <Calendar />
    </div>
    )
}
const thirdComponent = () => {

  return <form>
        <div className='item-rendez-vous item-form '>
          <label form='email'>Nom et Prénom</label>
          <input id='email' type='text' name='input-email' title='Input title' placeholder='Enter Raison Sociale/Nom et Prénom '></input>
        </div>
        <div className='item-rendez-vous item-form '>
          <label form='email'>Email</label>
          <input id='email' type='text' name='input-email' title='Input title' placeholder='Enter your Email '></input>
        </div>
        <div className='item-rendez-vous item-form '>
          <label form='email'>Phone</label>
          <input id='email' type='text' name='input-email' title='Input title' placeholder='Enter your Phome '></input>
        </div>
    </form>
}
const finalComponent = () => {
  return <div>
    <img src='assets/img/checkmark.png' alt='checkmarked-icon' />
    </div>
}

export default function RendezVous() {
  const [steps, setSteps] = useState([
    { key: 'firstStep', label: 'Choix de La prestation', isDone: true, component: firstComponent },
    { key: 'secondStep', label: 'Choix du créneau', isDone: false, component: secondComponent },
    { key: 'thirdStep', label: 'Validation', isDone: false, component: thirdComponent },
    { key: 'finalStep', label: 'success rendez vous', isDone: false, component: finalComponent },
  ]);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert('You have completed all steps.');
      return;
    }
   
    const index = steps.findIndex(x => x.key === activeStep.key);
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = true;
      return x;
    }))
    setActiveStep(steps[index + 1]);
  }

  const handleBack = () => {
    const index = steps.findIndex(x => x.key === activeStep.key);
    if (index === 0) return;
   
    setSteps(prevStep => prevStep.map(x => {
      if (x.key === activeStep.key) x.isDone = false;
      return x;
    }))
    setActiveStep(steps[index - 1]);
  }

  return (
    <section className='wizard' id='wizard-rendezVous'>
    <h1>{activeStep.label}</h1>
      <div className="steps">
          <ul className="nav">
            {steps.map((step, i) => {
              return <li key={i} className={`${activeStep.key === step.key ? 'active' : ''} ${step.isDone ? 'done' : ''}`}>
                <div>Step {i + 1}<br /><span>{step.label}</span></div>
              </li>
            })}
          </ul>
        </div>
        <div className="step-component">
          {activeStep.component()}
        </div>
        <div className='btn-form-rendez-vous'>
          <button className='btn-1' id="prevBtn" value="Back" onClick={handleBack} disabled={steps[0].key === activeStep.key}>Précédent</button>
          <button className='btn-2' id="nextBtn" value={steps[steps.length - 1].key !== activeStep.key ? 'Next' : 'Submit'} onClick={handleNext}>Suivent</button>
        </div>
    </section>
  )
}
