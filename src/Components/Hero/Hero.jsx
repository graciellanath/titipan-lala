import React from 'react'
import './Hero.css'
import right_arrow from '../../assets/right_arrow.png'
import backgroundH from "../../assets/hero.gif"
import { Link } from 'react-scroll'

const Hero = () => {
  return (
    <div className='hero text-white w-full min-h-screen flex justify-center align-middle items-center'>
      <div className='hero-text text-center px-10'>
        <h1 className='text-6xl font-bold'>Unveiling Central Sulawesi</h1>
        <p className='max-w-[700px] text-xl m-[10px] leading-normal'>Your Gateway To Central Sulawesi</p>
        <Link to='about-right' smooth={true} offset={-165} duration={500} className='btn bg-[#F9F7C9] text-[#1d3029]'>Start Your Journey <img src={right_arrow} alt="" /></Link>
      </div>
    </div>
  )
}

export default Hero
