import React from "react";
import Navbar from "../components/Navbar/navbar";

import "./Service.css"; // Import the CSS file for styling
import img1 from '../assets/quote.jpeg';
import img2 from '../assets/byju.jpeg';
import img3 from '../assets/mela_add.jpeg';
import img4 from '../assets/signage.jpeg';
import img5 from '../assets/hoarding.jpg';
import img7 from '../assets/packets.jpeg';
import img8 from '../assets/discsnroom.jpeg';

export default function Service() {
  return (
    <>
      <Navbar className="navbar"/>
      <div className="service-page">
        <div className="overlay">
          <div className="content">
           

            

            

           

           

            <div className="box">
              <div className="img">
                <img src={img4} alt="Signage and Display Solutions" />
              </div>
              <div className="text">
                <h2>Signage and Display Solutions</h2>
                <br />
                <p>
                  Enhance your brand visibility with our wide range of signage and display items. We offer customized solutions including POP (POS) displays, glow signs, banners, dealer boards, display stands, shop gates, standees, flexible stalls, and more. Each item is crafted to meet your specific needs, ensuring maximum impact and brand recognition.
                </p>
                <p>
                  Partner with us to elevate your brand through strategic creative communication, efficient media planning, innovative digital promotions, expertly managed events, and effective retail solutions. Together, we’ll create experiences that resonate with your audience and drive your brand forward.
                </p>
              </div>
            </div>

            <div className="box">
              <div className="img">
                <img src={img7} alt="Retail Communication" />
              </div>
              <div className="text">
                <h2>Retail Communication</h2>
                <br />
                <p>
                  Our innovative communication solutions place us at the forefront of the retail market. We specialize in reaching consumers at the right time and place through tailored display and merchandising solutions. Our professional team designs and develops need-based items for retail outlets, enhancing the shopping experience and driving sales. From eye-catching POP displays to strategically placed merchandising, we create retail environments that captivate and convert.
                </p>
              </div>
            </div>



          </div>
        </div>
      </div>




      <div className="service-page-2">
        <div className="overlay">
          <div className="content">
           

            

            

           

           

          <div className="box">
              <div className="img">
                <img src={img1} alt="Creative Services" />
              </div>
              <div className="text">
                <h2>Creative Services</h2>
                <br />
                <p>
                  At our agency, we believe in the power of targeted creative communication across various mediums—be it print, outdoor, or digital. Our approach harnesses the potential of strategic creativity combined with persuasive messaging to bridge the gap between your brand and its consumers, opening new vistas for growth and engagement. Let us transform your brand’s presence with compelling narratives and visuals that captivate and convert.
                </p>
              </div>
            </div>





            <div className="box">
              <div className="img">
                <img src={img3} alt="Digital Content and Promotion" />
              </div>
              <div className="text">
                <h2>Digital Content and Promotion</h2>
                <br />
                <p>
                  In today’s digital age, online presence is crucial. Our dedicated digital team is adept at crafting and executing powerful digital promotions. With the majority of your target buyers spending significant time online, we ensure your brand gets maximum exposure through online advertising and mobile marketing. Gain a competitive edge with our cutting-edge e-communication strategies, designed to engage and convert in the ever-evolving digital landscape.
                </p>
              </div>
            </div>



          </div>
        </div>
      </div>





      <div className="service-page-3">
        <div className="overlay">
          <div className="content">
           

            

            

           

           

          <div className="box">
                <div className="img">
                  <img src={img2} alt="Media Planning and Buying" />
                </div>
                <div className="text">
                  <h2>Media Planning and Buying</h2>
                  <br />
                  <p>
                    Maximize your advertising budget with our expert media planning and buying services. Our skilled media team ensures your funds are judiciously allocated to the right channels, delivering optimal results. We specialize in creating efficient, cost-effective media strategies that provide the support you need to reach your target audience and achieve your marketing goals.
                  </p>
                </div>
              </div>






           
              <div className="box">
              <div className="img">
                <img src={img8} alt="Event Management" />
              </div>
              <div className="text">
                <h2>Event Management</h2>
                <br />
                <p>
                  Experience seamless event management with our comprehensive support services. From 3D model design to on-site pavilion fabrication, we handle every aspect of your event with precision and expertise. Our specialized units are equipped to manage all operations efficiently, ensuring your event is memorable and impactful.
                </p>
              </div>
            </div>




          </div>
        </div>
      </div>





      

      
    </>
  );
}
