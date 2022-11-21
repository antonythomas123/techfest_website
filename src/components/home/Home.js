import React from 'react'
import Cards from '../cards/Cards'
import Footer from '../footer/Footer'
import Navbar from '../navbar/Navbar'
import Poster from '../poster/Poster'

function Home() {
  return (
    <div className='bg-black text-[white] font-[Quicksand]'>
        <Navbar/>
        <Poster/>
        <Cards/>
        <Footer/>
    </div>
  )
}

export default Home