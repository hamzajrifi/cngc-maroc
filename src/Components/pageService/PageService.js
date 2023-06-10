import React from 'react'
import './PageService.css'
import { useLocation } from 'react-router-dom';

export default function PageService() {
  const data = useLocation().state.Service;
  console.log(data);
  return (
    <section className='pageService'>
      <div className='heigh-top'></div>
        <div className='Slide-service'>
            <div className='img-slide-service'>
                <img src={data.img} alt='' />
            </div>
            <div className='content-text-service'>
                <h1 className='title-service'>{data.title}</h1>
                <p className='text-service'>
                {data.content}
                </p>
                {data.list ? <ul className='list-service'>
                    {
                      data.list.map( el => (
                        <li> {el} </li>
                      ))}
                </ul> : null
                }
            </div>
            <div className='barServiseSlide'></div>
        </div>
    </section>
  )
}
