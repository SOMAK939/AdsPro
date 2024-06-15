import React from "react";

import {HashRouter as Router,Routes,Route} from 'react-router-dom' 
import Home from "./pages/Home";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
<<<<<<< HEAD


=======
>>>>>>> 37984f62b84d531bce4965ac5268148c11804583

function App(){

  return(
  <>
 <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
    <Route path="/Gallery" element={<Gallery/>}/>
<<<<<<< HEAD
  
   
=======
>>>>>>> 37984f62b84d531bce4965ac5268148c11804583
  </Routes>
</Router>  
  </>
  
       
    
  )
}

export default App;