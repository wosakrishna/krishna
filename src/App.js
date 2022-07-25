
// import './App.css';
// // import First from './1/First';

//  import Check from './1/Check';
//  import Home from './1/Home';
//  import About from './1/About';
//  import ContactUS from './1/ContactUS';
//  import Footer from './1/Footer';
// // import NoteState from './Context/NoteState';
// import {
//   BrowserRouter as Router,
//   Routes ,
//  Route
// } from "react-router-dom";

// function App() {
//   return (
 
//  <>
//  <Router>
//   <Check/>
//   <Routes >
//   <Route exact path="/" element={<Home/>}/>
//           <Route exact path="/about" element={<About/>}/>
//           <Route exact path="/contact" element={<ContactUS/>}/>
          
//  </Routes>
//  <Footer/>
//  </Router>

//  </>
//   );
// }

// export default App;


import React from "react"
import Header from "./component/Head/Header"
import Features from "./component/Features/Features"
import Home from "./component/Hero/Home"
import Portfolio from "./component/Portfolio/Portfolio"
// import Resume from "./component/Resume/Resume"
import Testimonial from "./component/Testimonial/Testimonial"
// import Blog from "./component/Blog/Blog"
import Contact from "./component/Contact/Contact"
import Footer from "./component/Footer"
import "./App.css"

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Portfolio />
      {/* <Resume /> */}
      <Testimonial />
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </>
  )
}

export default App
