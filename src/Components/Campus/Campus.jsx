import React from 'react'
import './Campus.css'
import galler_1 from '../../assets/gallery-1.png'
import galler_2 from '../../assets/gallery-2.png'
import galler_3 from '../../assets/gallery-3.png'
import galler_4 from '../../assets/gallery-4.png'
import white_arrow from '../../assets/white-arrow.png'
const Campus = () => {
    return (
        <div className='campus'>
            <div className="gallery">
                <img src={galler_1} alt="gallery-image" />
                <img src={galler_2} alt="gallery-image" />
                <img src={galler_3} alt="gallery-image" />
                <img src={galler_4} alt="gallery-image" />
            </div>
            <button className='btn dark_btn'>View More <img src={white_arrow} alt="white-arrow" /></button>
        </div>
    )
}

export default Campus
