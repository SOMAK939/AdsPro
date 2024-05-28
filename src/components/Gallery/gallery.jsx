import React from 'react'
import './gallery.css'
import img_1 from '../../assets/img1.jpg';
import img_2 from '../../assets/img2.jpg';
import img_3 from '../../assets/img3.jpg';
import img_4 from '../../assets/img4.jpg';
import img_5 from '../../assets/img5.jpg';
import img_6 from '../../assets/img6.jpg';
import img_7 from '../../assets/img7.jpg';
import img_8 from '../../assets/img8.jpg';
import img_9 from '../../assets/img9.jpg';

const gallery = () => {
  return (
    <div className='gallery'>
        <h2>Bus,Volvo,Tram Branding</h2>
      <div className="images">
        <img src={img_6} alt="" />
        <img src={img_7} alt="" />
        <img src={img_8} alt="" />
        <img src={img_9} alt="" />

      </div>
    </div>
  )
}

export default gallery
