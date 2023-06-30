import React from 'react';
import Navbar from './component/Navbar/Navbar';
import TypeBanner from './component/Banner/TypeBanner';
import About from './component/About';
import Service from './component/Service';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact';
import Skill from './component/Skill/Skill';
import Footer from './component/Footer';
import jhonData from './component/jhonData';


export const Home2 = () => (
  <div className="body_wrapper">
      <Navbar mContainer="custome_container" mainlogo="logo2.png" stickylogo="logo.png"/>
      <TypeBanner jhonData={jhonData}/>
      <About aClass="about_area" jhonData={jhonData}/>
      <Portfolio/>
      <Skill/>
      <Contact jhonData={jhonData}/>
      <Footer jhonData={jhonData}/>
  </div>
)


