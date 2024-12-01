import React from 'react';
import Navbar from './components/Navbar';
import Moi from './components/Moi';
import Presentation from './components/Presentation';
import Competence from './components/Competence';
import Projet from './components/Projet';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <body className='bg-[#0D1520]'>

      <div>
        <Navbar />
        <Moi />
        <Presentation />
        <Competence />
        <Projet />
        <Contact />
        <Footer />
      </div>
    </body>
  );
};

export default App;

//en place le contact  