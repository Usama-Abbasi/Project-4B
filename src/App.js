import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import Navbar from './components/Navbar';
import TopComponent from './components/TopComponent';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ScrollAnimation from 'react-animate-on-scroll';


function App() {
  return (
    <div className="body">
      <Navbar />
      <TopComponent />
      <ScrollAnimation animateIn='bounceInLeft'>
        <AboutUs />
      </ScrollAnimation>
      <Footer />
    </div>
  );
}

export default App;
