import React from 'react'
import Side from './Slide/Side'
import Services from './Services/Services'
import Bar from './bar/Bar'
import NosPartenaires from './NosPartenaires/NosPartenaires'
import Footer from './Footer/Footer'

export default function Home() {
    return (
        <>
            <Side />
            <Services />
            <Bar />
            <NosPartenaires />
            <Footer />
        </>
    )
}
