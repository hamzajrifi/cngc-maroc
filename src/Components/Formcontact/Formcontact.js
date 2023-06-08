import React from 'react'
import './Formcontact.css'
import { Link } from 'react-router-dom'

export default function Formcontact() {
    return (
        <section className='slid-form'>
            <div className='img-form'>
                <img src='assets/img/Checklist-from.png' alt='form-contact-us' />
            </div>
            <form className='content-form'>
                <div className='item1 g-form'>
                    <div className='item-form'>
                        <label form='firstName'>First Name</label>
                        <input id='firstName' type='text' name='input-name' title='Input title' placeholder='Enter your First Name '></input>
                    </div>
                    <div className='item-form'>
                        <label form='LasttName'>Last Name</label>
                        <input id='LasttName' type='text' name='input-lastname' title='Input title' placeholder='Enter your Last Name '></input>
                    </div>
                </div>
                <div className='item-form g-form'>
                    <label form='email'>Email</label>
                    <input id='email' type='text' name='input-email' title='Input title' placeholder='Enter your Email '></input>
                </div>
                <div className='item-form g-form'>
                    <label form='yourcontact'>Your Contact</label>
                    <input id='yourcontact' type='text' name='input-yourcontact' title='Input title' placeholder='Enter your Contact '></input>
                </div>
                <div className='item-form g-form'>
                    <label form='Message'>Message</label>
                    <input id='Message' type='text' name='input-Message' title='Input title' placeholder='Enter your Message'></input>
                </div>
                <div className='btn-form'>
                    <Link to='#'> SUBMIT</Link>
                </div>
            </form>

        </section>
    )
}
