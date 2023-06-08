import React from 'react'
import './Nospack.css'
import { Link } from 'react-router-dom'
export default function Nospack() {
  return (
    <section className='Nospack'>
      <h1 className='title-packs'>Nos Packs</h1>
      <div className='packs'>
        <div className='item-pack p-item1' >
          <div className='type-pack'>
            <h2 >STANDARD</h2>
          </div>
          <div className='price'>
            <h1>5000DH</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled</p>
          </div>
          <div className='curved'>
            <div id="curved-corner-bottomright"></div>
          </div>
          <div className='desc-price'>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <Link to=''>Demander un Devis</Link>
            </div>
          </div>

        </div>

        <div className='item-pack p-item2' >
          <div className='type-pack'>
            <h2 >PREMIUM</h2>
          </div>
          <div className='price'>
            <h1>15000DH</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled</p>
          </div>
          <div className='curved'>
            <div id="curved-corner-bottomright"></div>
          </div>
          <div className='desc-price'>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <Link to=''>Demander un Devis</Link>
            </div>
          </div>

        </div>


        <div className='item-pack p-item3' >
          <div className='type-pack'>
            <h2 >BUSINESS</h2>
          </div>
          <div className='price'>
            <h1>10000DH</h1>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took Link galley of type and scrambled</p>
          </div>
          <div className='curved'>
            <div id="curved-corner-bottomright"></div>
          </div>
          <div className='desc-price'>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <img src='assets/img/checked.png' alt='icon-checked' />
              <p> lorem ipsum dolor sit amet</p>
            </div>
            <div>
              <Link to='/rendezvous'>Demander un Devis</Link>
            </div>
          </div>

        </div>


      </div>
    </section>
  )
}
