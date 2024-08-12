import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about_left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-img' onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about_right">
                <h3>About University</h3>
                <h2>Nuturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias, quis a, provident totam iste quod cum vel neque recusandae, consectetur nihil! Porro eum rerum cum delectus quisquam adipisci expedita asperiores?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa facilis aspernatur rem iste eum dolorem eius repellat praesentium illum veritatis.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem illum dolores corporis quia. Autem asperiores suscipit vitae inventore, natus reiciendis.</p>
            </div>
        </div>
    )
}

export default About
