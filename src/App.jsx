import React from "react";

import {HashRouter as Router,Routes,Route} from 'react-router-dom' 
import Home from "./pages/Home";
import Service from "./pages/Service";
import ContactUs from "./pages/ContactUs";

function App(){

  return(
  <>
 <Router>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Service" element={<Service/>}/>
    <Route path="/ContactUs" element={<ContactUs/>}/>
  </Routes>
</Router>  
  </>
  
       
    
  )
}

export default App;