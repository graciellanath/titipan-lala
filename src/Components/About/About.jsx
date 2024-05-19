import React, { useEffect } from 'react';
import './About.css';
import about_img from '../../assets/about.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 4000, 
      once: false, 
      offset: 300, 
    });
  }, []);

  return (
    <div 
      className='about flex align-middle items-center justify-end flex-wrap lg:flex-nowrap w-full bg-[#A9B388] drop-shadow-lg shadow-[#695b30] m-6 md:my-12 md:mx-52 relative overflow-hidden rounded-2xl'
      data-aos="fade-up" 
    >
      <div className='about-left md:w-[35%] w-full flex justify-center my-4'>
        <img src={about_img} alt="" className='about-img md:w-full justify-center px-4 md:h-96 object-contain' />
      </div>
      <div className='about-right md:w-[65%] w-full text-center z-10'>
        <h1 className='font-bold text-[24px] text-white'>About Central Sulawesi</h1>
        <p className='text-justify text-[#FBFADA] m-4'>Central Sulawesi, a captivating blend of natural wonders, rich cultural heritage, and warm hospitality. Here, towering mountains and cascading waterfalls beckon adventurous souls, offering thrilling hikes and breathtaking vistas.</p>
        <p className='text-justify text-[#FBFADA] m-4'> Ancient traditions and rituals are kept alive through vibrant festivals and intricate handicrafts, showcasing the region's diverse cultural tapestry. Central Sulawesi is not just a destination; it's an immersive journey into the soul of Indonesia, where every corner unveils a new story waiting to be discovered.</p>
      </div>
    </div>
  )
}

export default About;
