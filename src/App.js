import React from 'react';

import './App.scss';
import Header from './components/Header';
import Intro from './components/Intro';
import Form from './components/Form';
import Terms from './components/Terms';
import Exterior from './components/Exterior';
import LearnMore from './components/LearnMore';
import Footer from './components/Footer';

function App() {
  return (
    <div className="main">
      <Header />
      <Intro />
      <Form />
      <Terms />
      <Exterior />
      <LearnMore />
      <Footer />
    </div>
  );
}

export default App;
