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