import React from 'react';

import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Intro />
    <SpecialMenu />
    <Chef />
    <Laurels />
    <AboutUs />
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
