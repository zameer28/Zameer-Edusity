import React from 'react'
import './Hero.css'
import Dark_arrow from "../../assets/dark-arrow.png"


const Hero = () => {
    return (
        <div className='hero container'>
            <div className="hero_text">
                <h1>We Ensure education for a better World</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse inventore illum asperiores? Neque excepturi dolorem porro hic sequi eum accusantium.</p>
                <button className='btn'>Explore More<img src={Dark_arrow} alt="dark-arrow" /> </button>
            </div>
        </div>
    )
}

export default Hero
