<<<<<<< HEAD
import {React,useRef} from "react";
import './Gallery.css';
import Navbar from "../components/Navbar/navbar";
import event1 from '../assets/event1.jpeg';
import event2 from '../assets/event2.jpeg';
import event3 from '../assets/event3.jpeg'
import event4 from '../assets/event4.jpeg'
import event5 from '../assets/event5.jpeg'
import event6 from '../assets/event6.jpeg'
import it1 from '../assets/it1.jpeg';
import it2 from '../assets/it2.jpeg';
import it3 from '../assets/it3.jpeg';
import it4 from '../assets/it4.jpeg';
import it5 from '../assets/it5.jpeg';
import it6 from '../assets/it6.jpeg';
import mu1 from '../assets/mu1.jpeg';
import mu2 from '../assets/mu2.jpeg';
import mu3 from '../assets/mu3.jpeg';
import mu4 from '../assets/mu4.jpeg';
import mu5 from '../assets/mu5.jpeg';
import mu6 from '../assets/mu6.jpeg';



const Gallery = () => {
    return (
        <div>
            <Navbar />
            <div className="box1">
            <h1 className="gal">Our Private Events</h1>
            <div className="gallery">
                <div className="image-box active">
                    <img src={event1} alt="Event 1" />
                </div>
                <div className="image-box">
                    <img src={event2} alt="Event 2" />
                </div>
                <div className="image-box">
                    <img src={event3}alt="Event 3" />
                </div>
                <div className="image-box">
                    <img src={event4} alt="Event 4" />
                </div>
                <div className="image-box">
                    <img src={event5} alt="Event 5" />
                </div>
                <div className="image-box">
                    <img src={event6} alt="Event 6" />
                </div>
            </div>
            </div>


            <div className="box2">
            <h1 className="gal">Our IT Clients</h1>
            <div className="gallery">
                <div className="image-box active">
                    <img src={it1} alt="Event 1" />
                </div>
                <div className="image-box">
                    <img src={it2} alt="Event 2" />
                </div>
                <div className="image-box">
                    <img src={it3}alt="Event 3" />
                </div>
                <div className="image-box">
                    <img src={it4} alt="Event 4" />
                </div>
                <div className="image-box">
                    <img src={it5} alt="Event 5" />
                </div>
                <div className="image-box">
                    <img src={it6} alt="Event 6" />
                </div>
            </div>
            </div>



            <div className="box3">
            <h1 className="gal">At Milan Utsav 2021</h1>
            <div className="gallery">
                <div className="image-box active">
                    <img src={mu1} alt="Event 1" />
                </div>
                <div className="image-box">
                    <img src={mu2} alt="Event 2" />
                </div>
                <div className="image-box">
                    <img src={mu3}alt="Event 3" />
                </div>
                <div className="image-box">
                    <img src={mu4} alt="Event 4" />
                </div>
                <div className="image-box">
                    <img src={mu5} alt="Event 5" />
                </div>
                <div className="image-box">
                    <img src={mu6} alt="Event 6" />
                </div>
            </div>
            </div>
        </div>
    );
}

export default Gallery;
=======
import React, { useState } from 'react';
import './Gallery.css'; // Assuming you have a separate CSS file for styles
import Navbar from "../components/Navbar/navbar";
import event1 from '../assets/event1.jpeg';
import event2 from '../assets/event2.jpeg';
import event3 from '../assets/event3.jpeg';
import event4 from '../assets/event4.jpeg';
import event6 from '../assets/event6.jpeg';
import event7 from '../assets/event7.jpeg';

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleRightClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handleLeftClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + carouselItems.length) % carouselItems.length);
  };

  const carouselItems = [
    {
      src: event1,
      alt: "event",
      text: "Costumed Performer",
      description: "In Birthdays",
    },
    {
      src: event2,
      alt: "event",
      text: "Balloons",
      description: "At Birthdays/Parties",
    },
    {
      src: event3,
      alt: "event",
      text: "Decorations",
      description: "In birthdays",
    },
    {
      src: event4,
      alt: "event",
      text: "Flower Decor.",
      description: "For Weddings",
    },
    {
      src: event6,
      alt: "event",
      text: "Car Decor.",
      description: "For Weddings",
    },
    {
      src: event7,
      alt: "event",
      text: "Bouncers/Security",
      description: "Any private event",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="carousel">
        {carouselItems.map((item, index) => {
          const positionClass = 
            index === currentIndex ? "carousel__item--main" : 
            index === (currentIndex - 1 + carouselItems.length) % carouselItems.length ? "carousel__item--left" : 
            index === (currentIndex + 1) % carouselItems.length ? "carousel__item--right" : "";

          return (
            <div className={`carousel__item ${positionClass}`} key={index}>
              <img src={item.src} alt={item.alt} />
              <div className="carousel__text">
                <h3>{item.text}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
        <div className="carousel__btns">
          <button className="carousel__btn" id="leftBtn" onClick={handleLeftClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z" />
            </svg>
          </button>
          <button className="carousel__btn" id="rightBtn" onClick={handleRightClick}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path fill="currentColor" fillRule="evenodd" d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z" />
            </svg>
          </button>
        </div>
      </div>



      <h2>HELLO</h2>
    </>
  );
};

export default Gallery;
>>>>>>> 37984f62b84d531bce4965ac5268148c11804583
